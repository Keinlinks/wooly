import { Component } from '@angular/core';
import { MessageServiceService } from './message-service.service';

@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.css'],
})
export class ChatPageComponent {
  constructor(private service: MessageServiceService) {
    service.getMessage().subscribe((data: string) => {
      this.messages.push(data);
      this.reverseArray();
    });
  }
  messages: string[] = [];
  reverseArray() {
    this.messages.reverse();
  }
}
