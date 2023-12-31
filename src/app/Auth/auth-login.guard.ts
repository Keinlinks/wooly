import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class authLoginGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const token = localStorage.getItem('ACCESS_TOKEN');
    if (token) {
      const decodedToken: decodedToken = jwt_decode(token);
      const expiresIn: number = parseInt(decodedToken.exp || '');
      const date = new Date(expiresIn * 1000);
      const now = new Date();

      if (date.getTime() > now.getTime()) {
        if (token) {
          return true;
        }
      } else {
        this.router.navigate(['/login']);
        return false;
      }
    }

    return false;
  }
}

interface decodedToken {
  exp: string;
  iat: number;
  userEmail: string;
  userId: string;
}
