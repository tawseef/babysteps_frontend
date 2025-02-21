import React from "react";

function Duration() {
  return (
    <div>
      <label>Select your Duration:</label>

      <select name="duration">
        <option value="30min">30 min</option>
        <option value="60min">60 min</option>
        <option value="90min">90 min</option>
      </select>
    </div>
  );
}

export default Duration;
