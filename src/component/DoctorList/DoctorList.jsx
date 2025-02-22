import React, { useContext, useState } from "react";
import { DataContext } from "../Context/context";

function DoctorList() {
  const dataContext = useContext(DataContext);

  const [chosenDoc, setChosenDoc] = useState("");

  const handleChange = (event) => {
    const doc = event.target.value;
    setChosenDoc(doc); 

    if (dataContext.setSelectedDoc) {
      dataContext.setSelectedDoc(doc);
    }
  };

  return (
    <div>
        <label>Select your Doctor:</label>
        <select name="doctors" id="doctor" value={chosenDoc} onChange={handleChange}>
          <option value="" disabled>Select a doctor</option>
          {dataContext.doctorList &&
            dataContext.doctorList.map((item, ind) => (
              <option value={item[1]} key={ind}>
                {item[0]}
              </option>
            ))}
        </select>
    </div>
  );
}

export default DoctorList;
