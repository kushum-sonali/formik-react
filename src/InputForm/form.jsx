import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { countries } from "../data/countries";
import { FormControl, FormControlLabel, MenuItem,RadioGroup,Radio,FormLabel, FormHelperText,
  Select,InputLabel,Checkbox,Chip,Box,Grid,Typography,
  OutlinedInput,InputAdornment,IconButton

} from "@material-ui/core";
import "./form.css";
import FormCover from "../animation/formcover";


export const Form = (props) => {
  
    const {
      values: { name, address, country, gender, hobbies },
      errors,
      touched,
      handleChange,
      isValid,
      setFieldTouched
    } = props;
   const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
   ];
   
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
   const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };
    const [currentGender, setGender] = useState(gender);
    const change = (name, e) => {
      e.persist();
      handleChange(e);
      setFieldTouched(name, true, false);
    };
    const handleGenderChange = (name, e) => {
      e.persist();
      setGender(e.target.value);
      handleChange(e);
      setFieldTouched(name, true, false);
    };

    return (
       <>
       {/* <Grid container spacing={3}>

        <Grid item xs={12} sm={6}> */}
          
        <form onSubmit={props.handleSubmit}>
        <TextField
          id="name"
          name="name"
          helperText={touched.name ? errors.name : ""}
          error={touched.name && Boolean(errors.name)}
          label="Name"
          value={name}
          onChange={change.bind(null, "name")}
          fullWidth
        
        />
        <TextField
          id="address"
          name="address"
          helperText={touched.address ? errors.address : ""}
          error={touched.address && Boolean(errors.address)}
          label="Address"
          fullWidth
          value={address}
          onChange={change.bind(null, "address")}
          maxRows={4}
          minRows={4}
        />
        <TextField
          id="country"
          name="country"
         select
          helperText={touched.country ? errors.country : ""}
          error={touched.country && Boolean(errors.country)}
          label="Country"
          fullWidth
          value={country}
          onChange={change.bind(null, "country")}
          SelectProps={{
            native: true
          }}
        >
        { countries.map(option => (
            <option key={option.code} value={option.name}>
              <MenuItem value={option.name}>{`[${option.code}]  `+ option.name}</MenuItem>
            </option>
          ))}
        </TextField>
     <div className="gender">
      
     <FormControl 
         error={touched.gender && Boolean(errors.gender)}
          fullWidth

        >
  <FormLabel id="demo-radio-buttons-group-label">Select Gender</FormLabel>
  <RadioGroup
    aria-labelledby="demo-radio-buttons-group-label"
    name="gender"
    row
    value={gender}
    onChange={change.bind(null,"gender")}
  >
    <FormControlLabel 
    value="male"
     control={<Radio />}
      label="Male"
    />
    <FormControlLabel value="female" control={<Radio />} label="Female" />
    <FormControlLabel value="other" control={<Radio />} label="Other" />
  </RadioGroup>
</FormControl>
     </div>
<hr/>

<div className="hobbies">
<FormControl
        fullWidth
       
        error={touched.hobbies && Boolean(errors.hobbies)}
 >
        <InputLabel id="demo-multiple-chip-label" htmlFor="hobbies"
        helperText={touched.hobbies ? errors.hobbies : ""}
          error={touched.hobbies && Boolean(errors.hobbies)}
        fullWidth
        >Hobbies</InputLabel>
        <Select
        required
         labelId="demo-multiple-chip-label"
         id="demo-multiple-chip"
          name="hobbies"
          multiple
          value={hobbies}
          onChange={change.bind(null,"hobbies")}
          input={<OutlinedInput 
            
           

            id="hobbies"
          
          fullWidth
          

          />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}
         helperText={touched.hobbies ? errors.hobbies : ""}
          error={touched.hobbies && Boolean(errors.hobbies)}
            >
              {selected.map((value) => (
                
                <Chip key={value} label={value}
                
                />
              ))}

              
            </Box>
          )}
          MenuProps={MenuProps}
        >

          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
             
            >
              
              {name}
            </MenuItem>
          ))}
          
        </Select>

      {
        touched.hobbies && Boolean(errors.hobbies) ? (
          <FormHelperText>{errors.hobbies}</FormHelperText>
        ) : null

      }
        

      </FormControl>
</div>
        <hr/>
        
       <div className="btn">
       <Button
          type="submit"
          fullWidth
            variant="contained"
            color="primary"
          disabled={!isValid}
        >
          Submit
        </Button>
        </div>
       
        </form>
        {/* </Grid>  */}
      
       {/* <Grid item xs={12} sm={6}> */}

        {/* <FormCover/> */}
       {/* </Grid> */}
        {/* </Grid> */}
       </>
        
    );
   };
   