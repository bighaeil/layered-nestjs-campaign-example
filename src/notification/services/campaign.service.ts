import { Injectable } from '@nestjs/common';
import { CampaignRepository } from '../repositories/campaign.repository';
import { MemberService } from './member.service';
import { PushService } from './push.service';
import { AuditService } from './audit.service';
import { Campaign } from '../entities/campaign.entity';

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
