import BaseObject from 'common/object/base';
import { assertPropertyExists } from 'common/utils/assert';

class Fragment extends BaseObject {
  constructor(properties) {
    super(properties);
    assertPropertyExists(this, 'namespace');
  }
}

export default Fragment;