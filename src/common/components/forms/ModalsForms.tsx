import { FC, memo } from 'react'

import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'

import { ValidError, useScheme, ModalsButtons } from 'common'
import { InputWithValue } from 'common/components/input-with-value/InputWithValue'

type ModalsFormsType = {
  name: string
  disabled: boolean
  closeModal: () => void
  callback: <D>(data: D) => void
}

export const ModalsForms: FC<ModalsFormsType> = memo(({ name, callback, closeModal, disabled }) => {
  const {
    handleSubmit,
    register,
    errorsMessages: { nameError },
  } = useScheme(['name'])

  return (
    <form onSubmit={handleSubmit(callback)}>
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
})
