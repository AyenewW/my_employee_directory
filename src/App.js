import './App.css';
import React from 'react';
import EmployeePage from './components/EmployeePage';
import HomePage from './components/HomePage';
import Wrapper from './components/Wrapper';
import { useEffect,useState } from 'react';
 import Form from './components/Forms';

function App() {
const [employees,setEmployees] = useState([]);

useEffect(()=>{
  fetch( "https://lit-dusk-21328.herokuapp.com/api/employees/allemployees")
    .then((res) => res.json())
    .then((data) => {
      if(data) setEmployees(data);
    });
  },[]);
  console.log('employees',employees)
  
  const [EmployeeDetail,setEmployeeDetail]=useState(
  {
    id: "639cedc754230731f04aa864",
    image: "https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "John Doe",
    occupation: "FE Developer",
    callOffice: "1234567",
    callMobile: "235690",
    sms: "222333444",
    email: "solo@test.com",
    },
 )
return ( 
<div className="App">
  <Form />
<Wrapper>
<HomePage setEmployeeDetail={setEmployeeDetail} employees={employees}/>
<EmployeePage EmployeeDetail={EmployeeDetail} employees={employees}/>
</Wrapper>
</div>
 ) 
}

export default App;


