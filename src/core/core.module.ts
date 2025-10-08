import { Module } from '@nestjs/common';
import { CampaignService } from './campaign.service';
import { PushModule } from '../plugins/push/push.module';
import { AuditModule } from '../plugins/audit/audit.module';

@Module({
  imports: [PushModule, AuditModule],
  providers: [CampaignService],
  exports: [CampaignService],
})
export class CoreModule {}
