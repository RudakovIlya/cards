import Typography from '@mui/material/Typography'
import { useNavigate } from 'react-router-dom'

import email from 'assets/img/email-svg.svg'
import { Form, paths } from 'common'

export const CheckEmail = () => {
  const navigate = useNavigate()

  return (
    <Form
      onClick={() => navigate(paths.LOGIN)}
      as={'div'}
      title={'Check Email'}
      titleButton={'Back to login'}
    >
      <img src={email} alt="email icon" />
      <Typography sx={{ maxWidth: '347px', opacity: 0.5 }} align={'center'}>
        We’ve sent an Email with instructions to example@mail.com
      </Typography>
    </Form>
  )
}
