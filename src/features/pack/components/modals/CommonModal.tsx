import { ChangeEvent, FC, memo, useEffect, useState } from 'react'

import { PhotoCamera } from '@mui/icons-material'
import IconButton from '@mui/material/IconButton'
import { useForm } from 'react-hook-form'

import {
  BasicModal,
  CustomSelect,
  ModalsButtons,
  InputWithValue,
  uploadImageHandler,
  ImageCover,
} from 'common'
import { useModals } from 'features/modals'

type ModalsFormsType = {
  open: boolean
  title: string
  disabled: boolean
  answerImg?: string
  questionImg?: string
  callback: (data: any) => void
}

export const CommonModal: FC<ModalsFormsType> = memo(
  ({ open, title, disabled, callback, answerImg, questionImg }) => {
    const {
      closeModal,
      setQuestionImg,
      setAnswerImg,
      removeImages,
      data: { answer, question },
    } = useModals()

    const { handleSubmit, register, reset, getValues } = useForm<{
      question: string
      answer: string
    }>()

    const [type, setType] = useState<'text' | 'picture'>('text')

    const onChangeQuestionImg = (event: ChangeEvent<HTMLInputElement>) => {
      if (type === 'picture') {
        uploadImageHandler(event, setQuestionImg)
      }
    }

    const onChangeAnswerImg = (event: ChangeEvent<HTMLInputElement>) => {
      if (type === 'picture') {
        uploadImageHandler(event, setAnswerImg)
      }
    }

    console.log(getValues())

    useEffect(() => {
      if (answer || question) return
      reset()
    }, [open])

    return (
      <BasicModal open={open} title={title} onClose={closeModal}>
        <form onSubmit={handleSubmit(callback)}>
          <CustomSelect type={type} setType={setType} />
          {type === 'text' && (
            <>
              <InputWithValue
                label={'Question'}
                value={question}
                name={'question'}
                register={register}
              />
              <InputWithValue label={'Answer'} value={answer} name={'answer'} register={register} />
            </>
          )}
          {type === 'picture' && (
            <>
              <>
                <IconButton color="primary" aria-label="upload picture" component="label">
                  <input
                    hidden
                    accept="image/png, image/jpeg"
                    type="file"
                    onChange={onChangeQuestionImg}
                  />
                  <PhotoCamera />
                </IconButton>
                {questionImg && (
                  <ImageCover height={'100px'} width={'150px'} deckCover={questionImg} />
                )}
              </>
              <>
                <IconButton color="primary" aria-label="upload picture" component="label">
                  <input
                    hidden
                    accept="image/png, image/jpeg"
                    type="file"
                    onChange={onChangeAnswerImg}
                  />
                  <PhotoCamera />
                </IconButton>
                {answerImg && (
                  <IconButton onClick={removeImages({ isAnswer: true })}>Delete</IconButton>
                )}
                {answerImg && <ImageCover deckCover={answerImg} height={'100px'} width={'150px'} />}
              </>
            </>
          )}
          <ModalsButtons title={'Save'} cancelCallback={closeModal} disabled={disabled} />
        </form>
      </BasicModal>
    )
  }
)
