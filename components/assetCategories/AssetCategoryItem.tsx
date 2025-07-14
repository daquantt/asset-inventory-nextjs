import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { Category } from '@/types/category';

interface AssetCategoryItemProps {
  category: Category
}

export default function AssetCategoryItem({category}: AssetCategoryItemProps) {
  return (
    <Card sx={{ height: '100%' }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {category.name}
        </Typography>
        <Box display={'flex'} sx={{ justifyContent:'space-between'}}>
          <Typography gutterBottom>
            Useful Life (mths): {category.life}
          </Typography>
          <Typography gutterBottom>
            Code: {category.code}
          </Typography>
        </Box>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {category.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant='contained' size="small">Edit</Button>
        <Button variant='contained' color='error' size="small">Delete</Button>
      </CardActions>
    </Card>
  )
}