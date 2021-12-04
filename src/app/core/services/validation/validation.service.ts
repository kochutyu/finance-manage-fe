import {Injectable} from '@angular/core';
import {FM_VALIDATION_REG_EXP_FACTORY, IValidationRegExp,} from './inject-tokens/fm-validation-reg-exp.token';
import {AbstractControl, FormGroup, ValidatorFn, Validators} from '@angular/forms';
import {calculatingDays, convertValueToDate, isValidDate, startDate,} from '../../utils/date';

@Injectable()
export class ValidationService extends Validators {
  static regExp: IValidationRegExp = FM_VALIDATION_REG_EXP_FACTORY();

  static countryChooseValidator(chooseCountry): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } =>
      !!!control.value || chooseCountry
        ? null
        : {countryNotChoose: control.value};
  }

  static cityChooseValidator(hasPlaceId): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } =>
      hasPlaceId ? null : {cityNotChoose: control.value};
  }

  static phoneNumberValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      if (!!!control.value) {
        return null;
      }

      const digits = control.value.replace(/\D/g, '');
      if (digits.length < 7) {
        return {minDigitsLength: {requiredLength: 7}};
      }
      if (digits.length > 15) {
        return {maxDigitsLength: {requiredLength: 15}};
      }

      if (!control.value.match(ValidationService.regExp.phone)) {
        return {invalidPhoneNumberMask: true};
      }

      return null;
    };
  }

  static socialAccountsValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      for (const account of control.value) {
        if (!!account && !ValidationService.regExp.url.test(account)) {
          return {socialAccountsValidator: true};
        }
      }
      return null;
    };
  }

  static htmlTextMinValidator(
    min: number,
    ignoreDefaultTag = false
  ): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      const value =
        control.value &&
        control.value
          .replace(/<[^>]+>/g, '')
          .replace(/\s+/g, ' ')
          .replace(/&[\w]+;/, ' ');
      if (ignoreDefaultTag && control.value === '<p><br></p>') {
        return null;
      }
      if (control.value && value.length < min) {
        return {minlength: {requiredLength: min}};
      }
      return null;
    };
  }

  static htmlTextMaxValidator(max: number): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      const value =
        control.value &&
        control.value
          .replace(/<[^>]+>/g, '')
          .replace(/\s+/g, ' ')
          .replace(/&[\w]+;/, ' ');
      if (control.value && value.length >= max) {
        return {maxlength: {requiredLength: max}};
      }
      return null;
    };
  }

  static emailValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      if (control.value && control.value.length > 255) {
        return {maxlength: {requiredLength: 255}};
      }
      if (
        control.value &&
        !control.value.match(ValidationService.regExp.email)
      ) {
        return {invalidEmailAddress: true};
      }
      return null;
    };
  }

  static urlValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      if (
        control.value &&
        !control.value.toLowerCase().match(ValidationService.regExp.url)
      ) {
        return {urlIsNotCorrect: true};
      }
      return null;
    };
  }

  static urlWWWValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      if (
        control.value &&
        !control.value.match(ValidationService.regExp.urlWww)
      ) {
        return {urlIsNotCorrect: true};
      }
      return null;
    };
  }

  static validateForm(controls): void {
    Object.keys(controls).forEach((value) => {
      const field = controls[value];
      if (field instanceof FormGroup) {
        this.validateForm(field.controls);
      } else if (field.invalid) {
        field.markAsTouched();
      }
    });
  }

  static xssValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      /*const regexp = `<[^\\w<>]*(?:[^<>"'\\s]*:)?[^\\w<>]*(?:\\W*s\\W*c\\W*r\\W*i\\W*p\\W*t|\\W*f\\W*o\\W*r\\W*m|\\W*s\\W*t\\W*y\\W*l` +
        `\\W*e|\\W*s\\W*v\\W*g|\\W*m\\W*a\\W*r\\W*q\\W*u\\W*e\\W*e|(?:\\W*l\\W*i\\W*n\\W*k|\\W*o\\W*b\\W*j\\W*e\\W*c\\W*t|\\W*e\\W*m` +
        `\\W*b\\W*e\\W*d|\\W*a\\W*p\\W*p\\W*l\\W*e\\W*t|\\W*p\\W*a\\W*r\\W*a\\W*m|\\W*i?\\W*f\\W*r\\W*a\\W*m\\W*e|\\W*b\\W*a\\W*s` +
        `\\W*e|\\W*b\\W*o\\W*d\\W*y|\\W*m\\W*e\\W*t\\W*a|\\W*i\\W*m\\W*a?\\W*g\\W*e?|\\W*v\\W*i\\W*d\\W*e\\W*o|\\W*a\\W*u\\W*d\\W*i` +
        `\\W*o|\\W*b\\W*i\\W*n\\W*d\\W*i\\W*n\\W*g\\W*s|\\W*s\\W*e\\W*t|\\W*i\\W*s\\W*i\\W*n\\W*d\\W*e\\W*x|\\W*a\\W*n\\W*i\\W*m\\W*a` +
        `\\W*t\\W*e)[^>\\w])|(?:<\\w[\\s\\S]*[\\s\\0\\/]|['"])(?:formaction|style|background|src|lowsrc|ping|on(?:d(?:e(?:vice(?:` +
        `(?:orienta|mo)tion|proximity|found|light)|livery(?:success|error)|activate)|r(?:ag(?:e(?:n(?:ter|d)|xit)|(?:gestur|leav)e` +
        `|start|drop|over)?|op)|i(?:s(?:c(?:hargingtimechange|onnect(?:ing|ed))|abled)|aling)|ata(?:setc(?:omplete|hanged)|(?:availabl` +
        `|chang)e|error)|urationchange|ownloading|blclick)|Moz(?:M(?:agnifyGesture(?:Update|Start)?|ouse(?:PixelScroll|Hittest))|S` +
        `(?:wipeGesture(?:Update|Start|End)?|crolledAreaChanged)|(?:(?:Press)?TapGestur|BeforeResiz)e|EdgeUI(?:C(?:omplet|ancel)|Start)ed` +
        `|RotateGesture(?:Update|Start)?|A(?:udioAvailable|fterPaint))|c(?:o(?:m(?:p(?:osition(?:update|start|end)|lete)|mand(?:update)?)` +
        `|n(?:t(?:rolselect|extmenu)|nect(?:ing|ed))|py)|a(?:(?:llschang|ch)ed|nplay(?:through)?|rdstatechange)|h(?:(?:arging(?:time)?ch)` +
        `?ange|ecking)|(?:fstate|ell)change|u(?:echange|t)|l(?:ick|ose))|m(?:o(?:z(?:pointerlock(?:change|error)|(?:orientation|time)` +
        `change|fullscreen(?:change|error)|network(?:down|up)load)|use(?:(?:lea|mo)ve|o(?:ver|ut)|enter|wheel|down|up)|ve(?:start|end)?)` +
        `|essage|ark)|s(?:t(?:a(?:t(?:uschanged|echange)|lled|rt)|k(?:sessione|comma)nd|op)|e(?:ek(?:complete|ing|ed)|(?:lec(?:tstar)?)?t` +
        `|n(?:ding|t))|u(?:ccess|spend|bmit)|peech(?:start|end)|ound(?:start|end)|croll|how)|b(?:e(?:for(?:e(?:(?:scriptexecu|activa)te|` +
        `u(?:nload|pdate)|p(?:aste|rint)|c(?:opy|ut)|editfocus)|deactivate)|gin(?:Event)?)|oun(?:dary|ce)|l(?:ocked|ur)|roadcast|usy)|` +
        `a(?:n(?:imation(?:iteration|start|end)|tennastatechange)|fter(?:(?:scriptexecu|upda)te|print)|udio(?:process|start|end)|d` +
        `(?:apteradded|dtrack)|ctivate|lerting|bort)|DOM(?:Node(?:Inserted(?:IntoDocument)?|Removed(?:FromDocument)?)|(?:CharacterData` +
        `|Subtree)Modified|A(?:ttrModified|ctivate)|Focus(?:Out|In)|MouseScroll)|r(?:e(?:s(?:u(?:m(?:ing|e)|lt)|ize|et)|adystatechange` +
        `|pea(?:tEven)?t|movetrack|trieving|ceived)|ow(?:s(?:inserted|delete)|e(?:nter|xit))|atechange)|p(?:op(?:up(?:hid(?:den|ing)|` +
        `show(?:ing|n))|state)|a(?:ge(?:hide|show)|(?:st|us)e|int)|ro(?:pertychange|gress)|lay(?:ing)?)|t(?:ouch(?:(?:lea|mo)ve|en` +
        `(?:ter|d)|cancel|start)|ime(?:update|out)|ransitionend|ext)|u(?:s(?:erproximity|sdreceived)|p(?:gradeneeded|dateready)|n` +
        `(?:derflow|load))|f(?:o(?:rm(?:change|input)|cus(?:out|in)?)|i(?:lterchange|nish)|ailed)|l(?:o(?:ad(?:e(?:d(?:meta)?data|nd)` +
        `|start)?|secapture)|evelchange|y)|g(?:amepad(?:(?:dis)?connected|button(?:down|up)|axismove)|et)|e(?:n(?:d(?:Event|ed)?|` +
        `abled|ter)|rror(?:update)?|mptied|xit)|i(?:cc(?:cardlockerror|infochange)|n(?:coming|valid|put))|o(?:(?:(?:ff|n)lin|bsolet)e` +
        `|verflow(?:changed)?|pen)|SVG(?:(?:Unl|L)oad|Resize|Scroll|Abort|Error|Zoom)|h(?:e(?:adphoneschange|l[dp])|ashchange|olding)` +
        `|v(?:o(?:lum|ic)e|ersion)change|w(?:a(?:it|rn)ing|heel)|key(?:press|down|up)|(?:AppComman|Loa)d|no(?:update|match)|Request` +
        `|zoom))[\\s\\0]*=`;*/
      const regexp = /([<>#&])+/;
      if (control.value.match(regexp)) {
        return {xssDetected: true};
      }

      return null;
    };
  }

  static confirmPassword(field: string): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      if (
        control.parent &&
        control.parent.get(field) &&
        control.parent.get(field).value !== control.value
      ) {
        return {confirmPassword: true};
      }
      return null;
    };
  }

  static passwordValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      if (
        control.value &&
        !control.value.match(ValidationService.regExp.password)
      ) {
        return {invalidPassword: true};
      }

      return null;
    };
  }

  static noWhiteSpaces(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      if (control.value && control.value.match(/\s/)) {
        return {noWhiteSpaces: true};
      }
      return null;
    };
  }

  static followingChanges(form: AbstractControl, field: string): void {
    if (form.get(field).value) {
      form.get(field).updateValueAndValidity();
    }
  }

  static codeValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      if (
        control.value &&
        !control.value.match(ValidationService.regExp.code)
      ) {
        return {invalidCode: true};
      }
      return null;
    };
  }

  static numberValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      if (
        control.value &&
        !String(control.value).match(ValidationService.regExp.number)
      ) {
        return {numberIsNotCorrect: true};
      }
      return null;
    };
  }

  static checkStartDate(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      if (!control.value) {
        return null;
      }

      const date = convertValueToDate(control.value);
      return startDate().getTime() <= date.getTime()
        ? null
        : {checkStartDate: true};
    };
  }

  static checkEndDate(field: string, isFieldRequired = true): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      if (!control.value) {
        return null;
      }

      const endDate = convertValueToDate(control.value);
      const hasStartDate =
        control.parent &&
        control.parent.get(field) &&
        control.parent.get(field).value;
      const start = hasStartDate
        ? convertValueToDate(control.parent.get(field).value)
        : null;
      if (!isFieldRequired && !start) {
        return null;
      }
      if (!start || !isValidDate(start)) {
        return {isNotDate: {field}};
      }

      return start.getTime() <= endDate.getTime()
        ? null
        : {checkEndDate: true};
    };
  }

  static checkDurationBetweenStartAndEndDays(
    startField: string,
    endField: string
  ): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      if (!control.value) {
        return null;
      }
      const hasStartDate =
        control.parent &&
        control.parent.get(startField) &&
        control.parent.get(startField).value;
      const start = hasStartDate
        ? convertValueToDate(control.parent.get(startField).value)
        : null;
      if (!start || !isValidDate(start)) {
        return null;
      }

      const hasEndDate =
        control.parent &&
        control.parent.get(endField) &&
        control.parent.get(endField).value;
      const endDate = hasEndDate
        ? convertValueToDate(control.parent.get(endField).value)
        : null;
      if (!endField || !isValidDate(endDate)) {
        return null;
      }

      const hours = calculatingDays(start, endDate) * 24;
      return Number(hours) >= Number(control.value)
        ? null
        : {checkDurationBetweenStartAndEndDays: {hours}};
    };
  }

  static checkMaxValueValidator(value): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      if (control.value && control.value > +value) {
        return {maxlength: {requiredLength: value}};
      }
      return null;
    };
  }

  static fileTypeValidator(type = []): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      const file = control.value;
      if (file && !type.includes(file.type)) {
        return {invalidFile: true};
      }

      return null;
    };
  }

  static fileSizeValidator(maxFileSizeInMB: number): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      const file = control.value;
      if (file && file.size / 1024 / 1024 > maxFileSizeInMB) {
        return {invalidFileSize: {maxFileSize: maxFileSizeInMB}};
      }

      return null;
    };
  }

  static checkNameValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      const value = control.value;
      if (value && ValidationService.regExp.htmlTags.test(value)) {
        return {nameHasHtmlTags: true};
      }

      return null;
    };
  }

  static minLengthTrim(minLength: number): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      const value = control.value ? control.value.trim() : '';
      if (value.length < minLength) {
        return {
          minlength: {requiredLength: minLength, actualLength: value.length},
        };
      }

      return null;
    };
  }

  static maxLengthTrim(maxLength: number): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      const value = control.value ? control.value.trim() : '';
      if (value.length > maxLength) {
        return {
          maxlength: {requiredLength: maxLength, actualLength: value.length},
        };
      }

      return null;
    };
  }

  static mustMatch(controlName: string, matchingControlName: string): any {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (matchingControl.errors && !matchingControl.errors.mustMatch) {
        // return if another validator has already found an error on the matchingControl
        return;
      }

      // set error on matchingControl if validation fails
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({mustMatch: true});
      } else {
        matchingControl.setErrors(null);
      }
    };
  }
}
