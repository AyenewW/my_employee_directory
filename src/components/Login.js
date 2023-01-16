import React from 'react'
import { useState } from 'react'

function Login(props) {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [employeesData, setEmployeesData] = useState({
        username: "",
        password: "",
    })
    const handleChange = (event) => {
        const updatedUserData = {
            ...employeesData, [event.target.name]: event.target.value,
        };
        setEmployeesData(updatedUserData);
    }

    const handleSubmit = (event) => {
        event.preventDefault()
    }
    return (
        <div style={authformcontainer}>
            <h2>Login</h2>
            <form style={loginform} onSubmit={handleSubmit} >
                <label htmlFor='email'>Email onChange={handleChange}</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type='email' placeholder='Youremail' name='email' />
                <label htmlFor='password'>Password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type='password' placeholder='' id='name' name='password' />
                <button type='submit' >Log In</button>
            </form>
            <button className='link-btn'  onClick={()=> props.onFormSwitch ('register')} >  Register here.</button>
        </div>
        // <div>
        //     <h3> Welcome to the Login Page</h3>
        //     <fieldset style={stylefildset}>
        //         <form onCreateAccount={handleSubmit} >
        //             <div style={styledusername}> User Name <input type='userName' onChange={handleChange} />
        //             </div>
        //          <div style={styledpassword}> Password <input type="password" onChange={handleChange} />
        //             </div>
        //             <button style={styledlogin}> Login</button>
        //         </form>
        //     </fieldset>
        // </div>


    )
}
 
const authformcontainer = {
   textAlign: 'center',
   display: 'flex',
    border: " green solid 2px ",
    borderRadius: "3px",
     padding: "5px",
    //  minHeight: '100vh',
     //alignItems: 'center',
     //justifyContent: 'center',
    flexDirection: 'column',
     
}
 

const loginform = {
    textAlign: 'center',
    display: 'flex',
   // alignItems: 'center',
    justifyContent: 'center',
   flexDirection: 'column',
   padding:'10px',
}
// const stylefildset = {
//     border: "solid blue 1px",
//     textAlign: "center"
// }
// const styledusername = {
//     margin: "5px",
//     border: " green solid 2px ",
//     borderRadius: "3px",
//     padding: "5px",
//     margin: "10px"
// }
// const styledpassword = {
//     margin: "5px 15px",
//     border: "2px solid",
//     borderRadius: "3px",
//     padding: "5px",
//     margin: "10px"
// }
// const styledlogin = {
//     color: "white",
//     backgroundColor: "blue",
//     padding: "5px 10px"
// }

export default Login
