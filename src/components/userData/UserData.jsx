import React from 'react'
import { UserStl } from './userData.styled'
import { ReactComponent as UserSvg } from '../../img/user.svg'
import { ReactComponent as ExitSvg } from '../../img/exit.svg'
import { useDispatch, useSelector } from 'react-redux'
import { logOut } from '../../store/authSlice'

const UserData = () => {
  const user = useSelector(state => state.auth.user)
  const dispatch = useDispatch()
  return (
    <UserStl>
      <UserSvg />
      <span>{user.substring(0, user.indexOf('@'))}</span>
      <ExitSvg onClick={() => dispatch(logOut())} />
    </UserStl>
  )
}

export default UserData
