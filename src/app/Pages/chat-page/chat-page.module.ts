import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatPageComponent } from './chat-page/chat-page.component';
import { RouterModule, Routes } from '@angular/router';
import { ChatCardComponent } from './chat-page/components/chat-card/chat-card.component';
import { ChatInputComponent } from './chat-page/components/chat-input/chat-input.component';
import { MessageChatComponent } from './chat-page/components/message-chat/message-chat.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ReverseArrayPipe } from './chat-page/reverse-array.pipe';

const routes: Routes = [{ path: '', component: ChatPageComponent }];

@NgModule({
  declarations: [
    ChatPageComponent,
    ChatCardComponent,
    ChatInputComponent,
    MessageChatComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    FormsModule,
    ReverseArrayPipe,
  ],
})
export class ChatPageModule {}
