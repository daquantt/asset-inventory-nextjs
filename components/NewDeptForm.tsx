import { FormEvent, useState } from "react";

import { Button, Grid, TextField } from "@mui/material";


export default function NewDeptForm() {
  const [deptName, setDeptName] = useState("")
  const [deptCode, setDeptCode] = useState("")

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
          id="deptName"
          name="deptName"
          label="Department Name"
          variant="filled"
          fullWidth
          value={deptName}
          onChange={(event)=> {
            setDeptName(event.target.value)
          }}
        />
      </Grid>

      <Grid size={{ xs: 12 }}>
        <TextField
          id="deptCode"
          name="deptCode"
          label="Department Code"
          variant="filled"
          fullWidth
          value={deptCode}
          onChange={(event)=> {
            setDeptCode(event.target.value)
          }}
        />
      </Grid>      

      <Grid>
        <Button 
          variant="contained"
          type="submit"
          color="success"        
        >
          Add Department
        </Button>
      </Grid>
    </Grid>

  </form>
}