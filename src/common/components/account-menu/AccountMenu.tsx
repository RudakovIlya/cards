import { MouseEvent, useState } from 'react'

import LogoutIcon from '@mui/icons-material/Logout'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Tooltip from '@mui/material/Tooltip'
import { useNavigate } from 'react-router-dom'

import { paths, ProfileAvatar, useAppSelector } from 'common'
import { useAuth } from 'features/auth'

export const AccountMenu = () => {
  const { onLogout } = useAuth()
  const navigate = useNavigate()
  const userProfileData = useAppSelector(state => state.profile.profile)

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const redirectToProfileHandler = () => {
    navigate(paths.USER_PROFILE)
  }

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <span style={{ marginRight: '10px' }}>{userProfileData.name}</span>

      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center', width: '80px' }}>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <ProfileAvatar imageSize={{ width: '45px', height: '45px' }} />
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            width: '150px',
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem
          onClick={redirectToProfileHandler}
          sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          <ProfileAvatar imageSize={{ width: '25px', height: '25px' }} /> Profile
        </MenuItem>
        <Divider />
        <MenuItem onClick={onLogout} sx={{ display: 'flex', alignItems: 'center', columnGap: 2 }}>
          <LogoutIcon />
          Logout
        </MenuItem>
      </Menu>
    </div>
  )
}
