import React from 'react'
import { CallerInfoStl } from './callerInfo.styled'
import { useSelector } from 'react-redux'

const CallerInfo = () => {
  const caller = useSelector(state => state.chat.phone)
  return (
    <CallerInfoStl>
      {caller &&
        <div>Чат с {caller}</div>
      }
    </CallerInfoStl>
  )
}

export default CallerInfo
