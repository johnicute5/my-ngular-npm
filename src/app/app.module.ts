import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NxNico123xyLibModule } from 'projects/nx-nico123xy-lib/src/public-api';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NxNico123xyLibModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
