import { Module } from '@nestjs/common';
import { AuditLogPlugin } from './audit.plugin';
import { AUDIT_PLUGIN } from '../../core/plugin.contracts';

@Module({
  providers: [
    {
      provide: AUDIT_PLUGIN,
      useClass: AuditLogPlugin,
    },
  ],
  exports: [AUDIT_PLUGIN],
})
export class AuditModule {}
