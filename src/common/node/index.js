import BaseObject from 'common/object/base';
import Collection from 'common/collection';
import observable from 'common/decorators/observable';
import { assertPropertyExists } from 'common/utils/assert';

/**
 */

@observable
class NodeCollection extends Collection {
  
}

/**
 * Node structure -- taken after DOM
 */

@observable
class Node extends BaseObject {
  
  constructor(properties) {
    super(properties);
    assertPropertyExists(this, 'dispatcher');
    this.children = NodeCollection.create({ dispatcher: this.dispatcher });
  }
  
  filter(filter, found = []) {
    if (filter(this)) found.push(this);
    for (var i = 0, n = this.children.length; i < n; i++) {
      this.children[i].filter(filter, found);
    }
    return found;
  }
}

export default Node;