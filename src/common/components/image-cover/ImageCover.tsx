import { FC } from 'react'

import Box from '@mui/material/Box'

type ImageCoverType = {
  deckCover?: string
  width?: string
  height?: string
}
export const ImageCover: FC<ImageCoverType> = ({ deckCover, height = '200px', width = '100%' }) => {
  return (
    <Box sx={{ margin: '10px 0' }}>
      {deckCover && (
        <img src={deckCover} style={{ height, width, objectFit: 'contain' }} alt="ava" />
      )}
    </Box>
  )
}
