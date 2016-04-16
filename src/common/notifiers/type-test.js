import expect from 'expect.js';
import TypeNotifier from './type';

describe(__filename + '#', function() {
  it('only passes a notification if the type matches', function() {
    var message;
    var notifier = TypeNotifier.create('a', {
      notify(m) { message = m; }
    });
    
    notifier.notify({ type: 'b' });
    expect(message).to.be(void 0);
    notifier.notify({ type: 'a', data: 'value' });
    expect(message.data).to.be('value');
    notifier.notify({ type: void 0, data: 'value' });
    expect(message.data).to.be('value');
  });
});
