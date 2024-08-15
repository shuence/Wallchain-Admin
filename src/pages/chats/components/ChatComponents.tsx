import React from 'react';

interface MessageProps {
  user: string;
  text: string;
  timestamp: string;
}

export const Message: React.FC<MessageProps> = ({ user, text, timestamp }) => {
  return (
    <div className={`mb-2 p-2 border rounded-lg ${user === 'John Doe' ? 'bg-blue-100' : 'bg-gray-100'}`}>
      <div className='flex justify-between mb-1'>
        <span className='font-semibold'>{user}</span>
        <span className='text-sm text-gray-500'>{timestamp}</span>
      </div>
      <p>{text}</p>
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
        className='flex-1 p-2 border rounded-lg resize-none'
        rows={3}
        placeholder='Type your message...'
      />
      <button
        onClick={onSendMessage}
        className='ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg'
      >
        Send
      </button>
    </div>
  );
};

// UserSelector component
interface UserSelectorProps {
  currentUser: string;
  onUserChange: React.ChangeEventHandler<HTMLSelectElement>;
}

export const UserSelector: React.FC<UserSelectorProps> = ({ currentUser, onUserChange }) => {
  return (
    <div className='mb-4'>
      <label htmlFor='user-select' className='block mb-2 text-sm font-medium text-gray-700'>
        Select User
      </label>
      <select
        id='user-select'
        value={currentUser}
        onChange={onUserChange}
        className='block w-full p-2 border rounded-lg'
      >
        <option value='John Doe'>John Doe</option>
        <option value='Jane Smith'>Jane Smith</option>
        {/* Add more users as needed */}
      </select>
    </div>
  );
};
