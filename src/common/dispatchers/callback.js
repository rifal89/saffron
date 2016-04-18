import assert from 'assert';
import BaseDispatcher from './base';

class CallbackDispatcher extends BaseDispatcher {
  constructor(callback) {
    super();
    assert(callback, 'callback must exist');
    this.callback = callback;
  }
  notify(message) {
    this.callback(message);
  }
}

export default CallbackDispatcher;
