import { FormEvent, useState } from "react";

import { Button, Grid, TextField } from "@mui/material";


export default function NewCategoryForm() {
  const [categoryName, setCategoryName] = useState("")
  const [categoryShortName, setCategoryShortName] = useState("")
  const [categoryLife, setCategoryLife] = useState("")

  const submitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log('form submitted')
  }

  return <form onSubmit={submitForm}>
    <Grid 
      container
      direction="row"
      spacing={3}
      sx={{ p: 2, justifyContent: 'center' }}
    >
      <Grid size={{ xs: 12 }}>
        <TextField
          id="categoryName"
          name="categoryName"
          label="Category Name"
          variant="filled"
          fullWidth
          value={categoryName}
          onChange={(event)=> {
            setCategoryName(event.target.value)
          }}
        />
      </Grid>

      <Grid size={{ xs: 12 }}>
        <TextField
          id="categoryShortName"
          name="categoryShortName"
          label="Category Short Name"
          variant="filled"
          fullWidth
          value={categoryShortName}
          onChange={(event)=> {
            setCategoryShortName(event.target.value)
          }}
        />
      </Grid>

      <Grid size={{ xs: 12 }}>
        <TextField
          id="categoryLife"
          name="categoryLife"
          label="Life (Mths)"
          variant="filled"
          fullWidth
          value={categoryLife}
          onChange={(event)=> {
            setCategoryLife(event.target.value)
          }}
        />
      </Grid>

      <Grid>
        <Button 
          variant="contained"
          type="submit"
          color="success"        
        >
          Add New Category
        </Button>
      </Grid>
    </Grid>

  </form>
}