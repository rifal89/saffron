
import React from 'react';
import assert from 'assert';
import FactoryFragment from './factory';
import { assertPropertyExists } from 'common/utils/assert';

class ComponentFragment extends FactoryFragment {
  constructor(properties) {    
    
    super({
      ...properties,
      factory: {
        create(props, children) {
          return React.createElement(properties.componentClass, props, children);
        }
      }
    });
    
    assertPropertyExists(this, 'componentClass');
  }
}

export default ComponentFragment;
