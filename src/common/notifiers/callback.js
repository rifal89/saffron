import assert from 'assert';
import BaseNotifier from './base';

class CallbackNotifier extends BaseNotifier {
    constructor(callback) {
        super();
        assert(callback, 'callback must exist');
        this.callback = callback;
    }
    notify(message) {
        this.callback(message);
    }
}

export default CallbackNotifier;