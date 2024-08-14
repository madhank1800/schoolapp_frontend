  
// import React from 'react';
import { useEffect} from 'react';
import "react-toastify/dist/ReactToastify.css";

import {  toast } from "react-toastify";


  
const Toast = ({ message, type }) => {
  console.log("madhan");
  console.log("message", message);

  console.log("madhan1", type);

  
    useEffect(() => {
      
  console.log("madhan12", type);
        switch (type) {
          case "success":
            toast.success(message, {
              position: toast.POSITION,
              autoClose: 5000,
            });
            break;
          case "error":
            toast.error(message, {
              position: toast.POSITION,
              autoClose: 5000,
            });
            break;
          default:
            toast(message, {
              position: toast.POSITION,
              autoClose: 5000,
            });
        }
 // Hide the toast after showing it
      
    }, [message,type]);

    return null; // Return null because the toast is shown using toast.success or toast.error
  };

  
export default Toast;