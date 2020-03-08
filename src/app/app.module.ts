import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NumberToStringConverterComponent } from './number-to-string-converter/number-to-string-converter.component';

@NgModule({
  declarations: [
    AppComponent,
    NumberToStringConverterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
