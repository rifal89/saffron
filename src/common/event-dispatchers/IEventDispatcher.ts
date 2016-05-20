import Event from 'common/events/event';

interface IEventDispatcher {
  public dispatchEvent(event:Event);
}

export default IEventDispatcher;