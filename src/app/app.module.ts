import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CyclicModule } from 'cyclic';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CyclicModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
