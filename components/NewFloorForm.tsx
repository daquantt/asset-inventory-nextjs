import { FormEvent, useState } from "react";

import { Button, Grid, TextField } from "@mui/material";


export default function NewFloorForm() {
  const [floorName, setFloorName] = useState("")
  const [floorCode, setFloorCode] = useState("")

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
          id="floorName"
          name="floorName"
          label="Floor Name"
          variant="filled"
          fullWidth
          value={floorName}
          onChange={(event)=> {
            setFloorName(event.target.value)
          }}
        />
      </Grid>

      <Grid size={{ xs: 12 }}>
        <TextField
          id="floorCode"
          name="floorCode"
          label="Floor Code"
          variant="filled"
          fullWidth
          value={floorCode}
          onChange={(event)=> {
            setFloorCode(event.target.value)
          }}
        />
      </Grid>      

      <Grid>
        <Button 
          variant="contained"
          type="submit"
          color="success"        
        >
          Add Floor
        </Button>
      </Grid>
    </Grid>

  </form>
}