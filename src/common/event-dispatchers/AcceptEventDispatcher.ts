import Event from 'common/events/Event';
import IEventDispatcher from './IEventDispatcher';
import NoopEventDispatcher from './NoopEventDispatcher';
    
class AcceptDispatcher implements IEventDispatcher {
  
  private _resolveDispatcher:IEventDispatcher;
  private _rejectDispatcher:IEventDispatcher;
  
  constructor(
    filter:Function, 
    resolveDispatcher:IEventDispatcher = NoopEventDispatcher.instance, 
    rejectDispatcher:IEventDispatcher  = NoopEventDispatcher.instance
  ) {
    this._filter            = filter;
    this._resolveDispatcher = resolveDispatcher;
    this._rejectDispatcher  = rejectDispatcher;
  }
  
  public dispatchEvent(event:Event):void {
    if (this._filter(event)) {
      this._resolveDispatcher.dispatchEvent(event);
    } else {
      this._rejectDispatcher.dispatchEvent(event);
    }
  }
}

export default AcceptDispatcher;