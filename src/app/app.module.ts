import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FunnelComponent } from './clarity/funnel/funnel.component';
import { VetrinaComponent } from './clarity/vetrina/vetrina.component';
import { TypComponent } from './clarity/typ/typ.component';

@NgModule({
  declarations: [AppComponent, FunnelComponent, VetrinaComponent, TypComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
