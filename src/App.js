//import logo from './logo.svg';
import './App.css';
import React ,{useState,useEffect} from 'react';
import { Grid  } from '@material-ui/core';
import SideBar from './components/SideBar';
import RightBar from './components/RightBar';
        
function App(props) {

      const  [city1, setCity] = useState('MUMBAI');
      const  [category, setCategory] = useState('');
      const  [searchWord, setSearchWord] = useState('');
      const  [myOptions , setMyOptions] = useState([]);
      const  [myTempOptions , setMyTempOptions] = useState();
      
 
      const searchBasedOnCity =() =>
      { 
        
        fetch(`https://vast-shore-74260.herokuapp.com/banks?city=${city1}`)
      .then((response) => response.json())
          .then((res) => {
          
            setMyOptions(res);
            setMyTempOptions(res);
        props.changeCurrentBankList(res);
    }).catch((err)=>{console.log("erroe while fetching")})

    
      };


      const  searchBasedOnSearchWord = () =>{
        
        var arr =[];
        if(searchWord=== null || searchWord=== '')
        setMyTempOptions(myOptions);

        else if(category !=='' && searchWord !== '' )
        {  try {
            var patt = new RegExp(searchWord, "i");
            
            myOptions.forEach((element)=>{
            let n = element[category].search(patt); 
            if(n===0) arr.push(element);
          })

          setMyTempOptions(arr);
        }
        catch(error) {
          console.log(error);
        }
        }

      }

      useEffect(() => {
        searchBasedOnCity();
        setCategory('');
      },[city1]);

      useEffect(
        () => {
        searchBasedOnSearchWord();
      
      },[searchWord]);

      const setCityUtil =(ci) =>{
        setCity(ci);
      }

 
  return (
   <>
        <div className = "main">
        <Grid container spacing={1}>

        

        <Grid className ="side" item xs={2}>
          <SideBar/>
        </Grid>

        <Grid className="right"  item xs={10}>
          <RightBar
              changeCity ={(ci) => setCityUtil(ci) }
          
              changeCategory ={(ca) => setCategory(ca)} 
              changeSearchWord ={(sw) =>{ setSearchWord(sw)}} 

              finalData ={myOptions} 
              finalTempData ={myTempOptions} 
              categorydata ={category}
          />
        </Grid>
          
      </Grid>
      </div>
   </>
  );
}

export default App;
