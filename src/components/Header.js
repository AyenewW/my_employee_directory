const Header =(props)=> {
return <div style={styledHeader}> {props.title} </div>;
};
const styledHeader={
//border: "5px solid #795548",
textAlign:"center",
backgroundColor:"#fff",
width:"95%",
padding:"7px 1px",
margin:"3px 3px",
   borderRadius:"5px",
}

export default Header;