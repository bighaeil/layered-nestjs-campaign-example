import { Injectable } from '@nestjs/common';
import { AuditRepository } from '../repositories/audit.repository';

@Injectable()
export class AuditService {
  constructor(private readonly auditRepo: AuditRepository) {}

  record(campaignId: number, message: string) {
    const log = this.auditRepo.save(campaignId, message);
    console.log(`[Audit] ${log.message}`);
  }
}
