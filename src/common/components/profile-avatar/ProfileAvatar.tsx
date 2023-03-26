import { FC } from 'react'

import Avatar from '@mui/material/Avatar'

type ImageSizeType = {
  width: string
  height: string
  fontSize?: string
}

type ProfileAvatarPropsType = {
  imageSize: ImageSizeType
  avatar: string | undefined
  name: string
}

export const ProfileAvatar: FC<ProfileAvatarPropsType> = ({ imageSize, avatar, name }) => {
  return (
    <>
      {avatar && /^data:image/.test(avatar) ? (
        <Avatar alt="UserName" style={imageSize} src={avatar} />
      ) : (
        <Avatar alt="UserName" style={imageSize}>
          {name && name.split(' ').length === 2
            ? name.split(' ')[0][0].toUpperCase() + name.split(' ')[1][0].toUpperCase()
            : name.split(' ')[0][0].toUpperCase()}
        </Avatar>
      )}
    </>
  )
}
