import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/user.service";
import {User} from "../../interfaces/user";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: User[];
  currentPage = 1;
  lastPage: number;

  action: boolean = true;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.refresh();
  }

  refresh() {
    this.userService.all(this.currentPage).subscribe((res:any) => {
      this.users = res.data;
      this.lastPage = res.meta.last_page;
    })
  }

  prev() {
    if(this.currentPage === 1) return;
    this.currentPage--;
    this.refresh();
  }

  next() {
    if(this.currentPage === this.lastPage) return;
    this.currentPage++;
    this.refresh();
  }

}
