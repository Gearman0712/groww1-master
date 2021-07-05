import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField';
import { Autocomplete } from '@material-ui/lab'

 
  export default function SearchBox(props) {
    const [value1, setValue1] = useState();  
    const [inputValue, setInputValue] = useState('');  
    var searchdata = props.finalData;
    var cat = props.categorydata;
    console.log(`${cat} dog`);

 const finalChange = (value) =>{

 props.changeSearchWord(value);

 }
 const handleChange = (event,newInputValue) => {
   
  
 
  if(newInputValue!=null)
{  
  setInputValue(newInputValue);
  finalChange(newInputValue);
  console.log('tata')
  console.log(newInputValue);}
  else{ finalChange(null);

  }
};
  
    return (
        
      <Autocomplete
         id="controllable-states-demo"
        value ={value1}
        onChange={(event, newValue) => {
          setValue1(newValue);
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          
          handleChange(event,newInputValue);
        }}
        options={searchdata}
        getOptionLabel={
          (option) =>{
            if(cat !='')
            return option[cat];
            
        }
                                       }
        style={{ width: 300 }}
        renderInput={(params) => <TextField {...params}  label="Search" variant="outlined" />}
      />
    );
  };
  


