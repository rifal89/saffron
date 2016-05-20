import expect from 'expect.js';
import Logger from './index';

import { CallbackDispatcher, NoopDispatcher } from 'common/dispatchers';

describe(__filename + '#', function() {
  
  it('can be created', function() {
    Logger.create({ dispatcher: NoopDispatcher.create() });
  });

  it('dispatches logs when calling various standard methods', function() {
    
    var message;
    var dispatcher = CallbackDispatcher.create((m) => message = m);
    var logger     = Logger.create({ dispatcher });
    logger.dispatcher.push(dispatcher);
    
    logger.info('hello');
    expect(message.type).to.be('log');
    expect(message.level).to.be('info');
    expect(message.text).to.be('hello');
    
    logger.warn('warn %s', 'ing');
    expect(message.level).to.be('warn');
    expect(message.text).to.be('warn ing');
    
    logger.error('err');
    expect(message.level).to.be('error');
    expect(message.text).to.be('err');
  });
  
  it('can create a child logger', function() {
    
    var message;
    var dispatcher  = CallbackDispatcher.create((m) => message = m);
    var logger      = Logger.create({ dispatcher });
    var childLogger = logger.createChild({ prefix: 'child: ' });
    
  });
});