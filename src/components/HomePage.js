import Header from "./Header";
import EmployeeList from "./EmployeeList";
import SearchBar from "./SearchBar";
const HomePage = ({Employee,setEmployeeDetail}) => {
return ( 
<div style={styledHomePage}>
<div style={styedHeaderLeft}>
<Header title="Employee Directory" />
</div>
<SearchBar />
<EmployeeList
Employee={Employee} 
setEmployeeDetail={setEmployeeDetail}/>
</div> 

);
};

const styledHomePage ={
width:"50%", 
fontFamily:"strong",
}


const styedHeaderLeft={
width:'100%',

}
export default HomePage;