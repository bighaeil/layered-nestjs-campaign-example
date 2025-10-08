import { Module } from '@nestjs/common';
import { PushPlugin } from './push.plugin';
import { NOTIFICATION_PLUGIN } from '../../core/plugin.contracts';

@Module({
  providers: [
    {
      provide: NOTIFICATION_PLUGIN,
      useClass: PushPlugin,
    },
  ],
  exports: [NOTIFICATION_PLUGIN],
})
export class PushModule {}
