import React, { useState } from 'react'
import { SendBlockStl } from './sendBlock.styled'
import { ReactComponent as SendSvg } from '../../img/send.svg'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage, fetchSend } from '../../store/chatSlice'

const SendBlock = () => {
  const [text, setMessage] = useState('')
  const { idInstance, apiToken } = useSelector(state => state.auth)
  const { caller } = useSelector(state => state.chat)
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (text) {
      dispatch(fetchSend({ user: caller, text, idInstance, apiToken }))
      const message = {
        text,
        type: 'out'
      }
      dispatch(addMessage({ message }))
      setMessage('')
    }
  }
  return (
    <SendBlockStl onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Введите сообщение'
        value={text}
        onChange={e => setMessage(e.target.value)}
      />
      <button type='submit'> <SendSvg /></button>
    </SendBlockStl>
  )
}

export default SendBlock
