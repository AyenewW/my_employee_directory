import EmployeeDetail from "./EmployeeDetail";
import Header from "./Header";
import {faAngleLeft  } from '@fortawesome/free-solid-svg-icons'

const EmployeePage =(props)=>{
return ( 
<div style={styledEmployeePage}>
<Header title="Employee" icon={faAngleLeft}/>
<EmployeeDetail
Employee={props.Employee}
EmployeeDetail={props.EmployeeDetail}/>
</div>
);

};
const styledEmployeePage ={
width:"50%", 
fontFamily:"strong",
cursor: 'pointer',

}
export default EmployeePage;