import { ChangeEvent } from 'react'

export const uploadImageHandler = (
  e: ChangeEvent<HTMLInputElement>,
  callback: (img: string) => void
) => {
  if (e.target.files && e.target.files.length) {
    const file = e.target.files[0]

    convertFileToBase64(file, (file64: string) => {
      callback(file64)
    })
  }
}

export const convertFileToBase64 = (file: File, callBack: (value: string) => void) => {
  const reader = new FileReader()

  reader.onloadend = () => {
    const file64 = reader.result as string

    callBack(file64)
  }
  reader.readAsDataURL(file)
}
