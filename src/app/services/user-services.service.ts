import { Injectable } from '@angular/core';
import { User } from '../model/user.model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UserServicesService {
  private isAuthenticated:boolean = false
  private isAuthListener: any;

  constructor(private http: HttpClient, private router:Router) { }

  newUser(data:User){
    return this.http.post<any>('http://localhost:4111/userRegister',data)
  }
  loginCheck(data:any){
    this.http.post<any>('http://localhost:4111/userLogin',data).subscribe((loginData) => {
      localStorage.setItem('id_token',loginData.token);
      if(loginData.token){
        this.isAuthenticated=true; 
        // this.isAuthListener.next(true);
        this.router.navigateByUrl('/home');
      }
    });
  }
}
