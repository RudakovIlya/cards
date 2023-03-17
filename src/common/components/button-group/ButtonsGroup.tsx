import { FC, memo } from 'react'

import Button from '@mui/material/Button/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import Typography from '@mui/material/Typography'

import { useSwitch } from 'common/components'

type ButtonsGroupType = {
  onClickMy?: () => void
  onClickAll?: () => void
  disabled: boolean
}

export const ButtonsGroup: FC<ButtonsGroupType> = memo(({ onClickAll, onClickMy, disabled }) => {
  const { onClickChangeColor, allActive, myActive, disabled: disable } = useSwitch()

  return (
    <div>
      <Typography margin={'0 0 8px 0'} fontSize={15} fontWeight={500}>
        Show packs cards
      </Typography>
      <ButtonGroup variant="contained">
        <Button
          disabled={!!disable || disabled}
          sx={myActive}
          onClick={onClickChangeColor(onClickMy)}
          size={'large'}
        >
          My
        </Button>
        <Button
          disabled={!disable || disabled}
          sx={allActive}
          onClick={onClickChangeColor(onClickAll)}
          size={'large'}
        >
          All
        </Button>
      </ButtonGroup>
    </div>
  )
})
