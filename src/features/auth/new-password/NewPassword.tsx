import Typography from '@mui/material/Typography'

import { Form, PasswordInput, ValidError } from 'common/components'
import { paths } from 'common/constants'
import { useRedirect, useScheme } from 'common/hooks'
import { useAuth } from 'features/auth/use-auth'

export const NewPassword = () => {
  const {
    register,
    handleSubmit,
    errorsMessages: { passwordError },
  } = useScheme(['password'])
  const { isPasswordSent, onNewPasswordSent } = useAuth()

  useRedirect(paths.LOGIN, isPasswordSent)

  return (
    <Form
      title={'Create new password'}
      titleButton={'Create new password'}
      onSubmit={handleSubmit(onNewPasswordSent)}
    >
      <>
        <PasswordInput register={register} label={'Password'} name={'password'} />
        {passwordError && <ValidError sx={{ maxWidth: '347px' }}>{passwordError}</ValidError>}
      </>
      <Typography sx={{ maxWidth: '347px', opacity: 0.5 }} component={'span'}>
        Create new password and we will send you further instructions to email
      </Typography>
    </Form>
  )
}
