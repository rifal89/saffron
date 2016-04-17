import BaseObject from 'common/object/base';
import assertPropertExists from 'common/utils/assert/property-exists';

class Fragment extends BaseObject {
  constructor(properties) {
    super(properties);
    assertPropertExists(this, 'namespace');
  }
}

export default Fragment;