import { FC } from 'react'

import SearchIcon from '@mui/icons-material/Search'
import Grid from '@mui/material/Grid'
import InputAdornment from '@mui/material/InputAdornment'
import TextField, { TextFieldProps } from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

export const InputSearch: FC<TextFieldProps> = props => {
  return (
    <Grid flex={'0 0 auto'}>
      <Typography onChange={props.onChange} margin={'0 0 8px 0'} fontSize={15} fontWeight={500}>
        Search
      </Typography>
      <TextField
        value={props.value}
        size={'small'}
        sx={{ minWidth: '400px' }}
        placeholder={'Provide your text'}
        InputProps={{
          startAdornment: (
            <InputAdornment position={'start'}>
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        {...props}
      />
    </Grid>
  )
}
