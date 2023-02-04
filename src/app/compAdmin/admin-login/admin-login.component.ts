import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminServicesService } from 'src/app/services/admin-services.service';


@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
  pmessage=''
  emessage=''
  message=''
  constructor(private adminService : AdminServicesService,private router:Router){}
  onSubmit(data:NgForm){
    this.adminService.adminLoginCheck(data.value).subscribe((response)=>{
      console.log(response);
      if(response.password){
        console.log(this.pmessage,'asdfasdfasdfads');
        
       this.pmessage=response.pmessage; 
      }
      if(response.email){
        this.emessage=response.emessage;
      }
      if(response.adminVerify){
        this.router.navigateByUrl('admin-home')
      }
    })
  }
}
