import React from 'react'
import {useState} from "react";

function Register (props) {
    const [email,setEmail] =useState('');
    const [pass,setPass] =useState('');
    const [name,setName]  = useState();
    const [employeesData, setEmployeesData] = useState ({
     
})
      const handleChange = (event) => {
        const updatedUserData = {
          ...employeesData, [event.target.name]: event.target.value,
        };
        setEmployeesData(updatedUserData);
      }
      function handleSubmit (event) {
        event.preventDefault();
        fetch("https://lit-dusk-21328.herokuapp.com/api/employees/allemployees", {
          method: JSON.stringify(employeesData),
          headers: {
            "Content-Type": "application/json",
          },
        });
      }
    
    return (
        <div style={authformcontainer}>
            <h2>Register</h2>
        <form style={loginform} onSubmit={handleSubmit} >
            <label htmlFor='name'>Full name</label>
            <input value={name}onChange={(e)=>setName(e.target.value)} type='name' id='name'placeholder='full name' />
            <label htmlfor='email'>email</label>
            <input value={email}onChange={(e)=>setEmail(e.target.value)} type='email'placeholder='youremail@gmail.com'name='email'/>
            <label htmlfor='password'>password</label>
            <input value={pass}onChange={(e)=>setPass(e.target.value)} type='password'placeholder='*******' id='name'name='password'/>
            <button type='submit' >Log In</button>
            </form>
            <button className='link-btn' onClick={()=> props.onFormSwitch ('login')}>  Login here.</button>
            </div>
    //   <div>
      
      
    //   <input  type ="text" name = "name" placeholder= "Your Name" onChange = {handleChange} />
      
    //   <input   type ="text" name = "occupation" placeholder= "Occupation" onChange = {handleChange} />
      
    //   <input   type ="number" name = "mobileNumber" placeholder= "Mobile No." onChange = {handleChange} />
       
    //   <input   type ="email" name = "emailAddress" placeholder= "Email Address" onChange = {handleChange} />
     
      
    //   <input   type ="password" name = "password" placeholder= "strong password" onChange = {handleChange} />
    //   <input   type ="text" name = "username" placeholder= "user name" onChange = {handleChange} />
    //   <button   style= {{ backgroundColor: 'blue', color: 'white'}}>Create Account</button>
    //   <div style ={styledaccount}>Create your Account</div>
    //   <form style ={{backgroundColor: "brown"}}CreateAccount={handleSubmit}>
    //   </form>
    //   </div>
    )
  };

const authformcontainer={
    textAlign: 'center',
   display: 'flex',
    border: " green solid 2px ",
    borderRadius: "3px",
     padding: "10px",
     //minHeight: '100vh',
     alignItems: 'center',
     //justifyContent: 'center',
    flexDirection: 'column',
}

const loginform={
    
        textAlign: 'center',
        display: 'flex',
        //alignItems: 'center',
        justifyContent: 'center',
       flexDirection: 'column',
    }

 
//   const styledaccount={
//     textAlign: "center",
//      fontWeight: "bold",
//   }

export default Register
