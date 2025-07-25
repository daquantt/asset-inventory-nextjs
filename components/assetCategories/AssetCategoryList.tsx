import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import AssetCategoryItem from "./AssetCategoryItem";
import { Category } from '@/types/category';

// define named prop type for categories array
interface CategoriesPropType {
  categories: Category[]
}

export default function AssetCategoryList({categories}: CategoriesPropType) {
  return <Grid 
    container
    direction="row"
    spacing={2} 
    my={4}
    sx={{ alignItems: 'stretch', justifyContent: 'center' }}
  >
    {categories.length === 0 &&
      <Grid key="no-categories" size={{ xs: 12 }}>
        <Typography variant="h5" component="div" sx={{padding: 2}}>
          No categories found.
        </Typography>
      </Grid>
    }
    {categories.map((category) => {
      return <Grid key={category.name} size={{ xs: 12, md: 6, lg: 4 }}>
        <AssetCategoryItem category={category} />
      </Grid>
    })}
  </Grid>
}