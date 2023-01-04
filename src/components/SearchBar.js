import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
          const SearchBar = (props) => {
          return ( 
          <div>
          <input style={styledsearchBar} type="text" placeholder="Search" />
          < FontAwesomeIcon icon={props.icon}/>
          </div>

          )

          }

          const styledsearchBar ={
          width:"95%",
          border:" 1px solid #FAFAFA ",
          borderRadius:"50px",
          padding: "7px 0px",
          margin: "2px 5px",
          textAlign:"center",
          cursor: 'pointer',
          

          }
          export default SearchBar;


