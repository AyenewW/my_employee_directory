const EmployeeListItem = ({image,name,title,onClick}) => {
    //return Employee.map(({image,name,title,},index)=>{
        return(
        <div style={styledEmployeeListItem} onClick={onClick} >
        <img  style={styledImage} src={image} alt={image} />
        <div style={StyledContent}>
            <h3 style={{margin:"0"}}>{name}</h3>
            <p style={{margin :'0'}}>{title}</p>
        </div>
      </div>
    )
    
  //  });
};

    const styledImage ={
        width: "60px",
        height:"60px",
        borderRadius:"50%",
        backgroundColor: "aqua",
        
        
    };

    const styledEmployeeListItem={
        // border: "5px solid #00BCD4",
        // display:"flex",
        // gap:"10px",
        // margin:"5px",
         width:'92%',
           // border: '5px solid rgb(232, 14, 185)',
            padding: '5px',
            margin: '10px',
            marginBottom: '30px',
            marginRight: '25px',
           backgroundColor: 'rgb(251, 251, 220)',
           
   borderRadius:"10px",
    };

    const StyledContent ={
        // flex: 3,
    }

    export default EmployeeListItem;