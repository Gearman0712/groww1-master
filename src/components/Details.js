import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'

const Details = (props) => {
    const re=useParams();
    const  [bankId, setBankId] = useState(re.ifsc);
    const  [bankDetails, setBankDetails] =useState(props.currentTempBankList);
    const  [bank, setBank] =useState({});
    const searchBasedOnbankId =() =>
    {   var res =bankDetails;
        console.log(res);
     console.log("hey");
         setBankDetails(res);
          var arr={};
         res.forEach(element => {
             if(element.ifsc === re.ifsc)
             arr= element;
         });
         setBank(arr);
      
      
   
   
    };
    useEffect(()=>{
        searchBasedOnbankId();
    },[bankId])
    useEffect(()=>{
     //   searchBasedOnbankId();
     
    },[bank])
    
    return (
        <>
        
        <section className="my-1">
       
        <h3 className="h1-responsive bold text-center my-0">
          Bank Name
        </h3>
            <p className="lead grey-text w-responsive text-center mx-auto mb-2">
            {bank.bank_name !=null?
              bank.bank_name : "Loading"

            }
           </p>
         
           <h3 className="h1-responsive bold text-center my-0">
           Branch
        </h3>
            <p className="lead grey-text w-responsive text-center mx-auto mb-2">
            {bank.branch !=null?
              bank.branch : "Loading"

            }
           </p>
           <h3 className="h1-responsive bold text-center my-0">
         City
        </h3>
            <p className="lead grey-text w-responsive text-center mx-auto mb-2">
            {bank.city !=null?
              bank.city : "Loading"

            }
           </p>
           <h3 className="h1-responsive bold text-center my-0">
           Bank_id
        </h3>
            <p className="lead grey-text w-responsive text-center mx-auto mb-2">
            {bank.bank_id !=null?
              bank.bank_id : "Loading"

            }
           </p>
           <h3 className="h1-responsive bold text-center my-0">
           District
        </h3>
            <p className="lead grey-text w-responsive text-center mx-auto mb-2">
            {bank.district !=null?
              bank.district : "Loading"

            }
           </p>
           <h3 className="h1-responsive bold text-center my-0">
           State
        </h3>
            <p className="lead grey-text w-responsive text-center mx-auto mb-2">
            {bank.state !=null?
              bank.state : "Loading"

            }
           </p>
           <h3 className="h1-responsive bold text-center my-0">
           Ifsc
        </h3>
            <p className="lead grey-text w-responsive text-center mx-auto mb-2">
            {bank.ifsc !=null?
              bank.ifsc : "Loading"

            }
           </p>
           <h3 className="h1-responsive bold text-center my-0">
           Address
        </h3>
            <p className="lead grey-text w-responsive text-center mx-auto mb-2">
            {bank.address !=null?
              bank.address : "Loading"

            }
           </p>


        </section>

           
        </>
    )
}

export default Details
