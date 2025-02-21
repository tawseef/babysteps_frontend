import React from "react";

function AppointmentType() {
  return (
    <div>
      <label>Select your Appointment Type:</label>

      <select name="appointmentType">
        <option value="New">New Appointment</option>
        <option value="Followup">Followup Appointment</option>
      </select>
    </div>
  );
}

export default AppointmentType;
