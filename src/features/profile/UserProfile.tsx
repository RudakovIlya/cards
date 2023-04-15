import React from 'react'

import LogoutIcon from '@mui/icons-material/Logout'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'

import { NavigationToBack, paths, ProfileAvatar, useRedirect, UserName } from 'common'
import { useAuth } from 'features/auth'
import { ChangeAvaButton, useProfile } from 'features/profile'

export const UserProfile = () => {
  const { name, avatar, email } = useProfile()
  const { onLogout, isLoggedIn } = useAuth()

  useRedirect(paths.LOGIN, !isLoggedIn)

  return (
    <>
      <NavigationToBack />
      <Grid
        sx={{ paddingTop: 8 }}
        direction={'column'}
        container
        justifyContent={'center'}
        alignItems={'center'}
      >
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
          <Box sx={{ fontWeight: 'bold' }}>Personal Information</Box>
          <Box
            sx={{
              width: '100px',
              height: '100px',
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'flex-end',
            }}
          >
            <ProfileAvatar
              name={name}
              avatar={avatar}
              imageSize={{ width: '96px', height: '96px', fontSize: '40px' }}
            />
            <ChangeAvaButton />
          </Box>
          <div style={{ height: '20px', marginBottom: '10px' }}>
            <UserName name={name} avatar={avatar} />
          </div>
          <div>{email}</div>
          <Button
            sx={{
              color: '#000',
              backgroundColor: '#FFF',
              columnGap: 2,
              boxShadow: '0px 4px 18px rgb(0 0 0 / 35%), inset 0px 1px 0px rgb(255 255 255 / 30%)',
            }}
            variant={'radius'}
            size={'medium'}
            onClick={onLogout}
          >
            <LogoutIcon />
            Log out
          </Button>
        </Paper>
      </Grid>
    </>
  )
}
