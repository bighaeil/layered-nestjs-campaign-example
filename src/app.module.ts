import { Module } from '@nestjs/common';
import { CampaignController } from './notification/controllers/campaign.controller';
import { CampaignService } from './notification/services/campaign.service';
import { PushService } from './notification/services/push.service';
import { MemberService } from './notification/services/member.service';
import { AuditService } from './notification/services/audit.service';
import { CampaignRepository } from './notification/repositories/campaign.repository';
import { MemberRepository } from './notification/repositories/member.repository';
import { AuditRepository } from './notification/repositories/audit.repository';

@Module({
  imports: [],
  controllers: [CampaignController],
  providers: [
    CampaignService,
    PushService,
    MemberService,
    AuditService,
    CampaignRepository,
    MemberRepository,
    AuditRepository,
  ],
})
export class AppModule {}
