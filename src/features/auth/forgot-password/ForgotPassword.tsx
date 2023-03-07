import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import { Navigate } from 'react-router-dom'

import { Form } from 'common/components/forms/Form'
import { ValidError } from 'common/components/valid-error/ValidError'
import { paths } from 'common/constants'
import { useAuth } from 'features/auth/use-auth'
import { useScheme } from 'features/auth/use-scheme'

export const ForgotPassword = () => {
  const {
    register,
    handleSubmit,
    errorsMessages: { emailError },
  } = useScheme(['email'])

  const { isMailSent, onEmailSent } = useAuth()

  if (isMailSent) {
    return <Navigate to={paths.CHECK_EMAIL} />
  }

  return (
    <Form
      title={'Forgot your password?'}
      titleButton={'Send Instructions'}
      onSubmit={handleSubmit(onEmailSent)}
      description={'Did you remember your password?'}
      link={{ title: 'Try logging in', to: paths.LOGIN }}
    >
      <>
        <TextField {...register('email')} name={'email'} variant={'standard'} label={'Email'} />
        {emailError && <ValidError sx={{ maxWidth: '347px' }}>{emailError}</ValidError>}
      </>
      <Typography sx={{ maxWidth: '347px', opacity: 0.5 }} component={'span'}>
        Enter your email address and we will send you further instructions
      </Typography>
    </Form>
  )
}