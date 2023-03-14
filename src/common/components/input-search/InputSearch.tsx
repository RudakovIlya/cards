import { ChangeEvent, FC, useCallback, useEffect, useState } from 'react'

import SearchIcon from '@mui/icons-material/Search'
import Grid from '@mui/material/Grid'
import InputAdornment from '@mui/material/InputAdornment'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

import { useDebounce } from 'common/hooks'

type InputSearchType = {
  searchValue: string
  onChangeValue: (searchValue: string) => void
}

export const InputSearch: FC<InputSearchType> = ({ onChangeValue, searchValue }) => {
  const [value, setValue] = useState<string>(searchValue)
  const debouncedValue = useDebounce<string>(value, 500)

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value)
    },
    [searchValue]
  )

  useEffect(() => {
    if (value === searchValue) return

    setValue(searchValue)
  }, [searchValue])

  useEffect(() => {
    onChangeValue(value)
  }, [debouncedValue])

  return (
    <Grid flex={'0 0 auto'}>
      <Typography margin={'0 0 8px 0'} fontSize={15} fontWeight={500}>
        Search
      </Typography>
      <TextField
        onChange={handleChange}
        value={value}
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
      />
    </Grid>
  )
}
