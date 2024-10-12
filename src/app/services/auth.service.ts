import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  GuardResult,
  MaybeAsync,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}
  signup(user: any) {
    this.http
      .post(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB6XencI1D1xPkB3Mq733PKFKUzwz9Xt4k',
        user
      )
      .subscribe((data) => {
        this.router.navigate(['account']);
      });
  }
  login(user: any) {
    this.http
      .post(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB6XencI1D1xPkB3Mq733PKFKUzwz9Xt4k',
        user
      )
      .subscribe((data) => {
        localStorage.setItem('user', JSON.stringify(data));
        this.router.navigate(['']);
      });
  }

  autoLogin() {
    if (localStorage.getItem('user')) {
      this.router.navigate(['']);
    }
  }
  logOut() {
    localStorage.removeItem('user');
    this.router.navigate(['account']);
  }
}
