import React, { useState } from "react";

function Employee({firstName,lastName,role}) {

  return (
    <tr>
        <td>{firstName}</td>
        <td>{lastName}</td>
        <td>{role}</td>
    </tr>
  );
}

export default Employee;
