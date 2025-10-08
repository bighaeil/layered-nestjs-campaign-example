import { Module } from '@nestjs/common';
import { CampaignController } from './campaign.controller';
import { CampaignService } from './campaign.service';
import { CampaignRepository } from './campaign.repository';
import { MemberModule } from '../member/member.module';
import { PushModule } from '../push/push.module';
import { AuditModule } from '../audit/audit.module';

@Module({
  imports: [MemberModule, PushModule, AuditModule],
  controllers: [CampaignController],
  providers: [CampaignService, CampaignRepository],
})
export class CampaignModule {}
