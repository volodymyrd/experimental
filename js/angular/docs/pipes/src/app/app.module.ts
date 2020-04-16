import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeroBirthday2Component } from './hero-birthday2/hero-birthday2.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroBirthday2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
