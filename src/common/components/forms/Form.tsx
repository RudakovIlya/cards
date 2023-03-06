import { FC, FormEvent, memo, PropsWithChildren } from 'react'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import FormControl from '@mui/material/FormControl'
import FormGroup from '@mui/material/FormGroup'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'

import { CustomLink } from 'common/components/link/CustomLink'

interface IForm {
  link?: {
    to: string
    title: string
  }
  description?: string
  title?: string
  titleButton?: string
  onSubmit: (event: FormEvent<HTMLFormElement>) => void
}

export const Form: FC<IForm & PropsWithChildren> = memo(
  ({ onSubmit, title, children, titleButton, description, link }) => {
    return (
      <Paper sx={{ padding: '40px 33px' }}>
        <form style={{ minWidth: 347 }} onSubmit={onSubmit}>
          <Typography
            component={'h1'}
            style={{ marginBottom: 30, textAlign: 'center', fontSize: '26px', fontWeight: 700 }}
          >
            {title}
          </Typography>
          <FormControl sx={{ width: '100%' }}>
            <Box sx={{ marginTop: 2 }}></Box>
            <FormGroup sx={{ display: 'flex', rowGap: '24px', marginBottom: '20px' }}>
              {children}
            </FormGroup>
            <Button sx={{ marginBottom: '31px' }} type={'submit'} variant={'radius'} size={'large'}>
              {titleButton}
            </Button>
            <Typography sx={{ textAlign: 'center', marginBottom: '20px' }}>
              {description}
            </Typography>
            {link && <CustomLink to={link.to}>{link.title}</CustomLink>}
          </FormControl>
        </form>
      </Paper>
    )
  }
)
