
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Header =(props)=> {
return (
<div style={styledHeader}>
< FontAwesomeIcon icon={props.icon} color='#03A9F4'/>
{props.title}
</div>
)

};

const styledHeader={

backgroundColor: '#fff', 
padding: '7px 1px',
margin: '2px 2px',
textAlign: 'center',
cursor: 'pointer',
}

export default Header;