import BaseObject from 'common/object/base';
import NotifierCollection from 'common/notifiers/collection';

import { 
  LoadMessage, 
  InitializeMessage 
} from 'common/messages';

class BaseApplication extends BaseObject {
  
    constructor(properties) {
      super({
        ...properties,
        notifier: NotifierCollection.create()
      });
    }
    
    async initialize() {
      await this.notifier.notify(LoadMessage.create());
      await this.notifier.notify(InitializeMessage.create());
      return this;
    }
}

export default BaseApplication;
