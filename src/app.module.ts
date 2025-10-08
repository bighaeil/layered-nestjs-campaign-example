import { Module } from '@nestjs/common';
import { CoreModule } from './core/core.module';
import { PushModule } from './plugins/push/push.module';
import { AuditModule } from './plugins/audit/audit.module';
import { CampaignController } from './campaign.controller';

@Module({
  imports: [CoreModule, PushModule, AuditModule],
  controllers: [CampaignController],
})
export class AppModule {}
