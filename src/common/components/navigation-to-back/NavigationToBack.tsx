import KeyboardBackspaceTwoToneIcon from '@mui/icons-material/KeyboardBackspaceTwoTone'
import IconButton from '@mui/material/IconButton'
import { useNavigate } from 'react-router-dom'

import { paths } from 'common/constants'

export const NavigationToBack = () => {
  const navigate = useNavigate()
  const returnToPackList = () => navigate(paths.PACK_LIST)

  return (
    <div
      style={{
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        marginTop: '24px',
      }}
      onClick={returnToPackList}
    >
      <IconButton disableRipple disableTouchRipple>
        <KeyboardBackspaceTwoToneIcon sx={{ marginRight: '10px' }} />
      </IconButton>
      <span>Back to Packs List</span>
    </div>
  )
}
