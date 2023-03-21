import { Logger } from '@nestjs/common';
import {
  SubscribeMessage,
  WebSocketGateway,
} from '@nestjs/websockets';
import { Socket } from 'socket.io';
import { ChatService } from './chat.service';
import { SendMessageDto } from './dto/send-message.dto';

@WebSocketGateway()
export class ChatGateway {
  private logger: Logger = new Logger('ChatGateway');

  constructor(private readonly chatService: ChatService) {}

  @SubscribeMessage('chat')
  handleMessage(
    client: Socket,
    messageDto: SendMessageDto,
  ): void {
    const { sender, message } = messageDto;
    this.logger.log(`Message: ${message} Sender: ${sender}`);
    this.chatService.sendMessage(messageDto);
    client.broadcast.emit('chat', messageDto);
  }
}
