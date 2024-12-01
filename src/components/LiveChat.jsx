import { useEffect, useState } from 'react';
import ChatMessage from './ChatMessage';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/chatSlice';
import { generateRandomMessages, generateRandomName } from '../utils/helper';

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState('');
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      // API Polling
      //   console.log('Api polling');
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomMessages(),
        })
      );
    }, 1000);

    return () => clearInterval(i);
  }, []);
  return (
    <>
      <div className="h-[600px] ml-2 py-2 border border-black bg-slate-100 overflow-y-scroll flex flex-col-reverse">
        <div>
          {chatMessages.map((c, index) => (
            <ChatMessage key={index} name={c.name} message={c.message} />
          ))}
        </div>
      </div>
      <form
        className="border-l border-r border-b border-black rounded-sm ml-2 px-2"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: 'Shashi',
              message: liveMessage,
            })
          );
          setLiveMessage("")
        }}
      >
        <input
          type="text"
          placeholder="Type your message"
          className="w-full p-2"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
      </form>
    </>
  );
};

export default LiveChat;
