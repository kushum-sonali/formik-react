import React from 'react'
import InputForm from './InputForm'
import './App.css'
import FormCover from './animation/formcover'
import { Grid } from '@material-ui/core'
function App() {

  return (
       <div className="app">
        <Grid container spacing={3} >
           <Grid container  xs={12} sm={6}>
            <div style={{display:"flex",alignSelf:"center", alignItems:"center"}}>
            <FormCover />
            </div>
            </Grid>
        <Grid item xs={12} sm={6}>
          
        <InputForm />
      </Grid>
         
      </Grid>
      
       </div>

  )
}

export default App
