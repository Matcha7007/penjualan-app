import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserSigninComponent } from './templates/users/user-signin/user-signin.component';
import { UserSignupComponent } from './templates/users/user-signup/user-signup.component';
import { NavBarComponent } from './templates/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    UserSigninComponent,
    UserSignupComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
