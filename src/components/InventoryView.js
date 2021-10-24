import React from 'react';
import temp from 'C:\\Users\\gnyan\\Documents\\GATECH\\HackGT\\frontend\\output_data.json';
import { JsonToTable } from "react-json-to-table";
function Table() {
  
  return (
    <div className="App">
       
      <JsonToTable json={temp} />
      
    </div>
  ); 
}



export default Table;