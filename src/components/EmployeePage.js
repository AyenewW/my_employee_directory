import EmployeeDetail from "./EmployeeDetail";
import Header from "./Header";
const EmployeePage =(props)=>{
//const EmployeePage = ({Employee}) => {
return ( 
<div style={styledEmployeePage}>
<Header title="Employee" />
<EmployeeDetail
 Employee={props.Employee} EmployeeDetail={props.EmployeeDetail}/>
</div>
);

};
const styledEmployeePage ={
//border: "5px solid #8BC34A",
padding:"5px",
   borderRadius:"5px",
width:"50%",
backgroundColor:"#B2EBF2",
 fontFamily:"strong",
}
export default EmployeePage;