import React, { useState, useContext } from "react";
import { DataContext } from "../Context/context";

function AppointmentType() {
  const dataContext = useContext(DataContext);

  const [appType, setAppType] = useState("New Appointment");

  const handleChange = (event) => {
    const newType = event.target.value;
    setAppType(newType);

    if (dataContext?.setAppType) {
      dataContext.setType(newType);
    }
  };

  return (
    <div>
      <label>Select your Appointment Type:</label>
      <select name="appointmentType" value={appType} onChange={handleChange}>
        <option value="New Appointment">New Appointment</option>
        <option value="Followup">Followup Appointment</option>
      </select>
    </div>
  );
}

export default AppointmentType;
