const SearchBar = () => {
    return ( 
      <div>
      <input style={styledSearchBar} type="text" placeholder="Search" />
    </div>
     
     );
    
    };
      
    const styledSearchBar ={
      //border: "5px solid #8BC34A",
        width:"95%",
       border:" 1px solid #FAFAFA ",
        borderRadius:"5px",
        padding: "7px 0px",
        margin: "2px 2.5px",
        
        
    }
    export default SearchBar;
      
  
