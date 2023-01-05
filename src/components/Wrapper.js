const Wrapper = (props) => {
return <div style={styledWrapper}>{props.children}</div>
};
const styledWrapper ={
maxWidth: '1000px',
margin: '0 auto',
backgroundColor: '#C6FF00',
display: 'flex',
gap: '10px',
paddingTop: '20px',
};
export default Wrapper;