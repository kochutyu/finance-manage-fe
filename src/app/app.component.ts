import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {AuthService} from './core/services/auth.service';
import {TranslateInitService} from './core/services/translate-init.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private translateInitService: TranslateInitService
  ) {
  }

  ngOnInit(): void {
    this.authService.initUser();
    this.translateInitService.initLocale();
  }
}
