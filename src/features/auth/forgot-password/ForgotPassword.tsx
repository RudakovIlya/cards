import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

import { Form, ValidError, paths, useRedirect, useScheme } from 'common'
import { useAuth } from 'features/auth'

export const ForgotPassword = () => {
  const {
    register,
    handleSubmit,
    errorsMessages: { emailError },
  } = useScheme(['email'])

  const { isMailSent, onEmailSent } = useAuth()

  useRedirect(paths.CHECK_EMAIL, isMailSent)

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
