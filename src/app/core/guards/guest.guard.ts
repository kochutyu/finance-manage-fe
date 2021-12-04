import {Injectable} from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateChild,
  CanLoad,
  Route,
  Router,
  RouterStateSnapshot,
  UrlSegment,
  UrlTree,
} from '@angular/router';
import {Observable} from 'rxjs';

import {AuthService} from '../services/auth.service';

@Injectable({providedIn: 'root'})
export class GuestGuard implements CanActivateChild, CanLoad {
  constructor(private authService: AuthService, private router: Router) {
  }

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.checkGuest();
  }

  canLoad(
    route: Route,
    segments: UrlSegment[]
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.checkGuest();
  }

  private checkGuest(): boolean {
    const isAuthorized = this.authService.isAuthorized();

    if (isAuthorized) {
      this.router.navigate(['/system']);
      return false;
    }

    return true;
  }
}
