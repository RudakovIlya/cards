import React from 'react'

import IconButton from '@mui/material/IconButton'

import { ReactComponent as Camera } from 'assets/img/edit_photo.svg'
import { uploadImageHandler, useAppDispatch } from 'common'
import { changeUserData } from 'features/profile/userProfile-slice'

export const ChangeAvaButton = () => {
  const dispatch = useAppDispatch()

  const onChangeAva = (file64: string) => {
    dispatch(changeUserData({ avatar: file64 }))
  }

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
      <input
        hidden
        accept="image/png, image/jpeg"
        type="file"
        onChange={e => uploadImageHandler(e, onChangeAva)}
      />
      <Camera />
    </IconButton>
  )
}
