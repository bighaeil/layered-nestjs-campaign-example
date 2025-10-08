import { Injectable } from '@nestjs/common';
import { Member } from '../member/member.entity';

@Injectable()
export class PushService {
  send(member: Member, message: string) {
    console.log(`[Push] To ${member.name}(${member.deviceToken}): ${message}`);
  }
}
