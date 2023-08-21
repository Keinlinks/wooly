import { Component } from '@angular/core';
import { MessageServiceService } from '../../message-service.service';

@Component({
  selector: 'app-chat-input',
  templateUrl: './chat-input.component.html',
  styleUrls: ['./chat-input.component.css'],
})
export class ChatInputComponent {
  constructor(private service: MessageServiceService) {}
  messageToSend: string = '';
  sentSubmit() {
    const noSpacing: string = this.messageToSend.trim();
    if (noSpacing !== '' && this.messageToSend !== undefined) {
      this.service.sendMessage(this.messageToSend);
      this.messageToSend = '';
    }
  }
}
