import React, { useState } from "react";
import data from '../server/dummy.json';

function Text(props) {
    const [selectedFile, setSelectedFile] = useState();
	//const [isFilePicked, setIsFilePicked] = useState(false);

    var style = {
      paddingTop: 5,
      margin: 5,
      borderRadius: 5
    };

    


    const changeHandler = (event) => {
		setSelectedFile(event.target.files[0]);
	};

    const handleSubmission = () => {
        // const formData = new FormData();

        // formData.append('File', selectedFile);

        // fetch(
        //     'https://freeimage.host/api/1/upload?key=<YOUR_API_KEY>',
        //     {
        //         method: 'POST',
        //         body: formData,
        //     }
        // )
        //     .then((response) => response.json())
        //     .then((result) => {
        //         console.log('Success:', result);
        //     })
        //     .catch((error) => {
        //         console.error('Error:', error);
        //     });
        uploadFile(selectedFile)
    };

    return(
        <div>
            <input type="file" name="file" onChange={changeHandler} />
            <div>
                <button onClick={handleSubmission}>Submit</button>
            </div>
        </div>
    )
  }

  function uploadFile(selectedFile)
  {
    const formData = new FormData();
    formData.append('File', selectedFile);

//    var oOutput = document.getElementById("static_file_response")
   var oReq = new XMLHttpRequest();
       oReq.open("POST", "upload_static_file", true);
   oReq.onload = function(oEvent) {
       if (oReq.status == 200) {
        //  oOutput.innerHTML = "Uploaded!";
         console.log(oReq.response)
         console.log(oReq.status);
         console.log("here")
       } else {
        //  oOutput.innerHTML = "Error occurred when trying to upload your file.<br \/>";
       }
       };
//    oOutput.innerHTML = "Sending file!";
   console.log("Sending file!")
   oReq.send(formData);
  }



//   function TableFormList(props) {
    
//     return(
//       <table>
//       <tr>
//      {props.headers.map((item,index) => <th key={index}>{item}</th>)}
//       </tr>
//       <tbody>
      
//        {props.formElements.map((item,index) => <tr key={index}><td>{item.fName}</td><td>{item.lName}</td></tr> )}
//       </tbody>
//   </table>
//       )
//       }

  class CV extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        firstName: "",
        lastName: "",
        items: []
      };
      this.changeHandler = this.changeHandler.bind(this);
      this.AddElementsOnSubmit = this.AddElementsOnSubmit.bind(this);
    }

    changeHandler(event) {
      this.setState({ [event.target.name]: event.target.value });
    }
  
    AddElementsOnSubmit() {
      var firstName = this.state.firstName;
      var lastName = this.state.lastName;
      var obj = {"firstName": firstName,"lastName": lastName}

      //const fs = require('fs');
    //   var jsonse = JSON.stringify(obj);
    //   var blob = new Blob([jsonse], {type: "text/plain"});
    //   var url = URL.createObjectURL(blob);
    //   var a = document.createElement('a');
    //   a.href = url;
    //   a.download = "../server/dummy.json";

    //   dataObj.push(obj);
    //   data = JSON.stringify(dataObj);
    //   writeJsonFile('dummy.json', data);

    //   var elements = this.state.items.slice();
    //   elements.push({fName: firstName, lName: lastName});
    //   this.setState({ items: elements, firstName: "", lastName: "" });
    }
  
    render() {
      var style = {
        padding: 5,
        margin: 5
      };
      return (
        <div>
          <Text
            label="Upload File"
            name="firstName"
            labelInputText={this.state.firstName}
            changeHandler={this.changeHandler}
          />
  
  
    
       
          {/* <div>
            <TableFormList
              headers={["First Name", "Last Name"]}
              formElements={this.state.items}
            />
            
  
          </div> */}
          
        </div>
      );
    }

  }

  export default CV;