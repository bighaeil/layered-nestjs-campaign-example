import { Member } from './member.entity';

export class MemberRepository {
  private members: Member[] = [
    new Member(1, 'Alice', 'token-1'),
    new Member(2, 'Bob', 'token-2'),
    new Member(3, 'Charlie', 'token-3'),
  ];

  findAllAvailable(): Member[] {
    return this.members; // 특정 세그먼트 대신 모든 회원
  }
}
