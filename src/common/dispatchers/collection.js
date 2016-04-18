import Collection from 'common/collection';
import BaseMessage from 'common/messages/base';

class DispatcherCollection extends Collection {
  dispatch(message) {
    
    if (!(message instanceof BaseMessage)) {
      console.error(`"${message.type}" must be a BaseMessage'`);
    }

    for (var i = 0, n = this.length; i < n; i++) {
      this[i].dispatch(message);
    }

    return message;
  }
}

export default DispatcherCollection;
