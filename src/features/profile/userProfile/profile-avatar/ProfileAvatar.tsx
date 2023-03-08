import Avatar from '@mui/material/Avatar'

import test_ava from 'assets/img/test_ava.png'

type ProfileAvatarPropsType = {
  imageSize: {
    width: string
    height: string
  }
}

export const ProfileAvatar = (props: ProfileAvatarPropsType) => {
  return <Avatar alt="UserName" style={props.imageSize} src={test_ava} />
}
