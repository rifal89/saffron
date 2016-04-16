import expect from 'expect.js';
import BaseMessage from './base';

describe(__filename + '#', function() {
  it('cannot be created without a type', function() {
    expect(function() {
      BaseMessage.create();
    }).to.throwException('blarg');
  });
});