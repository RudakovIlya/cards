import { MouseEvent, useState } from 'react'

import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Tooltip from '@mui/material/Tooltip'
import { useNavigate } from 'react-router-dom'

import profile_logout from 'assets/img/profile_logout.svg'
import { paths, ProfileAvatar, useAppSelector } from 'common'
import { useAuth } from 'features/auth'

export const AccountMenu = () => {
  const userProfileData = useAppSelector(state => state.profile.profile)
  const { logoutHandler } = useAuth()
  const menuItemStyle = { display: 'flex', alignItems: 'center', justifyContent: 'center' }
  const navigate = useNavigate()
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
        <MenuItem onClick={redirectToProfileHandler} sx={menuItemStyle}>
          <ProfileAvatar imageSize={{ width: '25px', height: '25px' }} /> Profile
        </MenuItem>
        <Divider />
        <MenuItem onClick={logoutHandler} sx={menuItemStyle}>
          <img style={{ marginRight: '5px' }} src={profile_logout} alt="edit" />
          Logout
        </MenuItem>
      </Menu>
    </div>
  )
}
