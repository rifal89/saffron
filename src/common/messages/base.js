import assert from 'assert';
import BaseObject from 'common/object/base';
import { assertPropertyExists } from 'common/utils/assert';

class BaseMessage extends BaseObject {
  constructor(properties) {
    super(properties);
    assertPropertyExists(this, 'type');
  }
}

export default BaseMessage;