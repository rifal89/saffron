import BaseNotifier from './base';

/**
 *  no-operation notifier
 */

class NoopNotifier extends BaseNotifier {
    notify() {
        // eat it
    }
}

export default NoopNotifier;