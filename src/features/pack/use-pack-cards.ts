import { useAppSelector } from 'common'
import { useProfile } from 'features/profile'

export const usePackCards = () => {
  const { _id } = useProfile()

  const packUserId = useAppSelector(state => state.pack.pack.packUserId)
  const packName = useAppSelector(state => state.pack.pack.packName)

  const isMe = packUserId === _id

  const addNewCard = () => {
    console.log('addNewCard')
  }

  const learnCard = () => {
    console.log('learnCard')
  }

  return { isMe, packName, addNewCard, learnCard }
}
