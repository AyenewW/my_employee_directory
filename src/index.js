import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import Employee from './pages/Employee';
// import AddEmployee from './pages/AddEmployee';
// import Home from './pages/Home';
//import ErrorPage from "./error-page";
import reportWebVitals from './reportWebVitals';
// import {
//   createBrowserRouter,
//   RouterProvider,
  
// } from "react-router-dom";
// const router = createBrowserRouter([
  // {
  //   path: "/",
  //   element: <Root />,
  //   errorElement: <ErrorPage />,
  // },

//   {
//     path: "/",
//     element: <App/>
//   },
//   {
//     path: "Home",
//     element: <Employee  />
//   },
//   {
//     path: "AddEmployee",
//     element: <AddEmployee/>
//   },
//   {
//     path: "employee",
//     element: <Home/>
//   },
// ]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App/>
    {/* <RouterProvider router={router} /> */}
  </React.StrictMode>
);
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <RouterProvider router={router} />

 
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
