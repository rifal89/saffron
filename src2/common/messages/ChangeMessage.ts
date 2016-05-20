import BaseMessage from './BaseMessage';
import { CHANGE } from './types';

class ChangeMessage extends BaseMessage {
  
  private _changes:Array;
  
  constructor(change:Array) {
      super(CHANGE);
      this._changes = changes;
  }
  
  public get changes():Array {
    return this._changes;
  }
}