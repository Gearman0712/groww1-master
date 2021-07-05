import React from 'react';
import { Grid  } from '@material-ui/core';
import SearchBar from './SearchBar';
import OutputTable from './OutputTable';

function RightBar(props) {
 
  return (
      <>
      <Grid className="right_searchBar" item xs={12}>
         
          <SearchBar changeCity ={(wr)=>{props.changeCity(wr)}} 
          changeCategory ={(ca) => props.changeCategory(ca)}
           changeSearchWord ={(sw) =>props.changeSearchWord(sw)}
           categorydata ={props.categorydata} 
           
           
           />
        </Grid>

        <Grid className="right_Output" item xs={12}>

          <OutputTable finalTempData ={props.finalTempData}/>

        </Grid>
        
      </>

  );

}
export default RightBar ;