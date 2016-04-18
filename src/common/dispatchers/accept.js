import BaseObject from 'common/object/base';
import BaseDispatcher from './base';
import NoopDispatcher from './noop';

/**
 * Redirects a message depending on its properties
 */

class AcceptDispatcher extends BaseDispatcher {

  /**
   *  Constructor
   * @param {Function} filter filter function for each message
   * @param {BaseDispatcher} yesDispatcher dispatcher to use if filter returns TRUE
   * @param {BaseDispatcher} noDispatcher dispatcher to use if filter returns FALSE
   */

  constructor(filter, yesDispatcher, noDispatcher) {
    super();
    this.filter      = filter;
    this.yesDispatcher = yesDispatcher;
    this.noDispatcher  = noDispatcher || NoopDispatcher.create();
  }

  /**
   * Passes message to 'yes' or 'no' dispatcher based on the filter boolean result on message
   * @param {BaseMessage} message notification message - redirected based on filter result
   * @returns {*} A result from the dispatcher
   */

  notify(message) {
    return this.filter(message) ? this.yesDispatcher.notify(message) : this.noDispatcher.notify(message);
  }
}

export default AcceptDispatcher;
