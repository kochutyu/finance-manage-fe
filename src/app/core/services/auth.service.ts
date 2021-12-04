import {Injectable} from '@angular/core';
import {ApiService} from './api.service';
import {HttpClient} from '@angular/common/http';
import {filter, pluck, tap} from 'rxjs/operators';
import {ELocalStorage} from '../enums/local-storage.enum';
import {BehaviorSubject, Observable} from 'rxjs';
import {IUser} from '../interfaces/user.interface';
import {Router} from '@angular/router';

@Injectable({providedIn: 'root'})
export class AuthService extends ApiService {

  private user = new BehaviorSubject<IUser>(null);

  constructor(private http: HttpClient, private router: Router) {
    super();
  }

  public initUser(): void {
    this.setBaseUrl('auth/');
    this.updateUser({});
  }

  public signInByEmail({email, password}: { email: string, password: string }): Observable<any> {
    return this.http.post(this.getBaseUrl() + 'login', {email, password})
      .pipe(pluck('body'), tap(({token, user}: any) => {
        localStorage.setItem(ELocalStorage.TOKEN, JSON.stringify(token));
        localStorage.setItem(ELocalStorage.USER, JSON.stringify(user));
        this.updateUser(user);
      }));
  }

  public signOut(): void {
    localStorage.clear();
    this.updateUser({});
    this.router.navigate(['/']);
  }

  public getUser(): IUser {
    return this.user.getValue();
  }

  public getUser$(): Observable<IUser> {
    return this.user.asObservable().pipe(filter(user => !!user));
  }

  public updateUser(params: {}): void {
    const user = JSON.parse(localStorage.getItem(ELocalStorage.USER)) || {};
    const token = JSON.parse(localStorage.getItem(ELocalStorage.TOKEN));

    if (token) {
      Object.assign(user, params);
      localStorage.setItem(ELocalStorage.USER, JSON.stringify(user));
      this.user.next(user);
    } else {
      this.user.next(null);
    }
  }

}
