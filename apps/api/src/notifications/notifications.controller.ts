import { Body, Controller, Post } from '@nestjs/common';

@Controller('notifications')
export class NotificationsController {
  @Post('test')
  sendTestNotification(@Body() body: { target: string; message: string }) {
    return {
      sent: true,
      target: body.target,
      message: body.message,
    };
  }
}
