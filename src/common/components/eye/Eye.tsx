import { FC } from 'react'

import eye2 from 'assets/img/eye-closed.svg'
import eye from 'assets/img/eye.svg'

export const Eye: FC<{ showPassword: () => void; passwordVisible: boolean }> = ({
  showPassword,
  passwordVisible,
}) => {
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
