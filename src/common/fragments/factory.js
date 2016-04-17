import BaseFragment from './base';
import assertPropertyExists from 'common/utils/assert/property-exists';

class FactoryFragment extends BaseFragment {
  constructor(properties) {
    
    super({
      ...properties
    });
    
    assertPropertyExists(this, 'factory');
  }
  
  create() {
    return this.factory.create(...arguments);
  }
}

export default FactoryFragment;