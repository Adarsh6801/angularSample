import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminServicesService {

  constructor(private http : HttpClient, private router : Router) { }
  adminLoginCheck(data:any){
    return this.http.post<any>('http://localhost:4111/admin/adminLogin',data)
  }
  adminviewUsers(){
    return this.http.get<any>('http://localhost:4111/admin/admin-view-users')
  }
  blockUser(status:String){
    return this.http.get<any>(`http://localhost:4111/admin/block-user?id=${status}`)
  }
  unblockUser(status:String){
    return this.http.get<any>(`http://localhost:4111/admin/unblock-user?id=${status}`)
  }
}
