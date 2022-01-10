import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MathFactsComponent } from './core/components/math-facts/math-facts.component';
import { EvenComponent } from './core/components/even/even.component';
import { OddComponent } from './core/components/odd/odd.component';

@NgModule({
  declarations: [
    AppComponent,
    MathFactsComponent,
    EvenComponent,
    OddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
