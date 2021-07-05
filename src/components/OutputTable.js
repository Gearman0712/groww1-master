import React ,{useState,useEffect} from 'react';

 import { NavLink } from 'react-router-dom';
import BootstrapTable from 'react-bootstrap-table-next';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css';
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
function OutputTable(props)
{   
  const [bankList ,setBankList] =useState();
   
    useEffect(() =>{
        setBankList(props.finalTempData);
 
    },[props.finalTempData])
    const linkFormatter = (cell, row, rowIndex) => {
        return (
            <NavLink to ={`/bank-details/${row.ifsc}`}>
            
                 {cell}
            
            </NavLink>

        );
      };
    const columns =[
        {dataField: 'bank_name' , text: 'BANK NAME' , formatter: linkFormatter ,sort:true},
        {dataField: 'city' , text:'CITY',sort:true},
        {dataField: 'branch' ,text:'BRANCH',sort:true},
        {dataField: 'ifsc' ,text:'IFSC',sort:true},

    ]
   
    const pagination = paginationFactory(
        { page:1,
         sizePerPage :10,
         lastPageText:'>>',
         firstPageText:'<<',
         nextPageText:'>',
         prePageText:'<',
         showTotal:true,
         alwaysShowAllBtns: true,
        }
    )
    


    return (
  <> 
    { bankList !== undefined? 
        <BootstrapTable
    bootstrap4 
    keyField ='ifsc' 
    columns ={columns} 
    data ={bankList} 
    pagination ={pagination}

   /> : <h1>"Loading"</h1>

    }
  
  
  </>
    )

}

export default OutputTable;