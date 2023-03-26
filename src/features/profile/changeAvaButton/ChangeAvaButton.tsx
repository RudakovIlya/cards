import React from 'react'

import IconButton from '@mui/material/IconButton'

import { ReactComponent as Camera } from 'assets/img/edit_photo.svg'

export const ChangeAvaButton = () => {
  return (
    <IconButton
      sx={{
        padding: '0',
        width: '30px',
        height: '30px',
        position: 'absolute',
      }}
      component="label"
    >
      <input hidden accept="image/png, image/jpeg" type="file" />
      <Camera />
    </IconButton>
  )
}
