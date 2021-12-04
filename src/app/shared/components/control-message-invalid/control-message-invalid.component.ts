import {Component, Input} from '@angular/core';
import {AbstractControl, FormControl, ValidationErrors} from '@angular/forms';
import {ValidatorService} from '../../../core/services/validation/validator.service';
import {IControlInvalidMassage} from '../../../core/interfaces/control.invalid.message.interface';

@Component({
  selector: 'app-control-message-invalid',
  templateUrl: './control-message-invalid.component.html',
  styleUrls: ['./control-message-invalid.component.scss'],
})
export class ControlMessageInvalidComponent {
  @Input() control: FormControl | AbstractControl;
  @Input() formLabel: string | null = null;
  // tslint:disable-next-line:no-input-rename
  @Input('message') messageOverrides: ValidationErrors;
  @Input() forceShow: boolean;
  validationErrors: object;

  get errorMessage(): IControlInvalidMassage {
    for (const propertyName in this.control.errors) {
      if (
        this.control.errors.hasOwnProperty(propertyName) &&
        (this.control.touched || this.forceShow)
      ) {
        this.validationErrors = this.control.errors[propertyName];
        return ValidatorService.getValidatorErrorMessage(
          propertyName,
          this.formLabel,
          this.validationErrors,
          this.messageOverrides
        );
      }
    }

    return null;
  }
}
