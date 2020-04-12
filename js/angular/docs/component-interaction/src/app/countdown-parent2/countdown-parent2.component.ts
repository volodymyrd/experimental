import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {CountdownTimerComponent} from '../countdown-timer/countdown-timer.component';

@Component({
  selector: 'app-countdown-parent-vc',
  template: `
      <h3>Countdown to Liftoff (via ViewChild)</h3>
      <button (click)="start()">Start</button>
      <button (click)="stop()">Stop</button>
      <div class="seconds">{{ seconds() }}</div>
      <app-countdown-timer></app-countdown-timer>
  `,
  styleUrls: ['../../assets/demo.css']
})
export class CountdownParent2Component implements AfterViewInit {
  @ViewChild(CountdownTimerComponent, {static: true})
  private timerComponent: CountdownTimerComponent;

  seconds() {
    return 0;
  }

  ngAfterViewInit(): void {
    // Redefine `seconds()` to get from the `CountdownTimerComponent.seconds` ...
    // but wait a tick first to avoid one-time devMode
    // unidirectional-data-flow-violation error
    setTimeout(() => this.seconds = () => this.timerComponent.seconds, 0);
  }

  start() {
    this.timerComponent.start();
  }

  stop() {
    this.timerComponent.stop();
  }
}
