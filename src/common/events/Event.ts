class Event {
  
  private _type:String;
  private _target:Object;
  
  /**
   * @type the type of event being dispatched
   * @target the target dispatching the event
   */
  
  constructor(type:String, target:Object) {
    this._type = type;
  }
  
  public get type():String {
    return this._type;
  }
  
  public get target():Object {
    return this._target;
  } 
}

export default Event;