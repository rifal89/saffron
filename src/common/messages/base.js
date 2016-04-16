import assert from 'assert';
import assertPropertyExists from 'common/utils/assert/property-exists';
import BaseObject from 'common/object/base';

class BaseMessage extends BaseObject {
  constructor(properties) {
    super(properties);
    assertPropertyExists(this, 'type');
  }
}

export default BaseMessage;