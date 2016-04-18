import sift from 'sift';
import expect from 'expect.js';
import AcceptNotifer from './accept';
import CallbackDispatcher from './callback';

describe(__filename + '#', function() {

  it('can be created', function() {
    AcceptNotifer.create();
  });

  it('can dispatch when filter returns true', function() {
    var messages = [];

    var a = AcceptNotifer.create(sift({ type: 'change'}), CallbackDispatcher.create(function(message) {
      messages.push(message);
    }));

    a.dispatch({ type: 'change' });
    expect(messages.length).to.be(1);
    a.dispatch({ type: 'abba' });
    expect(messages.length).to.be(1);
    a.dispatch({ type: 'change' });
    expect(messages.length).to.be(2);
  });
});
