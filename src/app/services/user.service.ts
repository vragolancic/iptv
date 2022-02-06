import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  all(currentPage) {
    return this.http.get(`api/users?page=${currentPage}`);
  }
}
