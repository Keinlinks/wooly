import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { UserI } from '../Models/User';
import { JwtResponseI } from '../Models/jwt-response';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private authSubject: BehaviorSubject<boolean> = new BehaviorSubject(false);
  private token: string = '';
  server: string = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  registerUser(user: UserI): Observable<JwtResponseI> {
    return this.http.post<JwtResponseI>(`${this.server}/register`, user).pipe(
      tap((res: JwtResponseI) => {
        if (res) {
          this.setToken(res.dataUser.accessToken, res.dataUser.expiresIn);
          this.authSubject.next(true);
        }
      })
    );
  }
  loginUser(user: UserI): Observable<JwtResponseI> {
    return this.http.post<JwtResponseI>(`${this.server}/login`, user).pipe(
      tap((res: JwtResponseI) => {
        if (res) {
          this.setToken(res.dataUser.accessToken, res.dataUser.expiresIn);
          this.authSubject.next(true);
        }
      })
    );
  }

  logoutUser(): void {
    this.token = '';
    localStorage.setItem('ACCESS_TOKEN', '');
    this.authSubject.next(false);
  }
  private setToken(token: string, expiresIn: string): void {
    this.token = token;
    localStorage.setItem('ACCESS_TOKEN', token);
    localStorage.setItem('EXPIRES_IN', expiresIn);
  }
  private getToken(): string {
    if (!this.token) {
      return localStorage.getItem('ACCESS_TOKEN') || '';
    }
    return this.token;
  }
}
