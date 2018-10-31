import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddressComponent } from './address/address.component';

import{ ReactiveFormsModule , FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AddressComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
