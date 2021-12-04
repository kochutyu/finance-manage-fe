import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormGroupDirective, Validators,} from '@angular/forms';

import {AuthService} from '../../../core/services/auth.service';
import {ToasrtService} from '../../../core/services/toasrt.service';
import {ValidationService} from '../../../core/services/validation/validation.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
})
export class ResetPasswordComponent implements OnInit {
  resetPasswordForm: FormGroup;
  hide = true;

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private toasrtService: ToasrtService
  ) {
  }

  ngOnInit(): void {
    this.initResetPasswordForm();
  }

  resetPassword(formGroupDirective: FormGroupDirective): void {
    if (this.resetPasswordForm.valid) {
      // TODO: Reset password API
      this.toasrtService.error('NOTIFY.PROVIDE_API');
      this.resetPasswordForm.reset();
      formGroupDirective.resetForm();
    } else {
      ValidationService.validateForm(this.resetPasswordForm.controls);
    }
  }

  private initResetPasswordForm(): void {
    this.resetPasswordForm = this.fb.group({
      email: this.fb.control('', [Validators.required, Validators.email]),
    });
  }
}
