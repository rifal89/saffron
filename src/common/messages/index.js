import BaseMessage from './base';
import assertPropertyExists from 'common/utils/assert/property-exists';

export const LOAD       = 'load';
export const CHANGE     = 'change';
export const DISPOSE    = 'dispose';
export const INITIALIZE = 'initialize';

export class ChangeMessage extends BaseMessage {
  constructor(changes) {
    super({
      type: CHANGE,
      changes: changes
    });
  }
}

export class InitializeMessage extends BaseMessage {
  constructor() { super({ type: INITIALIZE }); }
}

export class LoadMessage extends BaseMessage {
  constructor() { super({ type: LOAD }); }
}

export class DisposeMessage extends BaseMessage {
  constructor(target) {
    super({ type: DISPOSE, target: target });
    assertPropertyExists(this, 'target');
  }
}
