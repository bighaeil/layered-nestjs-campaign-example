import { Injectable } from '@nestjs/common';
import { MemberRepository } from './member.repository';
import { Member } from './member.entity';

@Injectable()
export class MemberService {
  constructor(private readonly memberRepo: MemberRepository) {}

  getAvailableMembers(): Member[] {
    return this.memberRepo.findAllAvailable();
  }
}
