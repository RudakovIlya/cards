import { ElementType, FC, FormEvent, memo, PropsWithChildren } from 'react'

import Button from '@mui/material/Button'
import FormControl from '@mui/material/FormControl'
import FormGroup from '@mui/material/FormGroup'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import { Link } from 'react-router-dom'

import { LinkWrapper } from 'common/components'

interface IForm {
  link?: {
    to: string
    title: string
  }
  as?: ElementType
  description?: string
  title?: string
  titleButton?: string
  onSubmit?: (event: FormEvent<HTMLFormElement>) => void
  onClick?: () => void
}

export const Form: FC<IForm & PropsWithChildren> = memo(
  ({ onSubmit, title, children, titleButton, description, link, as, onClick }) => {
    const Component = as || 'form'

    return (
      <Paper sx={{ padding: '40px 33px' }}>
        <Component style={{ minWidth: 347 }} onSubmit={onSubmit}>
          <Typography
            component={'h1'}
            style={{ marginBottom: 30, textAlign: 'center', fontSize: '26px', fontWeight: 700 }}
          >
            {title}
          </Typography>
          <FormControl sx={{ width: '100%' }}>
            <FormGroup sx={{ display: 'flex', rowGap: '24px', marginBottom: '20px' }}>
              {children}
            </FormGroup>
            <Button
              onClick={onClick}
              sx={{ marginBottom: '31px' }}
              type={'submit'}
              variant={'radius'}
              size={'large'}
            >
              {titleButton}
            </Button>
            {description && (
              <Typography sx={{ textAlign: 'center', marginBottom: '20px' }}>
                {description}
              </Typography>
            )}
            {link && (
              <LinkWrapper>
                <Link to={link.to}>{link.title}</Link>
              </LinkWrapper>
            )}
          </FormControl>
        </Component>
      </Paper>
    )
  }
)
