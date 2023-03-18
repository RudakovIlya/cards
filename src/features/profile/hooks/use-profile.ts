import { useAppSelector } from 'common'
import { profileData } from 'features/profile'

export const useProfile = () => {
  return useAppSelector(profileData)
}
