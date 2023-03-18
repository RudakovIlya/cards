import { FC, memo, useEffect, useState } from 'react'

import Grid from '@mui/material/Grid'
import Slider, { SliderProps } from '@mui/material/Slider'
import Typography from '@mui/material/Typography'

type CustomSliderType = {
  values: number[]
  minMax: number[]
}

export const CustomSlider: FC<SliderProps & CustomSliderType> = memo(
  ({ values, minMax, disabled, ...props }) => {
    const [value, setValue] = useState<number[]>(values)

    const handleChange = (event: any, newValue: number | number[]) => {
      setValue(newValue as number[])
    }

    useEffect(() => {
      if (minMax[0] === value[0] && minMax[1] === value[1]) return
      setValue(values)
    }, [values])

    useEffect(() => {
      setValue(values)
    }, [values[0], values[1]])

    return (
      <Grid item flex={'0 0 200px'}>
        <Typography margin={'0 0 8px 0'} fontSize={15} fontWeight={500}>
          Number of cards
        </Typography>
        <div>
          <span>min: {value[0]}</span>
          <Slider
            value={value}
            onChange={handleChange}
            min={values[0]}
            max={values[1]}
            disabled={!values[1] || disabled}
            {...props}
          />
          <span>max: {value[1]}</span>
        </div>
      </Grid>
    )
  }
)
