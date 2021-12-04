import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormGroupDirective, Validators} from '@angular/forms';
import {AuthService} from '../../../core/services/auth.service';
import {ValidationService} from '../../../core/services/validation/validation.service';

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
      const data = this.signUpForm.value;
      delete data.confirmPassword;
      this.authService.registerByEmail(data).subscribe((user) => {
        this.signUpForm.reset();
        formGroupDirective.resetForm();
        console.log(user);
      });
    } else {
      ValidationService.validateForm(this.signUpForm.controls);
    }
  }

  private initSignUpForm(): void {
    this.signUpForm = this.fb.group({
      email: this.fb.control('', [
        ValidationService.required,
        ValidationService.emailValidator(),
      ]),
      password: this.fb.control('', [
        Validators.required,
        ValidationService.passwordValidator(),
      ]),
      confirmPassword: this.fb.control('', [
        ValidationService.required,
        ValidationService.confirmPassword('password'),
      ]),
    });
  }
}
