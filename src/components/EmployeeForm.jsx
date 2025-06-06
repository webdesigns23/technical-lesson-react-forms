import React, { useState } from "react";

function EmployeeForm({employees, setEmployees}) {
  //initialize states for all input fields
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");

  //function to handle for submission - :
  function handleSubmit(e){
    //to prevent page refresh when form is submitteda:
    e.preventDefault()

    //function is validating user has the correct pw and if so, then add user to data
    if(password == "admin"){
      const newUser = {
        firstName: firstName,
        lastName: lastName,
        role: role
      }
      //Change console.log to update Higer Level State (using spread ... to add newUser)
      //console.log("Adding New User: ", newUser)
      setEmployees([...employees, newUser])
    }
    else{
      console.log("Not valid password") 
    }
  }

  //add onSubmit to <form> not <button>
  return (
     <form className="NewItem" onSubmit={handleSubmit}>
     <input type="text" name="firstName" placeholder="First Name" 
        onChange = {(e)=>setFirstName(e.target.value)} />
     <input type="text" name="lastName" placeholder="Last Name" 
        onChange = {(e)=>setLastName(e.target.value)} />
     <input type="text" name="role" placeholder="Role Name" 
        onChange = {(e)=>setRole(e.target.value)} />
     <input type="text" name="password" placeholder="Password" 
        onChange = {(e)=>setPassword(e.target.value)} />
     <button type="submit">Add Employee</button>
    </form>
  );
}
export default EmployeeForm;