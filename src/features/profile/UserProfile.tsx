import { styled } from '@mui/material'
import Avatar from '@mui/material/Avatar'
import Badge from '@mui/material/Badge'
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'

import edit_photo from 'assets/img/edit_photo.svg'
import edit_user_name from 'assets/img/edit_user_name.svg'
import profile_logout from 'assets/img/profile_logout.svg'
import test_ava from 'assets/img/test_ava.png'
import { useAppDispatch, useAppSelector } from 'common/hooks/hooks'
import { logOut } from 'features/auth/auth-slice'

const SmallAvatar = styled(Avatar)(({ theme }) => ({
  width: 22,
  height: 22,
  border: `2px solid ${theme.palette.background.paper}`,
}))

export const UserProfile = () => {
  const userProfileData = useAppSelector(state => state.profile.profile)
  const dispatch = useAppDispatch()
  const LogoutHandler = () => {
    dispatch(logOut())
  }

  return (
    <Paper
      elevation={3}
      sx={{
        height: '360px',
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
        badgeContent={<SmallAvatar alt="Remy Sharp" src={edit_photo} />}
      >
        <Avatar
          alt="UserName"
          style={{ width: '96px', height: '96px' }}
          src={test_ava}
          sizes="small"
        />
      </Badge>
      <div>
        <span>{userProfileData.name}</span>
        <img src={edit_user_name} alt="edit" />
      </div>
      <div>{userProfileData.email}</div>
      <Button size={'small'} variant={'radius'} onClick={LogoutHandler}>
        <img src={profile_logout} alt="edit" />
        Log out
      </Button>
    </Paper>
  )
}
