import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import NavBar from '../../components/NavBar'
import NewFloorForm from '@/components/NewFloorForm';

export default function NewFloor() {
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
        Locations - New Floor
      </Typography>
      <NewFloorForm />

    </Container>
  </>
}