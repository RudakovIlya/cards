import { Avatar, styled } from '@mui/material'
import Badge from '@mui/material/Badge'
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'

import edit_photo from 'assets/img/edit_photo.svg'
import profile_logout from 'assets/img/profile_logout.svg'
import { NavigationToBack, ProfileAvatar, UserName } from 'common/components'
import { paths } from 'common/constants'
import { useRedirect } from 'common/hooks'
import { useAuth } from 'features/auth/use-auth'
import { useProfile } from 'features/profile/use-profile'

const SmallAvatar = styled(Avatar)(({ theme }) => ({
  width: 22,
  height: 22,
  border: `2px solid ${theme.palette.background.paper}`,
}))

export const UserProfile = () => {
  const userProfileData = useProfile()
  const { logoutHandler, isLoggedIn } = useAuth()

  useRedirect(paths.LOGIN, !isLoggedIn)

  return (
    <div>
      <div>
        <NavigationToBack />
      </div>
      <Paper
        elevation={3}
        sx={{
          height: '460px',
          width: '420px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around',
          flexDirection: 'column',
        }}
      >
        <div>Personal Information</div>
        <Badge
          overlap="circular"
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          badgeContent={<SmallAvatar alt="Name" src={edit_photo} />}
        >
          <ProfileAvatar imageSize={{ width: '96px', height: '96px' }} />
        </Badge>
        <div style={{ height: '20px', marginBottom: '10px' }}>
          <UserName name={userProfileData.name} avatar={userProfileData.avatar} />
        </div>
        <div>{userProfileData.email}</div>
        <Button
          sx={{
            color: '#000',
            backgroundColor: '#FFF',
            boxShadow: '0px 4px 18px rgb(0 0 0 / 35%), inset 0px 1px 0px rgb(255 255 255 / 30%)',
          }}
          variant={'radius'}
          size={'medium'}
          onClick={logoutHandler}
        >
          <img style={{ marginRight: '5px' }} src={profile_logout} alt="edit" />
          Log out
        </Button>
      </Paper>
    </div>
  )
}
