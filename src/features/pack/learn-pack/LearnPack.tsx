import { useState } from 'react'

import {
  Button,
  Card,
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  Paper,
  Radio,
  RadioGroup,
} from '@mui/material'
import Skeleton from '@mui/material/Skeleton'
import Typography from '@mui/material/Typography'
import { useNavigate } from 'react-router-dom'

import { NavigationToBack, paths, SubHeader } from 'common'
import { useFetchPack, usePackCards, FilterPanels } from 'features/pack'

// const navigate = useNavigate()
// const returnToPackList = () => navigate(paths.PACK_LIST)

export const LearnPack = () => {
  const { packCards, packName } = usePackCards()
  const [visible, setVisible] = useState(true)
  const hideButton = () => {
    setVisible(false)
  }

  useFetchPack()

  return (
    <>
      <NavigationToBack />
      <Typography
        sx={{ flex: '0 0 25%', marginBottom: 2 }}
        variant={'h2'}
        fontSize={22}
        fontWeight={600}
        textAlign={'center'}
      >
        {packName}
      </Typography>
      <Container>
        <Card
          variant="outlined"
          sx={{
            width: 439,
            minHeight: 204,
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            padding: 5,
          }}
        >
          <span style={{ marginBottom: 20 }}>
            <b>Question: </b>Will u be my slave?
          </span>
          <span style={{ fontSize: 14, color: 'lightgray', marginBottom: 10 }}>
            Количество попыток ответов на вопрос: <b>10</b>
          </span>
          <Button
            variant="contained"
            sx={{
              marginTop: 2,
              backgroundColor: '#366EFF',
              borderRadius: 30,
              height: 36,
              margin: '10 auto',
              maxWidth: 373,
            }}
          >
            Show answer
          </Button>
          <Answer />
        </Card>
      </Container>

      {/*<SubHeader*/}
      {/*  disabled={status === 'loading'}*/}
      {/*  isLoading={status === 'loading'}*/}
      {/*  title={packName}*/}
      {/*  titleButton={isMe ? 'Add new card' : 'Learn to pack'}*/}
      {/*  onClick={isMe ? addNewCard : learnCard}*/}
      {/*/>*/}
    </>
  )
}

export const Answer = () => {
  return (
    <>
      <div style={{ paddingTop: 40, display: 'flex', flexDirection: 'column' }}>
        <span style={{ paddingBottom: 20 }}>
          <b>Answer: </b>I do not know, I need time to think it over?
        </span>
        <br />

        <FormControl style={{ paddingBottom: 20 }}>
          <FormLabel>Rate yourself:</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
          >
            <FormControlLabel value="did not know" control={<Radio />} label="Did not know" />
            <FormControlLabel value="forgot" control={<Radio />} label="Forgot" />
            <FormControlLabel
              value="a lot of thought"
              control={<Radio />}
              label="A lot of thought"
            />
            <FormControlLabel value="confused" control={<Radio />} label="Confused" />
            <FormControlLabel value="knew the answer" control={<Radio />} label="Knew the answer" />
          </RadioGroup>
        </FormControl>
        <Button
          variant="contained"
          sx={{
            marginTop: 2,
            backgroundColor: '#366EFF',
            borderRadius: 30,
            height: 36,
            margin: '10 auto',
            maxWidth: 373,
          }}
        >
          Show answer
        </Button>
      </div>
    </>
  )
}

export default LearnPack
