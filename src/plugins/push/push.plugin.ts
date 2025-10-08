import { Injectable } from '@nestjs/common';
import { Member } from '../../core/member.entity';
import { NotificationPlugin } from '../../core/plugin.contracts';

@Injectable()
export class PushPlugin implements NotificationPlugin {
  send(member: Member, message: string): void {
    console.log(`[Push] To ${member.name}(${member.deviceToken}): ${message}`);
  }
}
