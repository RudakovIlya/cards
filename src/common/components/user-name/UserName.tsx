import { ChangeEvent, FC, useState } from 'react'

import BorderColorIcon from '@mui/icons-material/BorderColor'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'

import { useAppDispatch } from 'common'
import { changeUserData } from 'features/profile'

type UserNamePropsType = {
  name: string
  avatar: string | undefined
}

export const UserName: FC<UserNamePropsType> = ({ name: userName, avatar }) => {
  const [editMode, setEditMode] = useState(false)
  const [name, setName] = useState('')
  const [error, setError] = useState<string | null>(null)
  const dispatch = useAppDispatch()

  const editModeOffHandler = () => {
    if (name.trim() !== '') {
      setEditMode(false)
      if (name === userName) return
      dispatch(changeUserData({ name, avatar: avatar }))
      setName('')
    } else {
      setError('Nickname is required')
    }
  }

  const editModeOnHandler = () => {
    setEditMode(true)
    setName(userName)
  }

  const onChangeTitleHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.currentTarget.value)
    setError(null)
  }

  return editMode ? (
    <TextField
      value={name}
      onChange={onChangeTitleHandler}
      autoFocus
      error={!!error}
      helperText={!!error && error}
      onBlur={editModeOffHandler}
      variant={'standard'}
      label={'Nickname'}
      style={{ width: '300px' }}
      InputProps={{
        endAdornment: (
          <Button
            onMouseDown={editModeOffHandler}
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
      <span onDoubleClick={editModeOnHandler}>{userName}</span>
      <span style={{ marginLeft: '10px', cursor: 'pointer' }} onClick={editModeOnHandler}>
        <BorderColorIcon />
      </span>
    </div>
  )
}
