import React, { useState,useEffect } from 'react';


  export default function SearchBox1(props) {
    
    const [inputValue, setInputValue] = useState('');  
   
                
            useEffect(() => {
                setInputValue('');
                
            }, [props.categorydata])


            const finalChange = (value) =>{
            props.changeSearchWord(value);
            }

            const handleChange = (event,newInputValue) => {
            
            setInputValue(event.target.value);
            finalChange(event.target.value);
           
            
           };
  
    return (
       <>
        <form >
        <label id ="inp">
   
          <input type="text" id="ip2" value={inputValue} onChange={handleChange} />
        </label>
      
      </form>

      </>
    );
  };
  


