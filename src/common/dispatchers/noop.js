import BaseDispatcher from './base';

/**
*  no-operation dispatcher
*/

class NoopDispatcher extends BaseDispatcher {
  dispatch() {
    // eat it
  }
}

export default NoopDispatcher;
