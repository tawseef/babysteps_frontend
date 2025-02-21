import React, { useState, useContext } from "react";
import { DataContext } from "../Context/context";

function Duration() {
  const dataContext = useContext(DataContext);

  const [selectedDuration, setSelectedDuration] = useState("30 min");

  const handleChange = (event) => {
    const newDuration = event.target.value;
    setSelectedDuration(newDuration);

    if (dataContext.setDuration) {
      dataContext.setDuration(newDuration);
    }
  };

  return (
    <div>
      <label>Select your Duration:</label>
      <select name="duration" value={selectedDuration} onChange={handleChange}>
        <option value="30" selected>30 min</option>
        <option value="60">60 min</option>
        <option value="90">90 min</option>
      </select>
    </div>
  );
}

export default Duration;
