import React from "react";
// TODO: import useFormik from formik library
import {useFormik} from 'formik';
import "./index.css"
function App() {
  // TODO: add a const called formik assigned to useFormik()
  var [values, setValues] = React.useState({emailField:'', pswField:''});
  var emailFormatRegExp = new RegExp(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/)
  var emailChange = (event) => {
    formik.values.emailField = event.target.value;
    let emailField = formik.values.emailField
    if(emailField.length==0) {
      document.getElementById("emailError").style.display = "block";
      document.getElementById("emailError").innerHTML = "Field required"
    }
    else if(emailField.match(emailFormatRegExp)==null) {
      document.getElementById("emailError").style.display = "block";
      document.getElementById("emailError").innerHTML = "Username should be an email"
    }
    else {
      document.getElementById("emailError").style.display = "none";
    }
    setValues(prevValues => ({...prevValues,[event.target.name]: event.target.value}));
    
  }


  var pswChange = (event) => {
    formik.values.pswField = event.target.value;
    let pswField = formik.values.pswField

    if(pswField.length==0) {
      document.getElementById("pswError").style.display = "block";
      document.getElementById("pswError").innerHTML = "Field required"
    }
    else {
      document.getElementById("pswError").style.display = "none";
    }
    setValues(prevValues => ({...prevValues,[event.target.name]: event.target.value}));
    
  }

  const formik = useFormik({
    initialValues: {
      emailField: '',
      pswField:''
    },
    
  
    onSubmit: values => {
      alert("Login Successful");
    }

  })
  return (
    <div>
      <form id="myForm" onSubmit={formik.handleSubmit} >
        <label id="emailLabel" htmlFor="emailField">Email Address</label>
        <input required id="emailField" name="emailField" type="text" onChange={e => emailChange(e)} value={values.emailField}></input>

        <label id="pswLabel" htmlFor="pswField">Password</label>
        <input required id="pswField" name="pswField" type="text" onChange={e => pswChange(e)} value={values.pswField}></input>

        <button type="submitBtn">Submit</button>
      </form>
      
      <div id="emailError">Field required</div>
      <div id="pswError">Field required</div>
    </div>
  );
}

export default App;
