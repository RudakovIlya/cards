import { useAppSelector } from 'common'

export const useProfile = () => {
  return useAppSelector(state => state.profile.profile)
}
