import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CanService implements CanActivate{

  constructor(private router:Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> {
    const user = localStorage.getItem('user');
    if (user) {
      return true;
    } else {
      this.router.navigate(['account']);
      return false;
    }
  }

}
