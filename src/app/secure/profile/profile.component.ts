import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Auth} from "../../classes/auth";
import {AuthService} from "../../services/auth.service";
import {ToastrService} from "ngx-toastr";
import {User} from "../../interfaces/user";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  infoForm: FormGroup;
  passwordForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private toast: ToastrService) { }

  ngOnInit(): void {
    const user = Auth.user;
    this.infoForm = this.fb.group({
      first_name : user.first_name,
      last_name : user.last_name,
      email: user.email,
    });

    this.passwordForm = this.fb.group({
      password : '',
      password_confirm : ''
    });
  }

  submitInfo() {
    const dataInfo = this.infoForm.getRawValue();
    this.authService.updateInfo(dataInfo).subscribe({
      next: (user: User) => {
        Auth.user = user;
        this.toast.success('Uspesno ste izmenili info')
      },
      error: (error) => {
        console.log(error);
        this.toast.error('greska kod izmene')
      }
    })
  }

  submitPassword() {
    const dataPassword = this.passwordForm.getRawValue();
    this.authService.updatePassword(dataPassword).subscribe({
      next: (res) => {
        console.log(res);
        this.toast.success('Uspesno ste izmenili password')
      },
      error: (error) => {
        console.log(error);
        this.toast.error('greska kod izmene')
      }
    })
  }

}
