import { Component, OnDestroy, OnInit } from '@angular/core';
import { MessageServiceService } from './message-service.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { Socket } from 'ngx-socket-io';

@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.css'],
})
export class ChatPageComponent implements OnInit, OnDestroy {
  popup_show: boolean = false;

  constructor(
    private service: MessageServiceService,
    private authService: AuthService,
    private router: Router,
    private socket: Socket
  ) {
    service.getMessage().subscribe((data: string) => {
      this.messagesCopy.push(data);
      this.messages = this.messagesCopy;
      this.messages = this.messages.reverse();
    });
  }

  messages: string[] = [];
  messagesCopy: string[] = [];

  logout() {
    this.authService.logoutUser();
    this.router.navigateByUrl('/auth/login');
  }
  ngOnInit(): void {
    this.socket.on('connect', () => {
      console.log('Connected to server');
    });
  }
  ngOnDestroy(): void {
    this.socket.disconnect();
  }
}
