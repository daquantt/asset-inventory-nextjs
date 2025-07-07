import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import NavBar from '../../components/NavBar'
import NewCategoryForm from '@/components/NewCategoryForm';

export default function NewCategory() {
  return <>
    <NavBar />
    <Container maxWidth="lg" component="main">

      <Typography
        variant="h5"
        component="h2"
        sx={{
          textAlign: 'center',
          my: 3, 
          fontFamily: 'monospace',
          fontWeight: 700
        }}
        >
        Add New Category
      </Typography>

      <NewCategoryForm />
    </Container>
  </>
}