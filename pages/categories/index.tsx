import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import NavBar from '../../components/NavBar'
import CategoryTable from '@/components/CategoryTable';

export default function Categories() {
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
        Asset Categories
      </Typography>

      <Box sx={{ maxWidth: 650, mx: 'auto' }}>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
          <Button variant='contained' color='success' href='/categories/new-category' >
            New Category
          </Button>
        </Box>
        <CategoryTable />
      </Box>
    </Container>
  </>
}