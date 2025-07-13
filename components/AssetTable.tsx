import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import AssetTableRow from './AssetTableRow';

function createData(
  asset_id: number,
  description: string,
  category: string,
  location: string,
  purchaseDate: string,
  cost: number,
) {
  return { asset_id, description, category, location, purchaseDate, cost };
}

const rows = [
  createData(1, 'Chair', 'FURN', 'ACC.02.SUP', '25-07-2020', 2500),
  createData(2, 'Copier', 'MACH', 'LEG.03.SEC', '25-09-2023', 6000),
];


export default function AssetTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 350 }} aria-label='Asset table'>
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: 'bold' }}>Description</TableCell>
            <TableCell align='right' sx={{ fontWeight: 'bold' }}>Category</TableCell>
            <TableCell align='right' sx={{ fontWeight: 'bold' }}>Location</TableCell>
            <TableCell align='right' sx={{ fontWeight: 'bold' }}>Purchase Date</TableCell>
            <TableCell align='right' sx={{ fontWeight: 'bold' }}>Cost</TableCell>
            <TableCell align='right' sx={{ fontWeight: 'bold' }}>View/Edit</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <AssetTableRow key={row.asset_id} asset={row} />            
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}