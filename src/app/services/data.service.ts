import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient:HttpClient) { }

  getUsers(){
    return this.httpClient.get('https://zibito-staging.azurewebsites.net/api/test');
  }

  registerUser(user){
    return this.httpClient.post('https://zibito-staging.azurewebsites.net/api/test',user);
  }
}
