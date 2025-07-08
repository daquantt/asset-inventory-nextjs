import { FormEvent, useState } from "react";

import { Button, Grid, TextField } from "@mui/material";


export default function NewSubLocationForm() {
  const [subLocationName, setSubLocationName] = useState("")
  const [subLocationCode, setSubLocationCode] = useState("")

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
          id="subLocationName"
          name="subLocationName"
          label="Sub-Location Name"
          variant="filled"
          fullWidth
          value={subLocationName}
          onChange={(event)=> {
            setSubLocationName(event.target.value)
          }}
        />
      </Grid>

      <Grid size={{ xs: 12 }}>
        <TextField
          id="subLocationCode"
          name="subLocationCode"
          label="Sub-Location Code"
          variant="filled"
          fullWidth
          value={subLocationCode}
          onChange={(event)=> {
            setSubLocationCode(event.target.value)
          }}
        />
      </Grid>      

      <Grid>
        <Button 
          variant="contained"
          type="submit"
          color="success"        
        >
          Add Sub-Location
        </Button>
      </Grid>
    </Grid>

  </form>
}