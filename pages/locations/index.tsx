import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import NavBar from '../../components/NavBar'
import DepartmentTable from '@/components/DepartmentTable';
import FloorTable from '@/components/FloorTable';
import SubLocationTable from '@/components/SubLocationTable';

export default function Locations() {
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
        Asset Locations
      </Typography>

      <Box sx={{ maxWidth: 650, mx: 'auto', mb: 5 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
          <Typography
            variant="h6"
            component="h3"
            sx={{ fontWeight: 700 }}
          >
            Departments
          </Typography>
          <Button variant='contained' color='success' href='/locations/new-department' >
            New Department
          </Button>
        </Box>
        <DepartmentTable />
      </Box>

      <Box sx={{ maxWidth: 650, mx: 'auto', mb: 5 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
          <Typography
            variant="h6"
            component="h3"
            sx={{ fontWeight: 700 }}
          >
            Floors
          </Typography>
          <Button variant='contained' color='success' href='/locations/new-floor' >
            New Floor
          </Button>
        </Box>
        <FloorTable />
      </Box>

      <Box sx={{ maxWidth: 650, mx: 'auto', mb: 5 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
          <Typography
            variant="h6"
            component="h3"
            sx={{ fontWeight: 700 }}
          >
            Sub-Locations
          </Typography>
          <Button variant='contained' color='success' href='/locations/new-sublocation' >
            New Sub-Location
          </Button>
        </Box>
        <SubLocationTable />
      </Box>
    </Container>

  </>
}