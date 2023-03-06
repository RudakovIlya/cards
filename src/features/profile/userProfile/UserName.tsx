import { ChangeEvent, useState } from 'react'

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
  const dispatch = useAppDispatch()

  const editModeOffHandler = () => {
    setEditMode(false)
    dispatch(changeUserData({ name, avatar: props.avatar }))
    setName('')
  }
  const onKeyDownHandler = (e: any) => {
    if (e.key === 'Enter') editModeOffHandler()
  }

  const editModeOnHandler = () => {
    setEditMode(true)
  }

  const onChangeTitleHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.currentTarget.value)
  }

  return editMode ? (
    <TextField
      value={name}
      onBlur={editModeOffHandler}
      onKeyDown={onKeyDownHandler}
      onChange={onChangeTitleHandler}
      autoFocus
      variant={'standard'}
      label={'Name'}
    />
  ) : (
    <div>
      <span onDoubleClick={editModeOnHandler}>{props.name}</span>
      <span style={{ marginLeft: '10px' }} onClick={editModeOnHandler}>
        <img src={edit_user_name} alt="edit" />
      </span>
    </div>
  )
}
