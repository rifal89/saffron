import IDispatcher from './IDispatcher';
import IMessage from 'common/messages/IMessage';

/**
* filters message based on the type
*/

class TypeDispatcher implements IDispatcher {
  
  private _type:String;
  private _dispatcher:IDispatcher;

  constructor(type:String, dispatcher:IDispatcher) {
    this._type       = type;
    this._dispatcher = dispatcher;
  }

  dispatch(message:IMessage):void {
    if (message.type === this._type) {
      this._dispatcher.dispatch(message);
    }
  }
}

export default TypeDispatcher;
