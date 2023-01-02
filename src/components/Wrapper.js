const Wrapper = (props) => {
    return <div style={styledWrapper}>{props.children}</div>
     
    };
    const styledWrapper ={
       // border: "5px solid #FFEB3B",
        maxWidth:"800px",
        margin:"40px auto",
        backgroundColor: "#9E9E9E",
        display:"flex",
        gap: "10px",
        padding:"15px",
        
   borderRadius:"15px",
        
    };
    export default Wrapper;