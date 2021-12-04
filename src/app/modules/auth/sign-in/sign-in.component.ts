import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormGroupDirective, Validators} from '@angular/forms';
import {AuthService} from "../../../core/services/auth.service";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  signInForm: FormGroup;
  hide = true;

  constructor(
    private authService: AuthService,
    private fb: FormBuilder
  ) {
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
    }
  }

  private initSignInForm(): void {
    this.signInForm = this.fb.group({
      email: this.fb.control('', [Validators.required, Validators.email]),
      password: this.fb.control('', [Validators.required]),
    });
  }
}
