import Grid from '@mui/material/Grid'
import { Outlet } from 'react-router-dom'

export const Auth = () => {
  return (
    <Grid sx={{ paddingTop: 8 }} container justifyContent={'center'} alignItems={'center'}>
      <Outlet />
    </Grid>
  )
}
