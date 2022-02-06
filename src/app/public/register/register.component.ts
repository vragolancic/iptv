import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {HttpErrorResponse} from "@angular/common/http";
import {errorMessagesResponse} from "../../helper/errors/errormessagesresponse";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;
  constructor(private formBuilder: FormBuilder, private authService: AuthService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        role_id: 1,
        password_confirm: '',
    })
  }

  submit() {
    const data = this.form.getRawValue();
    this.authService.register(data).subscribe({
      next: (res) => {
        console.log(res)
      },
      error: (error: HttpErrorResponse) => {
        const errorMessage = errorMessagesResponse(error);
        errorMessage.forEach(err => {
          this.toastr.error(err);
        });
      }
    })
  }

}
