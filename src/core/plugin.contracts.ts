import { Member } from './member.entity';

export interface NotificationPlugin {
  send(member: Member, message: string): void;
}

export interface AuditPlugin {
  record(campaignId: number, message: string): void;
}

export const NOTIFICATION_PLUGIN = 'NOTIFICATION_PLUGIN';
export const AUDIT_PLUGIN = 'AUDIT_PLUGIN';
