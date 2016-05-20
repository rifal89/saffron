import expect from 'expect.js';
import TypeDispatcher from './type';

describe(__filename + '#', function() {
  it('only passes a notification if the type matches', function() {
    var message;
    var dispatcher = new TypeDispatcher('a', {
      dispatch(m) { message = m; }
    });
    
    dispatcher.dispatch({ type: 'b' });
    expect(message).to.be(void 0);
    dispatcher.dispatch({ type: 'a', data: 'value' });
    expect(message.data).to.be('value');
    dispatcher.dispatch({ type: void 0, data: 'value' });
    expect(message.data).to.be('value');
  });
});
