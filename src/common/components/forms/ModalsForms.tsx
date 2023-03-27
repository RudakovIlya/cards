import { ChangeEvent, FC, useRef } from 'react'

import { PhotoCamera } from '@mui/icons-material'
import DeleteIcon from '@mui/icons-material/Delete'
import Box from '@mui/material/Box'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import IconButton from '@mui/material/IconButton'

import {
  ValidError,
  useScheme,
  ModalsButtons,
  InputWithValue,
  uploadImageHandler,
  ImageCover,
} from 'common'

type ModalsFormsType = {
  name: string
  deckCover?: string
  disabled: boolean
  closeModal: () => void
  callback: <D>(data: D) => void
  setDeckCover: (image: string) => void
  removeCover: (data: { isDeckCover?: boolean }) => () => void
}

export const ModalsForms: FC<ModalsFormsType> = ({
  name,
  callback,
  closeModal,
  disabled,
  deckCover,
  setDeckCover,
  removeCover,
}) => {
  const {
    handleSubmit,
    register,
    errorsMessages: { nameError },
  } = useScheme(['name'])

  const ref = useRef<HTMLInputElement>(null)

  const onChangeCover = (event: ChangeEvent<HTMLInputElement>) => {
    uploadImageHandler(event, setDeckCover)
  }

  const reset = () => {}

  return (
    <form onSubmit={handleSubmit(callback)}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <IconButton
          disabled={disabled}
          color="primary"
          aria-label="upload picture"
          component="label"
        >
          <input
            ref={ref}
            hidden
            accept="image/png, image/jpeg"
            type="file"
            onChange={onChangeCover}
          />
          <PhotoCamera />
        </IconButton>
        {deckCover && (
          <IconButton color="primary" disabled={disabled} onClick={reset}>
            <DeleteIcon />
          </IconButton>
        )}
      </Box>
      <ImageCover deckCover={deckCover} />
      <InputWithValue label={'Pack name'} value={name} name={'name'} register={register} />
      {nameError && <ValidError>{nameError}</ValidError>}
      <FormControlLabel
        sx={{ marginBottom: '30px' }}
        control={<Checkbox {...register('private')} />}
        label="Private pack"
      />
      <ModalsButtons title={'Save'} cancelCallback={closeModal} disabled={disabled} />
    </form>
  )
}
