
//import { useState } from "react"
const SearchBar = () => {
//const[employeeName, setEmployeeName] = useState('');

// function handleEmployeeName (e){
//     console.log('event',e.target.value)
//     setEmployeeName(e.target.value)
// }

return ( 
<div>
<input style={styledsearchBar} type="text" placeholder="Search"  />
{/* //<p>The employee name is {employeeName}</p>onChange={handleEmployeeName} */}
</div>
)

}

const styledsearchBar ={
cursor: 'pointer',
width: '97%',
borderRadius: '5px',
border: '1px solid #333',
textAlign: 'center',
padding: '7px 0px',
margin: '2px 5px',

}
export default SearchBar;




