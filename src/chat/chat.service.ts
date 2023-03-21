import { Injectable } from '@nestjs/common';
import { SendMessageDto } from './dto/send-message.dto';

@Injectable()
export class ChatService {
  private messages: SendMessageDto[] = [];

  async sendMessage(message: SendMessageDto): Promise<SendMessageDto[]> {
    this.messages.push(message);

    return this.messages;
  }
}
