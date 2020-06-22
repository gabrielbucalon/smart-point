import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

// Components angular
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatButtonModule } from "@angular/material/button";

//hammerjs
import "hammerjs";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginModule, LoginRoutingModule } from './autenticacao';
import { RegisterModule } from './autenticacao/register/register.module';
import { RegisterComponent } from './autenticacao/register/components/register/register.component';

@NgModule({
  declarations: [AppComponent, RegisterComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    LoginModule,
    RegisterModule,
    LoginRoutingModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
