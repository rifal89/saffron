import BaseDispatcher from './base';

/**
*  no-operation notifier
*/

class NoopDispatcher extends BaseDispatcher {
  notify() {
    // eat it
  }
}

export default NoopDispatcher;
