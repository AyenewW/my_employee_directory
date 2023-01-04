            const EmployeeListItem = ({image,name,title,onClick}) => {
            return(
            <div style={styledEmployeeListItem} onClick={onClick} >
            <img  style={styledImage} src={image} alt={image} />
            <div>
            <h3 style={{margin:"0"}}>{name}</h3>
            <p style={{margin :'0'}}>{title}</p>
            </div>
            </div>
            )
            };

            const styledImage ={
            width: "60px",
            height:"60px",
            borderRadius:"50%",
            //backgroundColor: "red",


            };

            const styledEmployeeListItem={
            cursor: 'pointer',
            boxShadow:"0px 15px 4px rgba(0,0,0,0.25)",
            width:'94%',
            padding: '5px',
            margin: '10px',
            marginBottom: '30px',
            backgroundColor: '#D5D5CF',
            borderRadius:"10px",
            //border:'10px solid red',
            }

            export default EmployeeListItem;