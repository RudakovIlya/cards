import { useAppSelector } from 'common/hooks/hooks'
import { ProfileAvatar } from 'features/profile/userProfile/ProfileAvatar'

export const AccountMenu = () => {
  const userProfileData = useAppSelector(state => state.profile.profile)

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <span style={{ marginRight: '10px' }}>{userProfileData.name}</span>
      <ProfileAvatar imageSize={{ width: '45px', height: '45px' }} />
    </div>
  )
}
