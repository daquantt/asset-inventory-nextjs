import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

import LaunchIcon from '@mui/icons-material/Launch';

interface Asset {
  asset_id: number;
  description: string;
  category: string;
  location: string;
  purchaseDate: string;
  cost: number;
}

export default function AssetTableRow({ asset }: { asset: Asset }) {
  return (
    <TableRow
      key={asset.asset_id}
      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    >
      <TableCell>{asset.description}</TableCell>
      <TableCell align="right">{asset.category}</TableCell>
      <TableCell align="right">{asset.location}</TableCell>
      <TableCell align="right">{asset.purchaseDate}</TableCell>
      <TableCell align="right">{asset.cost}</TableCell>
      <TableCell align="right"><LaunchIcon /></TableCell>
    </TableRow>
  )
}