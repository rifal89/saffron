import expect from 'expect.js';
import observable from './observable';
import BaseObject from 'common/object/base';
import Collection from 'common/collection';
import CallbackDispatcher from 'common/dispatchers/callback';

describe(__filename + '#', function () {

  @observable
  class ObservableObject extends BaseObject {
  }

  @observable
  class ObservableArray extends Collection {

  }

  function createObservable(properties, callback) {
    return ObservableObject.create({
      dispatcher: CallbackDispatcher.create(callback),
      ...properties
    });
  }

  function createObservableArray(properties, callback) {
    return ObservableArray.create({
      dispatcher: CallbackDispatcher.create(callback),
      ...properties
    });
  }

  it('does not emit a change message if there are no changes', function() {
    var message;
    var o = createObservable({ a: 'b' }, (m) => message = m );
    o.setProperties({ a: 'b' });
    expect(message).to.be(void 0);
  });

  it('throws an error for unknown observer types', function() {
    expect(function() {
      @observable
      class Something {

      }
    }).to.throwException();
  })


  it('can detect various changes', function () {

    var message;

    var o = createObservable({}, (m) => message = m );

    o.setProperties({ a: 'b' });
    expect(message.type).to.be('change');
    expect(message.changes[0].type).to.be('add');

    o.setProperties({ a: 'c' });
    expect(message.changes[0].type).to.be('update');
    expect(message.changes[0].oldValue).to.be('b');

    o.setProperties({ a: void 0 });
    expect(message.changes[0].type).to.be('delete');
    expect(message.changes[0].oldValue).to.be('c');

    o.setProperties({ a: 'd' });
    expect(message.changes[0].type).to.be('add');
    expect(message.changes[0].oldValue).to.be(void 0);
  });

  it('detect changes in an observable array', function() {
    var message;
    var a = createObservableArray({}, (m) => message = m );
    a.push(1);
    expect(message.changes.length).to.be(1);
    expect(message.changes[0].added[0]).to.be(1);
  });
});
