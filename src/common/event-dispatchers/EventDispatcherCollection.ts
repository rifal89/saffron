import Event from '../events/Event';
import Collection from '../collection';
import IEventDispatcher from './IEventDispatcher'; 

export default class EventDispatcherCollection extends Collection implements IEventDispatcher {
  dispatch(event:Event):void {
    
  }
}
