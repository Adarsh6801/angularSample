import { Component, OnInit } from '@angular/core';
import { AdminServicesService } from 'src/app/services/admin-services.service';

@Component({
  selector: 'app-admin-user-view',
  templateUrl: './admin-user-view.component.html',
  styleUrls: ['./admin-user-view.component.css']
})
export class AdminUserViewComponent implements OnInit{

  constructor(private adminService : AdminServicesService){}
  allUsers:any=[];
  
  ngOnInit(): void {
    this.userData();
  }
  userData(){
    this.adminService.adminviewUsers().subscribe((response)=>{
      this.allUsers=response.allUsers;
      
    })
  }
  block(status:String){
    this.adminService.blockUser(status).subscribe((response)=>{
    
    })
  }
  unblock(status:String){
    this.adminService.unblockUser(status).subscribe((response)=>{
    
    })
  }

}
