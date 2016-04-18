import expect from 'expect.js';
import TypeDispatcher from './type';

describe(__filename + '#', function() {
  it('only passes a notification if the type matches', function() {
    var message;
    var dispatcher = TypeDispatcher.create('a', {
      notify(m) { message = m; }
    });
    
    dispatcher.notify({ type: 'b' });
    expect(message).to.be(void 0);
    dispatcher.notify({ type: 'a', data: 'value' });
    expect(message.data).to.be('value');
    dispatcher.notify({ type: void 0, data: 'value' });
    expect(message.data).to.be('value');
  });
});
