import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FruitModule } from './fruit/fruit.module';
import { FruitRoutingModule } from './fruit/fruit-routing.module';




@NgModule({
  declarations: [
    AppComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FruitModule,
    FormsModule,
    FruitRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
