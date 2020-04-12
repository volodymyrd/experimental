import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeroMainComponent } from './hero-main/hero-main.component';
import { QuestSummaryComponent } from './quest-summary/quest-summary.component';
import { HeroTeamComponent } from './hero-team/hero-team.component';
import { HeroDetailsComponent } from './hero-details/hero-details.component';
import { HeroControlsComponent } from './hero-controls/hero-controls.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroMainComponent,
    QuestSummaryComponent,
    HeroTeamComponent,
    HeroDetailsComponent,
    HeroControlsComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
