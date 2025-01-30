import React, { useState } from "react";
import Employee from "./Employee";

function EmployeeList({ employees }) {

  return (
    <div>
      <h3>All Employees</h3>
      <table>
        <tr>
            <th>First name</th>
            <th>Last name</th>
            <th>Role</th>
        </tr>
        {employees.map((employee) => (
            <Employee firstName={employee.firstName} lastName={employee.lastName} role={employee.role}/>
        ))}
      </table>
    </div>
  );
}

export default EmployeeList;
