import TableauReport from 'tableau-react-embed';
import React from 'react';

const options = {
  height: "860px" ,
  width: "100%",
  hideTabs: false,
  // All other vizCreate options are supported here, too
  // They are listed here: https://onlinehelp.tableau.com/current/api/js_api/en-us/JavaScriptAPI/js_api_ref.htm#ref_head_9
};
 
const filters = {
  Colors: ['Blue', 'Red'],
  Sizes: ['Small', 'Medium']
};
 
const parameters = {
  Param1: 'Value',
  Param2: 'Other Value'
};
 
const Tableau = props => (
  <TableauReport
    url="https://public.tableau.com/app/profile/abhirup.ghosh2197/viz/Viz_16350377025170/Dashboard1"
    filters={filters}
    parameters={parameters}
    options={options} // vizCreate options
    // Overwrite default query params
    // defaults to '?:embed=yes&:comments=no&:toolbar=yes&:refresh=yes'
    query="?:embed=yes&:comments=no&:toolbar=yes&:refresh=yes"
  />
)

 export default Tableau;