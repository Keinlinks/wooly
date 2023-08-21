import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MessageServiceService {
  private message: Subject<string> = new Subject<string>();
  constructor() {}
  getMessage(): Observable<string> {
    return this.message.asObservable();
  }
  sendMessage(message: string) {
    this.message.next(message);
  }
}
