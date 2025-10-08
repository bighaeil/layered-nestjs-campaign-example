import { Injectable } from '@nestjs/common';
import { AuditPlugin } from '../../core/plugin.contracts';

@Injectable()
export class AuditLogPlugin implements AuditPlugin {
  private logs: string[] = [];

  record(campaignId: number, message: string): void {
    const log = `[Audit] [Campaign ${campaignId}] ${message}`;
    this.logs.push(log);
    console.log(log);
  }
}
