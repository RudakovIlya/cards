import { useAppSelector } from 'common'

export const usePackList = () => {
  return useAppSelector(state => state.packList.packList.cardPacks)
}
