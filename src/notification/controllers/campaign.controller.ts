import { Controller, Post, Body } from '@nestjs/common';
import { CampaignService } from '../services/campaign.service';

@Controller('/campaigns')
export class CampaignController {
  constructor(private readonly campaignService: CampaignService) {}

  @Post()
  create(@Body() body: { title: string; message: string }) {
    const campaign = this.campaignService.createAndSend(
      body.title,
      body.message,
    );
    return { success: true, campaign };
  }
}
