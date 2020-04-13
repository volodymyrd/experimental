import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AdDirective} from './ad.directive';
import {AdBannerComponent} from './ad-banner/ad-banner.component';
import {HeroProfileComponent} from './hero-profile/hero-profile.component';
import {HeroJobAdComponent} from './hero-job-ad/hero-job-ad.component';
import {AdService} from './ad.service';

@NgModule({
  declarations: [
    AppComponent,
    AdDirective,
    AdBannerComponent,
    HeroProfileComponent,
    HeroJobAdComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [AdService],
  entryComponents: [HeroJobAdComponent, HeroProfileComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
