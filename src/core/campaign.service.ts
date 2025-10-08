import { Inject, Injectable } from '@nestjs/common';
import { Campaign } from './campaign.entity';
import { Member } from './member.entity';
import type { NotificationPlugin, AuditPlugin } from './plugin.contracts'; // <- type import
import { NOTIFICATION_PLUGIN, AUDIT_PLUGIN } from './plugin.contracts';

@Injectable()
export class CampaignService {
  private campaigns: Campaign[] = [];
  private idSeq = 1;
  private members: Member[] = [
    new Member(1, 'Alice', 'token-1'),
    new Member(2, 'Bob', 'token-2'),
    new Member(3, 'Charlie', 'token-3'),
  ];

  constructor(
    @Inject(NOTIFICATION_PLUGIN)
    private readonly notificationPlugin: NotificationPlugin,
    @Inject(AUDIT_PLUGIN) private readonly auditPlugin: AuditPlugin,
  ) {}

  createAndSend(title: string, message: string): Campaign {
    const campaign = new Campaign(this.idSeq++, title, message);
    this.campaigns.push(campaign);

    this.members.forEach((m) => this.notificationPlugin.send(m, message));
    this.auditPlugin.record(
      campaign.id,
      `Campaign ${campaign.title} sent to ${this.members.length} members`,
    );

    return campaign;
  }
}
