import { create } from 'common/utils/class';

/**
 * base object for all classes used within application. It's watchable.
 */

class BaseObject {

  constructor(properties) {

    // we want to just assign properties defined in the constructor here 
    // instead of calling setProperties. This is to ensure that any subclass that overrides
    // setProperties does NOT get the props defined in the constructor. This important
    // for things like the observable decorator
    if (properties) {
      Object.assign(this, properties);
    }
  }

  setProperties(properties) {
    Object.assign(this, properties);
  }

  static create = create;
}

export default BaseObject;
