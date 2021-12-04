import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

import {AuthService} from './core/services/auth.service';
import {TranslateInitService} from './core/services/translate-init.service';
import {RegisterIconService} from './core/services/register-icon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private translateInitService: TranslateInitService,
    private registerIconService: RegisterIconService
  ) {
  }

  ngOnInit(): void {
    this.translateInitService.initLocale();
    this.registerIconService.initIcons();
    this.authService.initUser();
  }
}
