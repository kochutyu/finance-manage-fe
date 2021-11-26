import {ENotifyType} from '../enums/notify-type.enum';

export interface INotify {
  body: any;
  message: string;
  type: ENotifyType;
}
