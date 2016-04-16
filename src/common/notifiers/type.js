import BaseNotifier from './base';

/**
 * filters message based on the type
 */

class TypeNotifier extends BaseNotifier {
    
    constructor(type, notifier) {
        super();
        this.type    = type;
        this.notifier = notifier;
    }
    
    notify(message) {
        if (message.type === this.type) {
            this.notifier.notify(message);
        }    
    }
}

export default TypeNotifier;