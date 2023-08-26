import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';
import { CanActivate, CanActivateFn, Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class redirectsGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(): boolean {
    const token = localStorage.getItem('ACCESS_TOKEN');
    if (token) {
      const decodedToken: decodedToken = jwt_decode(token);
      const expiresIn: number = parseInt(decodedToken.exp || '');
      const date = new Date(expiresIn * 1000);
      const now = new Date();

      if (date.getTime() > now.getTime()) {
        this.router.navigate(['/chat']);
        return false;
      } else {
        return true;
      }
    }
    return true;
  }
}
interface decodedToken {
  exp: string;
  iat: number;
  userEmail: string;
  userId: string;
}
