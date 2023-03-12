import { useAppSelector } from 'common/hooks'

export const useProfile = () => {
  return useAppSelector(state => state.profile.profile)
}
