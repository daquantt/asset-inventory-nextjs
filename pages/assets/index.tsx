import Typography from '@mui/material/Typography';

import NavBar from '../../components/NavBar'

export default function Assets() {
  return <>
    <NavBar />
    <Typography
      variant="h5"
      component="h2"
      sx={{
        textAlign: 'center',
        my: 3,
        fontWeight: 700
      }}
    >
      Asset Listing
    </Typography>

  </>
}