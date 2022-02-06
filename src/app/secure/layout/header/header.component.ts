import {Component, Input, OnInit} from '@angular/core';
import {AuthService} from "../../../services/auth.service";
import {User} from "../../../interfaces/user";
import {Router} from "@angular/router";
import {Auth} from "../../../classes/auth";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  user: User;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    Auth.userEmitter.subscribe((user: User) => {
      this.user = user;
    })
  }

  singOut() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

}
