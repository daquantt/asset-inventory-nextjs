import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import NavBar from '../../components/NavBar'
import AssetTable from '@/components/AssetTable';

export default function Assets() {
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
        Asset Listing
      </Typography>

      <Box>
        <AssetTable />
      </Box>
    </Container>
  </>
}