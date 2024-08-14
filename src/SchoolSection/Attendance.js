import React, { useState} from "react";

import { CheckCalendar } from "react-check-calendar";
import "react-check-calendar/dist/index.css";
import moment from "moment";


const Attendance = () => {

  const [selected, setSelected] = useState([]);
  
  // Generate the start and end date for the current month
  const startDate = moment().startOf("month").toDate();
  const endDate = moment().endOf("month").toDate();


  const handleChange = ({ moments }) => {
    console.log("moments", moments);
    
    setSelected(moments);
  };
   
  const hideDays = [];

 
 
  const students = ["Alice", "Bob", "Charlie", "David"];

  // Generate checkboxes array for each day per student


 

 

  return (
    <div>
      <CheckCalendar
        min={startDate}
        max={endDate}
        checkedDates={selected}
        onChange={handleChange}
        hideDays={hideDays}
        
      />
    </div>
  );
};

export default Attendance;
