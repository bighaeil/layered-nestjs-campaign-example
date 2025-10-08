import { Injectable } from '@nestjs/common';
import { CampaignRepository } from './campaign.repository';
import { MemberService } from '../member/member.service';
import { PushService } from '../push/push.service';
import { AuditService } from '../audit/audit.service';
import { Campaign } from './campaign.entity';

@Injectable()
export class CampaignService {
  constructor(
    private readonly campaignRepo: CampaignRepository,
    private readonly memberService: MemberService,
    private readonly pushService: PushService,
    private readonly auditService: AuditService,
  ) {}

  createAndSend(title: string, message: string): Campaign {
    const campaign = this.campaignRepo.create(title, message);

    const members = this.memberService.getAvailableMembers();
    members.forEach((m) => this.pushService.send(m, message));

    this.auditService.record(
      campaign.id,
      `Campaign ${campaign.title} sent to ${members.length} members`,
    );

    return campaign;
  }
}
