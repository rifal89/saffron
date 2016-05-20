import assert from 'assert';
import BaseObject from 'common/object/base';
import { assertPropertyExists } from 'common/utils/assert';

import IMessage from './IMessage';

class Message implements IMessage {
  
  private _type:String;
  
  constructor(type) {
      this._type = type;
  }
  
  public get type():String {
    return this._type;
  }
}

export default Message;