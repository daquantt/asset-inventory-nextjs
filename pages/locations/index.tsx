import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import NavBar from '../../components/NavBar'

export default function Locations() {
  return <>
    <NavBar />
    <Container maxWidth="lg" component="main">
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
        Asset Locations
      </Typography>
    </Container>

  </>
}