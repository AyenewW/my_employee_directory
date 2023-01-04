
            import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'         
            const Header =(props)=> {
            return <div style={styledHeader}>
            < FontAwesomeIcon icon={props.icon}/>
              {props.title} </div>;
            };
            const styledHeader={
            display:'flex',
            textAlign:"center",
            backgroundColor:"#FAFAFA",
            width:"95%",
            padding:"7px 1px",
            margin:"3px 3px",
            borderRadius:"5px",
            justifyContent:'space-around',
            cursor: 'pointer',
            }

            export default Header;