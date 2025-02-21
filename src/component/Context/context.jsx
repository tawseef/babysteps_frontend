import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const DataContext = createContext(null);
export const apiUrl = "https://babysteps-backend-dq72.onrender.com/v1"

export const DataProvider = (props) => {
    const [doctorList, setDoctorList] = useState([]);
    const [patientName, setPatientName] = useState();
    const [date, setDate] = useState();
    const [duration, setDuration] = useState();
    const [type, setType] = useState("New Appointment");
    const [selectedDoc, setSelectedDoc] = useState();

    const doctorAPI = async () =>{
      const getList = await axios.get(`${apiUrl}/doctors`);
      if(getList.status===200){
        const map = getList.data.map(s=>[s.name,s._id])
        setDoctorList(map)
      }}
    

    useEffect(()=> {
      doctorAPI()
    },[])

    return (
        <DataContext.Provider value={{ doctorList, setDoctorList, patientName, setPatientName, date, setDate, duration, setDuration, type, setType, selectedDoc, setSelectedDoc }}>
          {props.children}
        </DataContext.Provider>
      );

}