# Technical Lesson: New Employee Form

## Overview
In this lesson, you will practice implementing controlled forms and other controlled components within React.

## Scenario
You are working with a startup that wants to create an interface allowing the HR department to add employees to a list, including their roles within the company. To ensure the correct credentials, users must input and validate a password.

## Tasks
### Task 1: Define the Problem
- Add a controlled search and a controlled form to the webpage.

### Task 2: Determine the Design
#### Component Tree
```
└── App
    ├── Header
    ├── EmployeeForm
    └── EmployeeList
        └── Employee
```
- The `employees` state is stored in `App`, as `EmployeeList` needs it for rendering and `EmployeeForm` updates it.

### Task 3: Develop the Code
#### Step 1: Setup
1. Fork and clone the repository.
2. Open the project in VSCode.
3. Run the following commands:
   ```sh
   npm install
   npm run dev
   ```

#### Step 2: Create states for form input fields
Modify `EmployeeForm.jsx`:
```jsx
import React, { useState } from "react";
function EmployeeForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");
  
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
```

#### Step 3: Handle form input changes
Modify `EmployeeForm.jsx`:
```jsx
import React, { useState } from "react";
function EmployeeForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");
  
  return (
    <form className="NewItem">
      <input type="text" name="firstName" placeholder="First Name" onChange={(e) => setFirstName(e.target.value)} />
      <input type="text" name="lastName" placeholder="Last Name" onChange={(e) => setLastName(e.target.value)} />
      <input type="text" name="role" placeholder="Role Name" onChange={(e) => setRole(e.target.value)} />
      <input type="text" name="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Add Employee</button>
    </form>
  );
}
export default EmployeeForm;
```

#### Step 4: Handle form submission
Modify `EmployeeForm.jsx`:
```jsx
import React, { useState } from "react";
function EmployeeForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");
  
  function handleSubmit(e) {
    e.preventDefault();
    if (password === "admin") {
      const newUser = { firstName, lastName, role };
      console.log("Adding New User:", newUser);
    } else {
      console.log("Not valid password");
    }
  }
  
  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <input type="text" name="firstName" placeholder="First Name" onChange={(e) => setFirstName(e.target.value)} />
      <input type="text" name="lastName" placeholder="Last Name" onChange={(e) => setLastName(e.target.value)} />
      <input type="text" name="role" placeholder="Role Name" onChange={(e) => setRole(e.target.value)} />
      <input type="text" name="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Add Employee</button>
    </form>
  );
}
export default EmployeeForm;
```

#### Step 5: Update higher-level state
Modify `EmployeeForm.jsx`:
```jsx
import React, { useState } from "react";
function EmployeeForm({ employees, setEmployees }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");
  
  function handleSubmit(e) {
    e.preventDefault();
    if (password === "admin") {
      const newUser = { firstName, lastName, role };
      setEmployees([...employees, newUser]);
    } else {
      console.log("Not valid password");
    }
  }
  
  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <input type="text" name="firstName" placeholder="First Name" onChange={(e) => setFirstName(e.target.value)} />
      <input type="text" name="lastName" placeholder="Last Name" onChange={(e) => setLastName(e.target.value)} />
      <input type="text" name="role" placeholder="Role Name" onChange={(e) => setRole(e.target.value)} />
      <input type="text" name="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Add Employee</button>
    </form>
  );
}
export default EmployeeForm;
```
Modify `App.jsx`:
```jsx
import { useState } from "react";
import "./App.css";
import EmployeeForm from "./components/EmployeeForm";
import employeeData from "./data/employees";
import Header from "./components/Header";
import EmployeeList from "./components/EmployeeList";

function App() {
  const [employees, setEmployees] = useState(employeeData);
  
  return (
    <div>
      <Header />
      <EmployeeForm employees={employees} setEmployees={setEmployees} />
      <EmployeeList employees={employees} />
    </div>
  );
}
export default App;
```

### Task 4: Test and Refine
- Debug and test during coding.

### Task 5: Document and Maintain
- Add descriptions to event functions to improve organization.

## Considerations
- Controlled forms can use individual states per input or a single object state.