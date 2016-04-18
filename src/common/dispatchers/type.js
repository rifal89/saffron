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

  notify(message) {
    if (message.type === this.type) {
      this.dispatcher.notify(message);
    }
  }
}

export default TypeDispatcher;
