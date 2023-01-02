 import React from "react";
const EmployeeDetail = ({EmployeeDetail}) => {
      return(
      <div style={styledEmployeeListItempage}>
      <div style={styledEmployeeListItem}>
      <img 
       style={styledImage} 
       src={EmployeeDetail.image} 
       alt={EmployeeDetail.image} 
       />
       
      <div>
         
          <h4 style={{margin:"0"}}>{EmployeeDetail.name}</h4>
          <p style={{margin:0}}>{EmployeeDetail.title}</p>
           </div>
         </div>
      <div>
      
  <ul style={styledUI}>
    <li>
      <h3>Call Office</h3>
      <p>{EmployeeDetail.calloffice}</p>
    </li>
    </ul>

<ul style={styledUI}>
<li>
  <h3>Call Mobile</h3>
  <p>{EmployeeDetail.callmobile}</p>
</li>
</ul>

<ul style={styledUI}>
    <li>
      <h3>SMS</h3>
      <p>{EmployeeDetail.sms}</p>
    </li>
    </ul>

<ul style={styledUI}>
<li>
  <h3>Email</h3>
  <p>{EmployeeDetail.email}</p>
</li>
</ul>
<ul style={styledUI}>
<li>
  <h3>Facebook</h3>
  <p>{EmployeeDetail.facebook}</p>
</li>
</ul>
<ul style={styledUI}>
<li>
  <h3>IG</h3>
  <p>{EmployeeDetail.ig}</p>
</li>
</ul>

<ul style={styledUI}>
<li>
  <h3>City</h3>
  <p>{EmployeeDetail.city}</p>
</li>
</ul>




</div>
</div>
      )
}


  const styledImage ={
      width: "80px",
      height:"80px",
      borderRadius:"50%",
      backgroundColor: "aqua",
      
      
  };

  const styledEmployeeListItem={
     border: "1px solid white",
    padding:"5px",
   borderRadius:"5px",
    //   display:"flex",
      //  gap:"10px",
    //   margin:"5px",
    
  };

  const styledEmployeeListItempage = {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    marginRight: '10px',
  padding:"5px",
   borderRadius:"5px",
    //border: '2px solid #f4f4f4',
   
  }
  
  const styledUI = {
    
    borderBottom: '1px solid #f4f4f4',
  
    padding: '3px',
    listStyle: 'none',
  }

  export default EmployeeDetail;