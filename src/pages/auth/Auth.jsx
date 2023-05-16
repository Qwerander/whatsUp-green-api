import React, { useEffect, useState } from 'react'
import { AuthStl } from './auth.styled'
import { useDispatch, useSelector } from 'react-redux'
import { setAuth, fetchUser } from '../../store/authSlice'

const Auth = () => {
    const [idInstance, setIdInstance] = useState('')
    const [apiToken, setApiToken] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const error = useSelector(state => state.auth.error)
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(setAuth({ idInstance, apiToken }))
        dispatch(fetchUser({ idInstance, apiToken })).then((res) => res.payload === 'Ошибка' && setErrorMessage(error))
        setIdInstance('')
        setApiToken('')

    }

    useEffect(() => {
        if (!idInstance || !apiToken) {
            const timeoutId = setTimeout(() => {
                setErrorMessage('')
            }, 5000);

            return () => clearTimeout(timeoutId);
        }
    }, [idInstance, apiToken]);

    return (
        <AuthStl>
            <h2>Вход</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    value={idInstance}
                    placeholder='ID Instance'
                    onChange={e => setIdInstance(e.target.value)}
                />
                <input
                    type='text'
                    value={apiToken}
                    placeholder='API Token Instance'
                    onChange={e => setApiToken(e.target.value)}
                />
                {errorMessage && <span>{errorMessage}</span>}
                <button type='submit'>Войти</button>
            </form>
        </AuthStl>
    )
}

export default Auth
