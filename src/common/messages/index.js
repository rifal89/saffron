import BaseMessage from './base';

export const LOAD       = 'load';
export const CHANGE     = 'change';
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
