import TextField from '@mui/material/TextField'

import { Form } from 'common/components/forms/Form'
import { paths } from 'common/constants'

export const Login = () => {
  return (
    <Form
      title={'Login'}
      titleButton={'Sign in'}
      description={'Already have an account?'}
      link={{ title: 'Sign in', to: paths.REGISTRATION }}
    >
      <TextField variant={'standard'} label={'Email'} type={'email'} />
      <TextField variant={'standard'} label={'Password'} type={'password'} />
    </Form>
  )
}
