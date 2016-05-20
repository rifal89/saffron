import IEventDispatcher from './IEventDispatcher';

class NoopEventDispatcher implements IEventDispatcher {
  public dispatchEvent(event:Event):void {
    // do nothing here
  }
  
  static get instance() {
    return this._instance || (this._instance = new NoopEventDispatcher());
  }
} 

export default NoopEventDispatcher;