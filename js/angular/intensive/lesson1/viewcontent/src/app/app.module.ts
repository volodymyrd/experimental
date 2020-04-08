import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import { ChildComponent } from './item/child/child.component';
import { HostlinkDirective } from './hostlink.directive';
import { ColoryDirective } from './colory.directive';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    ChildComponent,
    HostlinkDirective,
    ColoryDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
