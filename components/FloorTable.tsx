import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import LaunchIcon from '@mui/icons-material/Launch';

function createFloor(
  name: string,
  code: string,
) {
  return { name, code };
}

const rows = [
  createFloor('Basement', 'BM'),
  createFloor('Ground Floor', '00'),
  createFloor('1st Floor', '01'),
  createFloor('2nd Floor', '02'),
  createFloor('3rd Floor', '03'),
];

export default function FloorTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 350 }} aria-label="floor table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: 'bold' }}>Description</TableCell>
            <TableCell align="right" sx={{ fontWeight: 'bold' }}>Code</TableCell>
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
              <TableCell align="right"><LaunchIcon /></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
