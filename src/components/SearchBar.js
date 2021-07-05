import React from 'react';
import SelectCity from './SelectCity.js';
import SelectCategory from './SelectCategory.js';
import SearchBox1 from './SearchBox1.js';
function SearchBar(props)
{
    return(
   <div  className ="search_bar_container">

      <div className ="item">
                <SelectCity changeCity ={(wr)=>{props.changeCity(wr)}} />
      </div>
      <div className ="item">
                <SelectCategory changeCategory ={(ca) => props.changeCategory(ca)}
                    categorydata = {props.categorydata}
                />
      </div>
      <div>
                <SearchBox1 changeSearchWord ={(sw) =>props.changeSearchWord(sw)}
                    finalData ={props.finalData}
                    categorydata ={props.categorydata} 
                />
      </div>
    

   </div>
    );

}
export default SearchBar;