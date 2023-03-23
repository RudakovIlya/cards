import { useState } from 'react'

import MenuItem from '@mui/material/MenuItem'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import Typography from '@mui/material/Typography'

export const CustomSelect = () => {
  const [type, setType] = useState('Text')

  const handleChange = (event: SelectChangeEvent) => {
    setType(event.target.value as string)
  }

  return (
    <>
      <Typography sx={{ opacity: 0.5 }} fontSize={14} m={'0 0 8px 0'}>
        Choose a question format
      </Typography>
      <Select
        size={'small'}
        sx={{ width: '100%', m: '0 0 24px 0' }}
        value={type}
        onChange={handleChange}
      >
        <MenuItem value={'Text'}>Text</MenuItem>
        <MenuItem value={'Picture'}>Picture</MenuItem>
      </Select>
    </>
  )
}
