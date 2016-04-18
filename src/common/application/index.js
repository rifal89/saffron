import BaseObject from 'common/object/base';
import flattenDeep from 'lodash.flattendeep';
import FragmentCollection from 'common/fragments/collection';
import DispatcherCollection from 'common/dispatchers/collection';
import { APP_NS } from 'common/fragments/queries';

import {
  LoadMessage,
  InitializeMessage,
  DisposeMessage
} from 'common/messages';

class BaseApplication extends BaseObject {

  static fragments = [];

  constructor(properties) {

    super({
      ...properties,
      dispatcher: DispatcherCollection.create()
    });

    this.fragments = FragmentCollection.create();

    // fragments array can also contain nested arrays. Everything needs to be flattened though.
    this.fragments.push(...flattenDeep(this.constructor.fragments));
    this._initializeFragments();
  }

  _initializeFragments() {
    for (var fragment of this.fragments.search(APP_NS)) {
      fragment.factory.create(this);
    }
  }

  dispose() {
    this.dispatcher.dispatch(DisposeMessage.create(this));
    return this;
  }

  async initialize() {
    await this.dispatcher.dispatch(LoadMessage.create());
    await this.dispatcher.dispatch(InitializeMessage.create());
    return this;
  }
}

export default BaseApplication;
