import IEventDispatcher from './IEventDispatcher';

class TypeEventDispatcher implements IEventDispatcher {
  
  private _type:String;
  
  constructor(type:String, dispatcher:IEventDispatcher) {
    this._type       = type;
    this._dispatcher = dispatcher;
  }
  
  public dispatchEvent(event:Event):void {
    if (this._type !== event.type) return;
    this._dispatcher.dispatchEvent(event);
  }
}

export default TypeEventDispatcher;