import { NgModule } from '@angular/core';
import { NxNico123xyLibComponent } from './nx-nico123xy-lib.component';
import {HttpClientModule} from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    NxNico123xyLibComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  exports: [
    NxNico123xyLibComponent
  ]
})
export class NxNico123xyLibModule { }
