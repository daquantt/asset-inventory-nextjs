import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import NavBar from '../../components/NavBar'
import AssetCategoryList from '@/components/assetCategories/AssetCategoryList';

function createData(
  name: string,
  code: string,
  life: number,
  description?: string,
) {
  return { name, life, code, description };
}

const rows = [
  createData('Building', 'BLDG', 600, 'Buildings owned by the company'),
  createData('Machinery & Equipment', 'MACH', 60),
  createData('Computer Hardware', 'HW', 36),
  createData('Computer Software', 'SW', 36),
  createData('Furniture', 'FURN', 60),
  createData('Motor Vehicles', 'MV', 48),
];

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

      <Box>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
          <Button variant='contained' color='success' href='/categories/new-category' >
            New Category
          </Button>
        </Box>        
      </Box>

      <AssetCategoryList categories={rows}/>
    </Container>
  </>
}