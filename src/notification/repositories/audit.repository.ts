import { AuditLog } from '../entities/audit.entity';

export class AuditRepository {
  private logs: AuditLog[] = [];
  private idSeq = 1;

  save(campaignId: number, message: string): AuditLog {
    const log = new AuditLog(this.idSeq++, campaignId, message);
    this.logs.push(log);
    return log;
  }

  findAll(): AuditLog[] {
    return this.logs;
  }
}
