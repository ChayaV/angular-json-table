import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  //baseURL:String = "https://gorest.co.in/public/v2";

  constructor(private http:HttpClient) { }

  getAllUsers(){
    return this.http.get<any>("https://gorest.co.in/public/v2/users");
  }
}
