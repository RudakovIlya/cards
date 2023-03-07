import { useEffect } from 'react'

import { useAppDispatch, useAppSelector } from 'common/hooks/hooks'
import { authActions, forgot, login, registerMe } from 'features/auth/auth-slice'
import { ILoginDataType } from 'features/auth/types'

export const useAuth = () => {
  const { isLoggedIn, isRegistered, isMailSent } = useAppSelector(state => state.auth)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(authActions.register({ isRegistered: false }))
  }, [])

  const onLogin = (data: ILoginDataType) => {
    dispatch(login(data))
  }
  const onRegister = (data: ILoginDataType) => {
    dispatch(registerMe(data))
  }

  const onEmailSent = (data: { email: string }) => {
    const message = `<div style="background-color: lime; padding: 15px">
password recovery link: 
<a href='http://localhost:3000/#/set-new-password/$token$'>
link</a>
</div>`
    const from = 'test-front-admin <ai73a@yandex.by>'

    dispatch(forgot({ ...data, message, from }))
  }

  return {
    isLoggedIn,
    isMailSent,
    isRegistered,
    onLogin,
    onRegister,
    onEmailSent,
  }
}
