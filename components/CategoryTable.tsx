import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import LaunchIcon from '@mui/icons-material/Launch';

function createData(
  name: string,
  code: string,
  life: number,
) {
  return { name, life, code };
}

const rows = [
  createData('Building', 'BLDG', 600),
  createData('Machinery & Equipment', 'MACH', 60),
  createData('Computer Hardware', 'HW', 36),
  createData('Computer Software', 'SW', 36),
  createData('Furniture', 'FURN', 60),
  createData('Motor Vehicles', 'MV', 48),
];

export default function CategoryTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 350 }} aria-label="category table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: 'bold' }}>Category</TableCell>
            <TableCell align="right" sx={{ fontWeight: 'bold' }}>Code</TableCell>
            <TableCell align="right" sx={{ fontWeight: 'bold' }}>Life (Mths)</TableCell>
            <TableCell align="right" sx={{ fontWeight: 'bold' }}>View/Edit</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.code}</TableCell>
              <TableCell align="right">{row.life}</TableCell>
              <TableCell align="right"><LaunchIcon /></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
