import create from 'common/utils/class/create';

import { sprintf } from 'sprintf';
import { LogMessage } from './messages';
import { DispatcherCollection } from 'common/dispatchers';
import { assertPropertyExists } from 'common/utils/assert';

class Logger {
  
  constructor(properties) {
    Object.assign(this, {
      ...properties,
      dispatcher: DispatcherCollection.create()
    });
  }
  
  info()  { this._log('info'  , ...arguments); }
  warn()  { this._log('warn'  , ...arguments); }
  error() { this._log('error' , ...arguments); }
  
  _log(level, text, ...parameters) {
    this.dispatcher.dispatch(
      LogMessage.create(level, this._getFullPrefix() + sprintf(text, ...parameters))
    )
  }
  
  _getFullPrefix() {
    var prefix = '';
    if (this.parent) prefix += this.parent._getFullPrefix();
    if (this.prefix) prefix += this.prefix;
    return prefix;
  }
  
  createChild(properties = {}) {
    return Logger.create({
      
      dispatcher: this.dispatcher,
      
      // set properties here -- might have dispatcher, so 
      // make it overrideable 
      ...properties,
      
      // parent here is NOT overridable
      parent: this
    });
  }
  
  static create = create;
}

export default Logger;