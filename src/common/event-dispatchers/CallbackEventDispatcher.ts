import IEventDispatcher from './IEventDispatcher';

class CallbackEventDispatcher extends IEventDispatcher {
  
  private _callback:Function;
  
  constructor(callback:Function) {
    this._callback = callback;
  }
  
  public dispatchEvent(event:Event):void {
    this._callback(event);
  }
} 

export default CallbackEventDispatcher;