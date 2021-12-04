import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormGroupDirective, Validators} from "@angular/forms";
import {AuthService} from "../../../core/services/auth.service";

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  resetPasswordForm: FormGroup;
  hide = true;

  constructor(private authService: AuthService, private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.initResetPasswordForm();
  }

  resetPassword(formGroupDirective: FormGroupDirective): void {
    if (this.resetPasswordForm.valid) {
      // TODO: Reset password API
      // this.resetPasswordForm.reset();
      // formGroupDirective.resetForm();
    }
  }

  private initResetPasswordForm(): void {
    this.resetPasswordForm = this.fb.group({
      email: this.fb.control('', [Validators.required, Validators.email])
    });
  }
}
