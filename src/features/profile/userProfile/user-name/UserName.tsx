import React, { ChangeEvent, useState } from 'react'

import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'

import edit_user_name from 'assets/img/edit_user_name.svg'
import { useAppDispatch } from 'common/hooks/hooks'
import { changeUserData } from 'features/profile/userProfile-slice'

type UserNamePropsType = {
  name: string
  avatar: string | undefined
}

export const UserName = (props: UserNamePropsType) => {
  const [editMode, setEditMode] = useState(false)
  const [name, setName] = useState('')
  const [error, setError] = useState<string | null>(null)
  const dispatch = useAppDispatch()

  const editModeOffHandler = () => {
    if (name.trim() !== '') {
      setEditMode(false)
      if (name === props.name) return
      dispatch(changeUserData({ name, avatar: props.avatar }))
      setName('')
    } else {
      setError('Nickname is required')
    }
  }

  const onKeyDownHandler = (e: React.KeyboardEvent<HTMLImageElement>) => {
    if (error) {
      setError(null)
    }
    if (e.key === 'Enter') editModeOffHandler()
  }

  const editModeOnHandler = () => {
    setEditMode(true)
    setName(props.name)
  }

  const onChangeTitleHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.currentTarget.value)
  }

  return editMode ? (
    <TextField
      value={name}
      onKeyDown={onKeyDownHandler}
      onChange={onChangeTitleHandler}
      autoFocus
      error={!!error}
      helperText={!!error && 'Nickname is required'}
      variant={'standard'}
      label={'Nickname'}
      style={{ width: '300px' }}
      InputProps={{
        endAdornment: (
          <Button
            onClick={editModeOffHandler}
            style={{ marginBottom: '5px' }}
            size={'small'}
            variant={'contained'}
          >
            Save
          </Button>
        ),
      }}
    />
  ) : (
    <div>
      <span onDoubleClick={editModeOnHandler}>{props.name}</span>
      <span style={{ marginLeft: '10px', cursor: 'pointer' }} onClick={editModeOnHandler}>
        <img src={edit_user_name} alt="edit" />
      </span>
    </div>
  )
}
