import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './comp/home/home.component';
import { IntroPageComponent } from './comp/intro-page/intro-page.component';
import { NavBarComponent } from './comp/nav-bar/nav-bar.component';
import { ProfileComponent } from './comp/profile/profile.component';
import { UserRegisterComponent } from './comp/user-register/user-register.component';
import { UserSigninComponent } from './comp/user-signin/user-signin.component';
import { AdminDashComponent } from './compAdmin/admin-dash/admin-dash.component';
import { AdminLoginComponent } from './compAdmin/admin-login/admin-login.component';
import { AdminUserViewComponent } from './compAdmin/admin-user-view/admin-user-view.component';

const routes: Routes = [
  {path:'',component:IntroPageComponent},
  {path:'userRegister',component:UserRegisterComponent},
  {path:'userLogin',component:UserSigninComponent},
  {path:'home',component:HomeComponent},
  {path:'nav',component:NavBarComponent},
  {path:'profile',component:ProfileComponent},
  {path:'adminLogin',component:AdminLoginComponent},
  {path:'admindash',component:AdminDashComponent},
  {path:'adminUserView',component:AdminUserViewComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
