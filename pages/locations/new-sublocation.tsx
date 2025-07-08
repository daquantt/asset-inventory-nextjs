import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import NavBar from '../../components/NavBar'
import NewSubLocationForm from '@/components/NewSubLocationForm';

export default function NewSubLocation() {
  return <>
    <NavBar />
    <Container maxWidth="lg" component="main">

      <Typography
        variant="h5"
        component="h2"
        sx={{
          textAlign: 'center',
          my: 3, 
          fontWeight: 700
        }}
        >
        Locations - New Sub-Location
      </Typography>
      <NewSubLocationForm />

    </Container>
  </>
}