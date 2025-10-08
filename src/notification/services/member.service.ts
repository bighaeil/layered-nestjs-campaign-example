import { Injectable } from '@nestjs/common';
import { MemberRepository } from '../repositories/member.repository';
import { Member } from '../entities/member.entity';

@Injectable()
export class MemberService {
  constructor(private readonly memberRepo: MemberRepository) {}

  getAvailableMembers(): Member[] {
    return this.memberRepo.findAllAvailable();
  }
}
