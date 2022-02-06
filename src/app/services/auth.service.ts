import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(data) {
    return this.http.post(`api/login`, data);
  }

  register(data) {
    return this.http.post(`api/register`, data);
  }

  user() {
    return this.http.get(`api/user`);
  }

  updateInfo(data) {
    return this.http.put(`api/user/info`, data);
  }

  updatePassword(data) {

    return this.http.put(`api/user/password`, data);
  }

}
