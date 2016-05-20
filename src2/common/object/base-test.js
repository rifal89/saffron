import expect from 'expect.js';
import BaseObject from './base';

describe(__filename + '#', function() {
  it('can be created', function() {
    var o = BaseObject.create({ a: 'b' });
    expect(o.a).to.be('b');
  });

  it('can set properties on the object', function() {
    var o = BaseObject.create();
    o.setProperties({ a: 'b' });
    expect(o.a).to.be('b');
  })
});
