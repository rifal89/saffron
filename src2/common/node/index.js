import BaseObject from 'common/object/base';
import Collection from 'common/collection';
import observable from 'common/decorators/observable';
import { CallbackDispatcher, DispatcherCollection } from 'common/dispatchers';
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
  
  /**
   */
  
  constructor(properties) {
    super(properties);
    
    this.dispatcher = DispatcherCollection.create();
    
    this.children = NodeCollection.create({ 
      dispatcher: CallbackDispatcher.create(this._onChildrenChange.bind(this)) 
    });
  }
  
  /**
   * traverses this and returns found children when filter returns true.
   */
  
  filter(filter, found = []) {
    
    if (filter(this)) found.push(this);
    for (var i = 0, n = this.children.length; i < n; i++) {
      this.children[i].filter(filter, found);
    }
    
    return found;
  }
  
  /**
   * When the children collection changes, sync all the nodes.
   */
  
  _onChildrenChange(message) {
    
    var child;
    
    for (var change of message.changes) {

      if (change.type !== 'splice') continue;

      for (child of change.added) {
        
        if (child.parent) {
          child.parent.children.remove(child);
        }
        
        child.parent = this;
      }
      
      for (child of change.removed) {
        child.parent = void 0;  
      }
    }
    
    this.dispatcher.dispatch(message);
  }
}

export default Node;