import React, {useContext} from "react";
import { DataContext } from "../Context/context";

function DoctorList() {
  const dataContext = useContext(DataContext); 
  console.log(dataContext)
  return (
    <div>
      <label>Select your Doctor:</label>

      <select name="doctors" id="doctor">
        <option value="Doc1">Doc1</option>
        <option value="Doc1">Doc1</option>
        <option value="Doc1">Doc1</option>
      </select>
    </div>
  );
}

export default DoctorList;
