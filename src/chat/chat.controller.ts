import { Post, Body, Controller } from '@nestjs/common';
import { ChatService } from './chat.service';
import { SendMessageDto } from './dto/send-message.dto';

@Controller('chat')
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  @Post('send-message')
  async sendMessage(@Body() messageDto: SendMessageDto): Promise<SendMessageDto[]> {
    return this.chatService.sendMessage(messageDto);
  }
}
