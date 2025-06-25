import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { ProductDashboardComponent } from './product-dashboard/product-dashboard';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    App,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     ProductDashboardComponent,
     FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [App]
})
export class AppModule { }
