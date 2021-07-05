import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
          formControl: {
            margin: theme.spacing(1),
            minWidth: 120,
          },
          selectEmpty: {
            marginTop: theme.spacing(2),
          },
        }));

export default function SelectCity(props) {
      const classes = useStyles();
      const [city, setCity] = React.useState('MUMBAI');
      const finalchange = (city)=>{props.changeCity(city)} ;

      const handleChange = (event) => {
        setCity(event.target.value);
        finalchange(event.target.value);
      };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">SelectCity</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={city}
          onChange={(event ,value) =>{handleChange(event ,value)}}
        > 
        <MenuItem value='MUMBAI'>MUMBAI</MenuItem>
          <MenuItem value='DELHI'>DELHI</MenuItem>
          <MenuItem value='LUCKNOW'>LUCKNOW</MenuItem>
          <MenuItem value='BANGALORE'>BANGALORE</MenuItem>
          <MenuItem value='HYDERABAD'>HYDERABAD</MenuItem>
          
        </Select>
      </FormControl>
 </div>
  )
};

