import { USER_ICON } from '../utils/constants';

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center">
      <img src={USER_ICON} alt="user" className="h-6"></img>
      <span className="font-bold px-0 my-2">{name}</span>
      <span className="px-2">{message}</span>
    </div>
  );
};

export default ChatMessage;
