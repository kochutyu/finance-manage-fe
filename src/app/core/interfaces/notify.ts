import {NotifyTypeEnum} from '../enums/notify-type.enum';

export interface Notify {
  body: any;
  message: string;
  type: NotifyTypeEnum;
}
