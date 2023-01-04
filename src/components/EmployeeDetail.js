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
              <p>{EmployeeDetail.calloffice}{} </p>
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
              //backgroundColor: "aqua",
              };
              const styledEmployeeListItem={
              padding:"5px",
              borderBottom: '2px solid white',
              //   display:"flex",
              //border: "10px solid black",
              //  gap:"10px",
              //   margin:"5px",
              // borderRadius:"5px",
              };
              const styledEmployeeListItempage = {
              border: "2px solid white",
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
              marginRight: '10px',
              padding:"5px",
              cursor: 'pointer',
              //borderRadius:"5px",
              }
              const styledUI = {
              borderBottom: '2px solid white',
              padding: '3px',
              listStyle: 'none',
              borderRadius:"5px",
              }
              export default EmployeeDetail;