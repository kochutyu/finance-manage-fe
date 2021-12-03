import {Component} from '@angular/core';
import {AuthService} from '../../../../core/services/auth.service';

@Component({
  selector: 'app-login-toolbar',
  templateUrl: './login-toolbar.component.html',
  styleUrls: ['./login-toolbar.component.scss'],
})
export class LoginToolbarComponent {
  constructor(public authService: AuthService) {
  }
}
