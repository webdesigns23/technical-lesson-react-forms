import React, { useState } from "react";
function EmployeeForm({}) {
  return (
    <form className="NewItem">
     <input type="text" name="firstName" placeholder="First Name" />
      <input type="text" name="lastName" placeholder="Last Name"/>
      <input type="text" name="role" placeholder="Role Name"/>
      <input type="text" name="password" placeholder="Password"/>
      <button type="submit">Add Employee</button>
    </form>
  );
}

export default EmployeeForm;