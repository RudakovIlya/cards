import { FC } from 'react'

import Grid from '@mui/material/Grid'
import Slider, { SliderProps } from '@mui/material/Slider'

export const CustomSlider: FC<SliderProps & { min?: number; max?: number }> = props => {
  const { min, max } = props

  return (
    <Grid item flex={'0 0 200px'}>
      <span id={'hw11-value'}>{min}</span>
      <Slider id={'hw11-single-slider'} {...props} value={[min, max] as number[]} />
      <span id={'hw11-value'}>{max}</span>
    </Grid>
  )
}
