import { LOG } from 'common/logger/messages';
import { BaseDispatcher } from 'common/dispatchers';
import { FactoryFragment } from 'common/fragments';
import { LOG_DISPATCHER_NS } from 'common/logger/namespaces';

class ConsoleLogDispatcher extends BaseDispatcher {
  dispatch(message) {
    if (message.type !== LOG) return;
    console[message.level].call(console, message.text);
  }
}

export default ConsoleLogDispatcher;

export const fragment = FactoryFragment.create({
  namespace: LOG_DISPATCHER_NS,
  factory  : ConsoleLogDispatcher
});