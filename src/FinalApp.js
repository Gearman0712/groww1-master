import React ,{useState}from 'react'
import App from './App';
import Details from './components/Details';
import Error from './components/Error';
import { NavigationBar } from './components/NavigationBar';
import { Route, Switch,Redirect } from 'react-router-dom';
function FinalApp() {
    const  [currentBankList , setCurrentBankList] = useState([]);

    return (
        <>
        <NavigationBar />
       
        <Switch >
             <Route
                   exact  path={`/all-banks`}
                     render={(props) => (
                <App {...props} changeCurrentBankList ={(cb)=>{ setCurrentBankList(cb) } } isAuthed={true} />
            )}
            />
        
            <Route
                 exact  path="/bank-details/:ifsc"
                     render={(props) => (
                <Details {...props} currentTempBankList ={ currentBankList}  isAuthed={true} />
            )}
            />
            <Redirect exact from ="/" to="/all-banks" />
            <Route  component={Error} isAuthed={true} /> 

            
        </Switch>
        
        </>
    )
}

export default FinalApp;
