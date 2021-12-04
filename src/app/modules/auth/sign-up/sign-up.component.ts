import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormGroupDirective, Validators,} from '@angular/forms';
import {AuthService} from '../../../core/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  signUpForm: FormGroup;
  hide = true;

  constructor(private authService: AuthService, private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.initSignUpForm();
  }

  signUp(formGroupDirective: FormGroupDirective): void {
    if (this.signUpForm.valid) {
      // TODO: Sign up API
      // this.resetPasswordForm.reset();
      // formGroupDirective.resetForm();
    }
  }

  private initSignUpForm(): void {
    this.signUpForm = this.fb.group({
      email: this.fb.control('', [Validators.required, Validators.email]),
      password: this.fb.control('', [Validators.required]),
    });
  }
}
