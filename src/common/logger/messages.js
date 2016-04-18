import { BaseMessage } from 'common/messages';
import { assertPropertyExists } from 'common/utils/assert';

export const LOG = 'log';

export class LogMessage extends BaseMessage {
  constructor(level, text) {
    super({ type: LOG, level, text });
    assertPropertyExists(this, 'level');
    assertPropertyExists(this, 'text');
  }
}
