import { LOG } from 'common/logger/messages';

class ConsoleLogDispatcher {
  dispatch(message) {
    if (message.type !== LOG) return;
    console[message.level].call(console, message.text);
  }
}

export default ConsoleLogDispatcher;