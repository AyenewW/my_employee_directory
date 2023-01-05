
const SearchBar = (props) => {
return ( 
<div>
<input style={styledsearchBar} type="text" placeholder="Search" />

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


