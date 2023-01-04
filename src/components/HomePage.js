            import Header from "./Header";
            import EmployeeList from "./EmployeeList";
            import SearchBar from "./SearchBar";
            const HomePage = ({Employee,setEmployeeDetail}) => {
            return ( 
            <div style={styledHomePage}>
            <Header title="Employee Directory"/>
            <SearchBar  />
            <EmployeeList Employee={Employee} setEmployeeDetail={setEmployeeDetail}/>
            </div> 

            );

            };
            const styledHomePage ={

            padding:"5px",
            borderRadius:"5px",
            width:"50%",
            backgroundColor:"#E8F8F5",
            fontFamily:"strong",

            }

            export default HomePage;