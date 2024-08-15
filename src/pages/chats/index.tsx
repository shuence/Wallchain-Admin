import React, { useState } from 'react';
import { Layout } from '@/components/custom/layout';
import { TopNav } from '@/components/top-nav';
import { Search } from '@/components/search';
import ThemeSwitch from '@/components/theme-switch';
import { UserNav } from '@/components/user-nav';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Message, MessageForm, UserSelector } from './components/ChatComponents'; // Ensure these components are correctly imported

// Sample data for multiple users
const initialMessages = [
  { id: 1, user: 'John Doe', text: 'Hello! How can I assist you today?', timestamp: '10:00 AM' },
  { id: 2, user: 'Jane Smith', text: 'I need help with my account.', timestamp: '10:05 AM' },
  { id: 3, user: 'John Doe', text: 'Sure! Can you please provide more details?', timestamp: '10:10 AM' },
];

const ChatPage: React.FC = () => {
  const [messages, setMessages] = useState(initialMessages);
  const [newMessage, setNewMessage] = useState('');
  const [currentUser, setCurrentUser] = useState('John Doe'); // Default user

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const newMsg = {
        id: messages.length + 1,
        user: currentUser,
        text: newMessage,
        timestamp: new Date().toLocaleTimeString().slice(0, 5),
      };
      setMessages([...messages, newMsg]);
      setNewMessage('');
    }
  };

  return (
    <Layout>
      <Layout.Header>
        <TopNav links={topNav} />
        <div className='ml-auto flex items-center space-x-4'>
          <Search />
          <ThemeSwitch />
          <UserNav />
        </div>
      </Layout.Header>
      <Layout.Body>
        <div className='p-6'>
          <Card>
            <CardHeader>
              <CardTitle>Chat</CardTitle>
            </CardHeader>
            <CardContent className='flex flex-col h-[500px]'>
              {/* User Selector */}
              <UserSelector
                currentUser={currentUser}
                onUserChange={(e) => setCurrentUser(e.target.value)}
              />

              {/* Chat Messages */}
              <div className='flex-1 overflow-y-auto mb-4'>
                {messages.map((msg) => (
                  <Message key={msg.id} user={msg.user} text={msg.text} timestamp={msg.timestamp} />
                ))}
              </div>

              {/* Message Input Form */}
              <MessageForm
                newMessage={newMessage}
                onMessageChange={(e) => setNewMessage(e.target.value)}
                onSendMessage={handleSendMessage}
              />
            </CardContent>
          </Card>
        </div>
      </Layout.Body>
    </Layout>
  );
};

export default ChatPage;

const topNav = [
  {
    title: 'Overview',
    href: '/',
    isActive: false,
  },
  {
    title: 'Chats',
    href: '/chats',
    isActive: true,
  },
  {
    title: 'Settings',
    href: '/settings',
    isActive: false,
  },
];
