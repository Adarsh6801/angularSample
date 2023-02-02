import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserRegisterComponent } from './comp/user-register/user-register.component';
import { UserSigninComponent } from './comp/user-signin/user-signin.component';

const routes: Routes = [
  {path:'userRegister',component:UserRegisterComponent},
  {path:'userLogin',component:UserSigninComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
