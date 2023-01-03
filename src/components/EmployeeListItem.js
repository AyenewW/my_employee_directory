            const EmployeeListItem = ({image,name,title,onClick}) => {
            return(
            <div style={styledEmployeeListItem} onClick={onClick} >
            <img  style={styledImage} src={image} alt={image} />
            <div style={StyledContent}>
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
            width:'92%',
            padding: '5px',
            margin: '10px',
            marginBottom: '30px',
            marginRight: '25px',
            backgroundColor: '#D5D5CF',

            borderRadius:"10px",
            };

            const StyledContent ={

            }

            export default EmployeeListItem;