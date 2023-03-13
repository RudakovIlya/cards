import { FC } from 'react'

import Button from '@mui/material/Button/Button'
import ButtonGroup from '@mui/material/ButtonGroup'

import { useSwitch } from 'common/components'

type ButtonsGroupType = {
  onClickMy?: () => void
  onClickAll?: () => void
}

export const ButtonsGroup: FC<ButtonsGroupType> = ({ onClickAll, onClickMy }) => {
  const { onClickChangeColor, allActive, myActive } = useSwitch()

  return (
    <ButtonGroup variant="contained">
      <Button sx={myActive} onClick={onClickChangeColor(onClickMy)} size={'large'}>
        My
      </Button>
      <Button sx={allActive} onClick={onClickChangeColor(onClickAll)} size={'large'}>
        All
      </Button>
    </ButtonGroup>
  )
}
