import EventDispatcherCollection from 'common/event-dispatchers/EventDispatcherCollection';

class Application {

  constructor() {
    this.dispatchers = new EventDispatcherCollection();
  }

  initialize():void {
    
  }
} 

export default Application;