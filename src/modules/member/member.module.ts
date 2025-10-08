import { Module } from '@nestjs/common';
import { MemberService } from './member.service';
import { MemberRepository } from './member.repository';

@Module({
  providers: [MemberService, MemberRepository],
  exports: [MemberService],
})
export class MemberModule {}
