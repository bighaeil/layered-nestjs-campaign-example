import { Campaign } from './campaign.entity';

export class CampaignRepository {
  private campaigns: Campaign[] = [];
  private idSeq = 1;

  create(title: string, message: string): Campaign {
    const campaign = new Campaign(this.idSeq++, title, message);
    this.campaigns.push(campaign);
    return campaign;
  }

  findAll(): Campaign[] {
    return this.campaigns;
  }
}
