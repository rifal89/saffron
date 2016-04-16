import BaseNotifier from './base';

class CallbackNotifier extends BaseNotifier {
    constructor(callback) {
        super();
        this.callback = callback;
    }
    notify(message) {
        this.callback(message);
    }
}

export default CallbackNotifier;