import React from "react";
function Text(props) {
    var style = {
      paddingTop: 5,
      margin: 5
    };
    return (
      <div>
        <div style={style}> {props.label} </div>
        <input
          type="text"
          name={props.name}
          style={style}
          value={props.labelInputText}
          onChange={props.changeHandler}
        />
      </div>
    );
  }
  function TableFormList(props) {
    
    return(
      <table>
      <tr>
     {props.headers.map((item,index) => <th key={index}>{item}</th>)}
      </tr>
      <tbody>
      
       {props.formElements.map((item,index) => <tr key={index}><td>{item.fName}</td><td>{item.lName}</td></tr> )}
      </tbody>
  </table>
      )
      }

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
  
      var elements = this.state.items.slice();
      elements.push({fName: firstName, lName: lastName});
      this.setState({ items: elements, firstName: "", lastName: "" });
    }
  
    render() {
      var style = {
        padding: 5,
        margin: 5
      };
      return (
        <div>
          <Text
            label="First Name"
            name="firstName"
            labelInputText={this.state.firstName}
            changeHandler={this.changeHandler}
          />
  
          <Text
            label="Last Name"
            name="lastName"
            labelInputText={this.state.lastName}
            changeHandler={this.changeHandler}
          />
  
     <input
            type="submit"
            value="submit"
            style={style}
            onClick={() => this.AddElementsOnSubmit()}
          />
       
          <div>
            <TableFormList
              headers={["First Name", "Last Name"]}
              formElements={this.state.items}
            />
            
  
          </div>
          
        </div>
      );
    }

  }

  export default CV;