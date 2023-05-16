import React from 'react'
import { ChatStl } from './chat.styled'
import UserData from '../../components/userData/UserData'
import CallerInfo from '../../components/callerInfo/CallerInfo'
import Caller from '../../components/caller/Caller'
import Messages from '../../components/messages/Messages'
import SendBlock from '../../components/sendBlock/SendBlock'

const Chat = () => {
    return (
        <ChatStl>
            <UserData />
            <CallerInfo />
            <Caller />
            <Messages />
            <SendBlock />
        </ChatStl>
    )
}

export default Chat