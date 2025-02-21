import { createContext, useState, useEffect } from "react";

export const DataContext = createContext(null);

export const DataProvider = (props) => {
    const [doctorList, setDoctorList] = useState([]);

    return (
        <DataContext.Provider value={{ doctorList, setDoctorList }}>
          {props.children}
        </DataContext.Provider>
      );

}