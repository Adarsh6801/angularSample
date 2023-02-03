import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User, UserLogin } from 'src/app/model/user.model';
import { UserServicesService } from 'src/app/services/user-services.service';
@Component({
  selector: 'app-user-signin',
  templateUrl: './user-signin.component.html',
  styleUrls: ['./user-signin.component.css']
})
export class UserSigninComponent {
  constructor(private userservice:UserServicesService){}
  onSubmit(data:NgForm){
    console.log(data.value,'sfasdf');
    this.userservice.loginCheck(data.value)
  }

}
