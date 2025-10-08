import { Module } from '@nestjs/common';
import { CampaignModule } from './modules/campaign/campaign.module';

@Module({
  imports: [CampaignModule],
})
export class AppModule {}
