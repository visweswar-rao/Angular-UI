import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AppService } from "../app.service";
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {

  signUpForm: FormGroup;

  constructor(private router: Router, public appService: AppService, private formBuilder: FormBuilder) {
    this.createForm();
    this.signUpForm.get('password').valueChanges.subscribe((value) => {
      if (this.signUpForm.get('confirmPassword').value != value) {
        this.signUpForm.get('confirmPassword').setErrors({ notmatch: true });
      }
      else {
        this.signUpForm.get('confirmPassword').setErrors(null);
      }

    });
    this.signUpForm.get('confirmPassword').valueChanges.subscribe((value) => {
      if (this.signUpForm.get('password').value != value) {
        this.signUpForm.get('confirmPassword').setErrors({ notmatch: true });
      }
      else {
        this.signUpForm.get('confirmPassword').setErrors(null);
      }

    });
  }

  createForm() {
    this.signUpForm = this.formBuilder.group({
      userName: new FormControl(''),
      emailId: new FormControl('', [Validators.email]),
      password: new FormControl(''),
      confirmPassword: new FormControl(''),
      displayName: new FormControl(''),
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      nickName: new FormControl(''),
      webSite: new FormControl(''),
      Bio: new FormControl(''),
      jabber: new FormControl(''),
      aolIm: new FormControl(''),
      yahooIM: new FormControl(''),
    })
  }

  /**
   * signup click event
   */
  signUp() {
    this.appService.signUp(this.signUpForm.value).subscribe(() => {
      this.router.navigate(['/Dashboard']);
    });

  }

}
