import React from "react";
const EmployeeDetail = ({employeeDetail}) => {
return(
<div style={styledEmployeeDetailpage}>
<div style={styledEmployeeDetailItem}>
<img 
style={styledImage} 
src={employeeDetail.image} 
alt={employeeDetail.image} 
/>

<div>

<h4 style={{margin:"0"}}>{employeeDetail.name}</h4>
<p style={{margin:0}}>{employeeDetail.occupation}</p>
</div>
</div>
<div>

<ul style={styledUI}>
<li>
<h3>Call Office</h3>
<p>{employeeDetail.callOffice} </p>
</li>
</ul>

<ul style={styledUI}>
<li>
<h3>Call Mobile</h3>
<p>{employeeDetail.callMobile}</p>
</li>
</ul>

<ul style={styledUI}>
<li>
<h3>SMS</h3>
<p>{employeeDetail.sms}</p>
</li>
</ul>

<ul style={styledUI}>
<li>
<h3>Email</h3>
<p>{employeeDetail.email}</p>
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

};

const styledEmployeeDetailItem={
display: 'flex',
gap: '15px',
margin: '5px',
borderBottom: '2px solid #F4F4F4',
padding: '10px 0',
alignItems: 'center',
};

const styledEmployeeDetailpage = {
display: 'flex',
flexDirection: 'column',
gap: '10px',
border: '2px solid #F4F4F4',
marginRight: '10px',
}
const styledUI = {


borderBottom: '2px solid #F4F4F4',
padding: '5px',
listStyle: 'none',
}
export default EmployeeDetail;