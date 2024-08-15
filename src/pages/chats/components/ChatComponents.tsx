import React from 'react';

interface MessageProps {
  user: string;
  text: string;
  timestamp: string;
}

export const Message: React.FC<MessageProps> = ({ user, text, timestamp }) => {
  return (
    <div className='mb-2 p-2 border border-gray-300 rounded-lg bg-white'>
      <div className='flex justify-between mb-1'>
        <span className='font-semibold text-black'>{user}</span>
        <span className='text-sm text-gray-500'>{timestamp}</span>
      </div>
      <p className='text-black'>{text}</p>
    </div>
  );
};

interface MessageFormProps {
  newMessage: string;
  onMessageChange: React.ChangeEventHandler<HTMLTextAreaElement>;
  onSendMessage: () => void;
}

export const MessageForm: React.FC<MessageFormProps> = ({ newMessage, onMessageChange, onSendMessage }) => {
  return (
    <div className='flex items-center'>
      <textarea
        value={newMessage}
        onChange={onMessageChange}
        className='flex-1 p-2 border border-gray-300 rounded-lg resize-none'
        rows={3}
        placeholder='Type your message...'
      />
      <button
        onClick={onSendMessage}
        className='ml-2 px-4 py-2 bg-black text-white rounded-lg'
      >
        Send
      </button>
    </div>
  );
};
