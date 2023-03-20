import { FC, useEffect, useState } from 'react'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import TextField from '@mui/material/TextField'

import { BasicModal, useScheme, ValidError } from 'common'
import { useModals } from 'features/modals'

type EditModalType = {
  open: boolean
  title: string
  callback: (data: any) => void
}

export const CommonModal: FC<EditModalType> = ({ callback, open, title }) => {
  const {
    closeModal,
    data: { name, question },
  } = useModals()

  const {
    handleSubmit,
    register,
    reset,
    errorsMessages: { nameError },
  } = useScheme(['name'])

  const [state, setState] = useState(name)

  useEffect(() => {
    setState(name)

    return () => {
      setState('')
      reset()
    }
  }, [name, open])

  return (
    <BasicModal open={open} onClose={closeModal} title={title}>
      <form onSubmit={handleSubmit(callback)}>
        <TextField
          {...register('name', { value: name })}
          value={state}
          variant={'standard'}
          label={name || question}
          placeholder={name || question}
          sx={{ width: '100%', marginBottom: '30px' }}
          onChange={e => setState(e.currentTarget.value)}
        />
        {nameError && <ValidError>{nameError}</ValidError>}
        <FormControlLabel
          sx={{ marginBottom: '30px' }}
          control={<Checkbox {...register('private')} />}
          label="Private pack"
        />
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Button color={'error'} size={'small'} onClick={closeModal} variant={'radius'}>
            Cancel
          </Button>
          <Button type={'submit'} color={'primary'} size={'small'} variant={'radius'}>
            Save
          </Button>
        </Box>
      </form>
    </BasicModal>
  )
}
