import React, { useState } from 'react'
import { CallerStl } from './caller.styled'
import { ReactComponent as SearchSvg } from '../../img/search.svg'
import { useDispatch, useSelector } from 'react-redux'
import { setCaller, clearChat } from '../../store/chatSlice'

const Caller = () => {
  const [phone, setPhone] = useState('')
  const caller = useSelector(state => state.chat.phone)
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(setCaller({ phone }))
    dispatch(clearChat())
    setPhone('')
  }
  return (
    <CallerStl>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='номер абонента'
          value={phone}
          onChange={e => setPhone(e.target.value)}
        />
        <button type='submit'> <SearchSvg /></button>
      </form>
      {caller &&
        <div>+{caller}</div>
      }
    </CallerStl>
  )
}

export default Caller
