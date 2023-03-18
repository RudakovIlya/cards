import { FC } from 'react'

import eye2 from 'assets/img/eye-closed.svg'
import eye from 'assets/img/eye.svg'

type EyeIconType = {
  showPassword: () => void
  passwordVisible: boolean
}

export const Eye: FC<EyeIconType> = ({ showPassword, passwordVisible }) => {
  return (
    <>
      <img
        className={'eye'}
        src={passwordVisible ? eye2 : eye}
        onClick={() => showPassword()}
        alt={'eye'}
      />
    </>
  )
}
