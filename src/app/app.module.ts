import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserRegisterComponent } from './comp/user-register/user-register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { UserSigninComponent } from './comp/user-signin/user-signin.component';
import { IntroPageComponent } from './comp/intro-page/intro-page.component';
import { NavBarComponent } from './comp/nav-bar/nav-bar.component';
import { HomeComponent } from './comp/home/home.component';
import { AdminLoginComponent } from './compAdmin/admin-login/admin-login.component';
import { AdminHomeComponent } from './compAdmin/admin-home/admin-home.component';
import { AdminDashComponent } from './compAdmin/admin-dash/admin-dash.component';
import { AdminUserViewComponent } from './compAdmin/admin-user-view/admin-user-view.component';
import { FormsModule } from '@angular/forms';
import { ProfileComponent } from './comp/profile/profile.component';
import {MatSidenavModule} from '@angular/material/sidenav';

@NgModule({
  declarations: [
    AppComponent,
    UserRegisterComponent,
    UserSigninComponent,
    IntroPageComponent,
    NavBarComponent,
    HomeComponent,
    AdminLoginComponent,
    AdminHomeComponent,
    AdminDashComponent,
    AdminUserViewComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    FormsModule,
    HttpClientModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
