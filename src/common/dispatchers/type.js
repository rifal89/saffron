import BaseDispatcher from './base';

/**
* filters message based on the type
*/

class TypeDispatcher extends BaseDispatcher {

  constructor(type, dispatcher) {
    super();
    this.type    = type;
    this.dispatcher = dispatcher;
  }

  dispatch(message) {
    if (message.type === this.type) {
      this.dispatcher.dispatch(message);
    }
  }
}

export default TypeDispatcher;
