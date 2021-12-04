import {InjectionToken} from '@angular/core';

export interface IValidationRegExp {
  url?: RegExp;
  urlWww?: RegExp;
  phone?: RegExp;
  password?: RegExp;
  code?: RegExp;
  number?: RegExp;
  shortCode?: RegExp;
  paypalPayKey?: RegExp;
  email?: RegExp;
  htmlTags?: RegExp;
  urlProtocol?: RegExp;
}

export function FM_VALIDATION_REG_EXP_FACTORY(): IValidationRegExp {
  return {
    url: /^((?:http(s)?:)?\/\/)[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:\/?#[\]@!\$&'\(\)\*\+,;=.]+$/,
    urlWww:
      /^(?:(?:http(s)?):\/\/|www\.)[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:\/?#[\]@!\$&'\(\)\*\+,;=.]+$/,
    phone: /^\+(?:[0-9] ?){6,14}[0-9]$/,
    password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z\d])(?!.*\s).*$/,
    code: /[a-zA-Z0-9-]$/,
    number: /^[1-9][0-9]{0,10}$/,
    shortCode: /^{{[A-Za-z]\S*}}$/,
    paypalPayKey: /AP-[0-9A-Z]{17}/,
    email: new RegExp(
      [
        '^(|(([A-Za-z0-9]+_+)|([A-Za-z0-9]+\\-+)|([A-Za-z0-9]+\\.{1})',
        '|([A-Za-z0-9]+\\++))*[A-Za-z0-9]+@((\\w+\\-+)|(\\w+\\.))*\\w{1,63}\\.[a-zA-Z]{2,6})$',
      ].join(''),
      'i'
    ),
    htmlTags: /<[^>]*>/,
    urlProtocol: /^(http|https|mailto|tel):/,
  };
}

export const FM_VALIDATION_REG_EXP = new InjectionToken(
  'fm-validation_reg-exp',
  {
    factory: FM_VALIDATION_REG_EXP_FACTORY,
  }
);
