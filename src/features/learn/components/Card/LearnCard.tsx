import Card from '@mui/material/Card'

import { cardStyles } from 'common'
import { CardContent } from 'features/learn/components/Card/CardContent'

export const LearnCard = () => {
  return (
    <Card variant="outlined" sx={cardStyles}>
      <CardContent />
    </Card>
  )
}
