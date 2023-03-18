import { FC, memo } from 'react'

import Button from '@mui/material/Button/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import Typography from '@mui/material/Typography'

import { useSwitch } from 'common'

type ButtonsGroupType = {
  onClickMy?: () => void
  onClickAll?: () => void
  disabled: boolean
}

export const ButtonsGroup: FC<ButtonsGroupType> = memo(({ onClickAll, onClickMy, disabled }) => {
  const { onChangeColor, allActive, myActive, isMy } = useSwitch()

  return (
    <div>
      <Typography margin={'0 0 8px 0'} fontSize={15} fontWeight={500}>
        Show packs cards
      </Typography>
      <ButtonGroup variant="contained">
        <Button
          disabled={!!isMy || disabled}
          sx={myActive}
          onClick={onChangeColor(onClickMy)}
          size={'large'}
        >
          My
        </Button>
        <Button
          disabled={!isMy || disabled}
          sx={allActive}
          onClick={onChangeColor(onClickAll)}
          size={'large'}
        >
          All
        </Button>
      </ButtonGroup>
    </div>
  )
})
