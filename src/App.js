import './App.css';
import { useEffect, useState } from 'react';
import Form from './components/Form';
import Home from './components/Home';
import Employees from './components/Employees';
import NavBar from './components/NavBar';
import { BrowserRouter,Routes, Route} from "react-router-dom";


function App() {
  const [employees, setEmployees] = useState([0]);

  useEffect(() => {
    fetch("https://lit-dusk-21328.herokuapp.com/api/employees/allemployees")
      .then((res) => res.json())
      .then((data) => {
        setEmployees(data);
      });
  }, []);
  console.log('employees', employees)

  const [employeeDetail, setEmployeeDetail] = useState(
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
    <BrowserRouter>
      <NavBar />
      <div className="App">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/add-Emoloyees' element={<Form />} />
          <Route
            path='/emplyees-list'
            element={
              <Employees
                setEmployeeDetail={setEmployeeDetail}
                employeeDetail={employeeDetail}
                employees={employees} />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;


