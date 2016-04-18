import Collection from 'common/collection';
import BaseObject from 'common/object/base';
import { ChangeMessage } from 'common/messages';

/**
* Makes the clazz observable. This means that whenever a property changes on the clazz instance via
* setProperties, splice, or some other *mutating* method, this.dispatcher.dispatch(ChangeMessage) gets called
* with the property changes
*/

export default function (clazz) {
  if (clazz.prototype instanceof BaseObject) {
    return decorateBaseObject(clazz);
  } else if (clazz.prototype instanceof Collection) {
    return decorateArray(clazz);
  } else {
    throw new Error('observable decorator only accepts clazz, or array types');
  }
}

/**
* decorates a base object
*/

function decorateBaseObject(clazz) {
  var oldSetProperties = clazz.prototype.setProperties;
  clazz.prototype.setProperties = function (properties) {
    var changes = [];

    for (var name in properties) {

      var oldValue = this[name];
      var newValue = properties[name];

      if (oldValue !== newValue) {
        if (oldValue == void 0) {
          changes.push({ name: name, type: 'add' });
        } else {
          changes.push({ name: name, type: newValue == void 0 ? 'delete' : 'update', oldValue: oldValue });
        }
      }

      oldSetProperties.call(this, properties);

      if (this.dispatcher && changes.length) {
        this.dispatcher.dispatch(ChangeMessage.create(changes));
      }
    }
  }

  return clazz;
}

/**
* decorates an array subclass
*/

function decorateArray(clazz) {
  var oldSplice = clazz.prototype.splice;

  clazz.prototype.splice = function(start, count, ...newItems) {

    var removed = this.slice(start, start + count);
    var added   = newItems;

    oldSplice.apply(this, arguments);
    if (this.dispatcher && (added.length || removed.length)) {
      this.dispatcher.dispatch(ChangeMessage.create([{
        target  : this,
        start   : start,
        count   : count,
        removed : removed,
        added   : added
      }]));
    }
  };

  return clazz;
}
