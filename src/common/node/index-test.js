import Node from './index';
import expect from 'expect.js';
import { CHANGE } from 'common/messages';
import { NoopDispatcher, CallbackDispatcher } from 'common/dispatchers';

describe(__filename + '#', function() {
  
  var noopDispatcher = NoopDispatcher.create();
  
  it('can be created', function() {
    Node.create({ dispatcher: noopDispatcher });
  });
  
  it('can be created with properties', function() {
    var n = Node.create({ a: 'b', dispatcher: noopDispatcher });
    expect(n.a).to.be('b');
  });
  
  it('can append a child', function() {
    var n = Node.create({ dispatcher: noopDispatcher });
    n.children.push(Node.create({ dispatcher: noopDispatcher }));
  });
  
  it('dispatches a change whenever a node is modified', function() {
    var message;
    var dispatcher = CallbackDispatcher.create((m) => message = m);
    
    var n = Node.create({
      dispatcher: dispatcher
    });
    
    n.setProperties({ a: 'b' });
    expect(message.type).to.be(CHANGE);
    expect(message.changes[0].target).to.be(n);
    expect(message.changes[0].name).to.be('a');
    
    var child = Node.create({ dispatcher: dispatcher });
    
    n.children.push(child);
    
    expect(message.changes[0].target).to.be(n.children);
    expect(message.changes[0].added[0]).to.be(child);
  });
});