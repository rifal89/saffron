import IMessage from 'common/messages/IMessage';

interface IDispatcher {
  dispatch(message:IMessage):void;
}

export default IDispatcher;