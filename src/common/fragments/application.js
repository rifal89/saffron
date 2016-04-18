import FactoryFragment from './factory';
import { APP_NS } from './namespaces';

/**
 * Application-level fragment class
 */

class ApplicationFragment extends FactoryFragment {
  constructor(properties) {
    super({
      namespace: APP_NS,
      ...properties
    })
  }
}

export default ApplicationFragment;
