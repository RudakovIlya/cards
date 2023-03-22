import { FC, memo, useEffect } from 'react'

import { useForm } from 'react-hook-form'

import { BasicModal, CustomSelect, ModalsButtons } from 'common'
import { InputWithValue } from 'common/components/input-with-value/InputWithValue'
import { useModals } from 'features/modals'

type ModalsFormsType = {
  open: boolean
  title: string
  disabled: boolean
  callback: (data: any) => void
}

export const CommonModal: FC<ModalsFormsType> = memo(({ open, title, disabled, callback }) => {
  const {
    closeModal,
    data: { answer, question },
  } = useModals()

  const { handleSubmit, register, reset } = useForm<{ question: string; answer: string }>()

  useEffect(() => {
    if (answer || question) return
    reset()
  }, [open])

  return (
    <BasicModal open={open} title={title} onClose={closeModal}>
      <form onSubmit={handleSubmit(callback)}>
        <CustomSelect />
        <InputWithValue label={'Question'} value={question} name={'question'} register={register} />
        <InputWithValue label={'Answer'} value={answer} name={'answer'} register={register} />
        <ModalsButtons title={'Save'} cancelCallback={closeModal} disabled={disabled} />
      </form>
    </BasicModal>
  )
})
