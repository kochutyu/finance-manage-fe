import {Injectable} from '@angular/core';
import {ValidationErrors} from '@angular/forms';
import {IControlInvalidMassage} from '../../interfaces/control.invalid.message.interface';

@Injectable()
export class ValidatorService {
  static getValidatorErrorMessage(
    validatorName: string,
    formLabel?: string,
    validatorValue?: ValidationErrors | null,
    configOverride?: ValidationErrors
  ): IControlInvalidMassage {
    const configOverrideMessage = {...configOverride};
    if (configOverrideMessage) {
      Object.keys(configOverrideMessage).map((key) => {
        configOverrideMessage[key] = {
          message: configOverrideMessage[key],
          translateParam: {},
        };
      });
    }

    const config = {
      required: {
        message: 'VALIDATION.REQUIRED',
        translateParam: {
          formLabel,
        },
      },
      minlength: {
        message: 'VALIDATION.MIN_LENGTH',
        translateParam: {
          formLabel,
          requiredLength: validatorValue.requiredLength,
        },
      },
      maxlength: {
        message: 'VALIDATION.MAX_LENGTH',
        translateParam: {
          formLabel,
          requiredLength: validatorValue.requiredLength,
        },
      },
      invalidEmailAddress: {
        message: 'VALIDATION.INVALID_EMAIL',
        translateParam: {},
      },
      min: {
        message: 'VALIDATION.MIN',
        translateParam: {
          formLabel,
          min: validatorValue.min,
        },
      },
      max: {
        message: 'VALIDATION.MAX',
        translateParam: {
          formLabel,
          max: validatorValue.max,
        },
      },
      invalidPassword: {
        message: 'VALIDATION.INVALID_PASSWORD',
        translateParam: {},
      },
      confirmPassword: {
        message: 'VALIDATION.CONFIRM_PASSWORD_NOT_MATCHED',
        translateParam: {},
      },
      ...configOverrideMessage,
    };

    return config[validatorName];
  }
}
