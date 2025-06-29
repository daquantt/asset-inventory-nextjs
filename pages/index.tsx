import Typography from '@mui/material/Typography';

import NavBar from '../components/NavBar'

export default function Home() {
  return <>
    <NavBar />

    <Typography
      variant="h6"
      component="h6"
      sx={{
        textAlign: 'center',
        my: 3, 
        fontFamily: 'monospace',
        fontWeight: 700
      }}
    >
      Fixed Asset Inventory Count Application
    </Typography>
  </>
}
