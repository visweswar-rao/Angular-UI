import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from "../app.service";
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  checked = false;
  invalidUserOrPassword = false;
  loginForm: FormGroup;

  constructor(private router: Router, public appService: AppService, private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
      staySignin: [true]
    });

    this.checked = true;
  }

  /**
   * logIn click event
   */
  logIn() {
    this.appService.login(this.loginForm.value).subscribe((status) => {
      debugger
      
      if (status) {
        this.invalidUserOrPassword = false;
        this.router.navigate(['/Dashboard']);
      } else {
        this.invalidUserOrPassword = true;
      }

    });
  }

  signUp() {
    this.router.navigate(['/SignUp']);
  }

}
