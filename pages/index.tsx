import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

import NavBar from '../components/NavBar'
import { Box } from '@mui/material';

export default function Home() {
  return <>
    <NavBar />
    <Container maxWidth="md" component="main">
      <Typography
        variant="h5"
        component="h2"
        sx={{
          textAlign: 'center',
          mt: 8, 
          fontWeight: 700
        }}
        >
        Fixed Asset Inventory Count Application
      </Typography>
      <Typography      
        component="p"
        sx={{
          textAlign: 'center',
          my: 3, 
        }}
        >
        Ditch the paper and spreadsheets. Get instant clarity on all your equipment, tools, and tech. Your assets, organized like never before. Fast setup, fun to use, and totally hassle-free. Let&apos;s simplify inventory together.
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 6 }}>
        <Button variant='contained' size='large' href='/assets' >
          Get Started Now
        </Button>
      </Box>
      </Container>
  </>
}
