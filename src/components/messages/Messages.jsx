import React from 'react';
import { MessagesStl } from './messages.styled';
import Message from './message/Message';
import useChat from '../../hooks/useChat';

const Messages = () => {
  const messages = useChat();

  return (
    <MessagesStl>
      {messages.map((m, index) => (
        <Message key={index} type={m.type} text={m.text} />
      ))}
    </MessagesStl>
  );
};

export default Messages;