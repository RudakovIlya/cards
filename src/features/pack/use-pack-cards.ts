import { useAppSelector } from 'common'

export const usePackCards = () => {
  return useAppSelector(state => state.pack.cards)
}
