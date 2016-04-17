import Collection from 'common/collection';
import BaseMessage from 'common/messages/base';

class NotifierCollection extends Collection {
    notify(message) {
 
        if (!(message instanceof BaseMessage)) {
            console.error(`"${message.type}" must be a BaseMessage'`);
        }
        
        for (var i = 0, n = this.length; i < n; i++) {
            this[i].notify(message);
        }
        
        return message;
    }
}

export default NotifierCollection;