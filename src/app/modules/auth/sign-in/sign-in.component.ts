import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormGroupDirective} from '@angular/forms';

import {AuthService} from '../../../core/services/auth.service';
import {ValidationService} from '../../../core/services/validation/validation.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  signInForm: FormGroup;
  hide = true;

  constructor(private authService: AuthService, private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.initSignInForm();
  }

  signIn(formGroupDirective: FormGroupDirective): void {
    if (this.signInForm.valid) {
      this.authService.signInByEmail(this.signInForm.value).subscribe(() => {
        this.signInForm.reset();
        formGroupDirective.resetForm();
      });
    } else {
      ValidationService.validateForm(this.signInForm.controls);
    }
  }

  private initSignInForm(): void {
    this.signInForm = this.fb.group({
      email: this.fb.control('kochutyura.dev.1@gmail.com', [
        ValidationService.required,
        ValidationService.emailValidator(),
      ]),
      password: this.fb.control('Qwerty18!', [
        ValidationService.required,
        ValidationService.passwordValidator(),
      ]),
    });
  }
}
