import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServicesService } from 'src/app/services/user-services.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent {
emailExistsMessage:String='';

constructor(private userService:UserServicesService,private router:Router){}


  onSubmit(userData: NgForm){
    if(userData.invalid){
      return;
    }else{
      return this.userService.newUser(userData.value).subscribe((respose)=>{
        console.log(respose,"adfa");
        if(respose.status){
          console.log("Hii");
this.router.navigateByUrl('home')
        }else{
          console.log("hello");
        }
        if(respose.emailExists){
          this.emailExistsMessage="The email already exists"
        }
      })
    }
  
    
  }

}

