import React from 'react'
import { MessageStl } from './message.styled'

const Message = ({ text, type }) => {
  return (
    <MessageStl type={type}>
      <div>
        {text}
      </div>
    </MessageStl>
  )
}

export default Message
