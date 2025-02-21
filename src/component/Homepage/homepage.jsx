import React, {useContext} from "react";
import DoctorList from "../DoctorList/DoctorList";
import Duration from "../Duration/Duration";
import AppointmentType from "../AppointmentType/AppointmentType";
import { DataContext } from "../Context/context";
import axios from "axios";
import { apiUrl } from "../Context/context";

function Homepage() {
  const dataContext = useContext(DataContext);
  // console.log(dataContext.date)
  
  const handleClick = async () => {
    const requestBody = {
      doctorId: dataContext.selectedDoc,
      patientName: dataContext.patientName,
      date: dataContext.date,
      duration: dataContext.duration,
      appointmentType: dataContext.type
    };


    try{
      const response = await axios.post(`${apiUrl}/appointment`, requestBody, {
        headers: {
          "Content-Type": "application/json",
        }}
      )
      console.log(response);
    }catch(error){
      console.log(error)
    }
  }

  return (
    <div>
      <div>
        <div>
          patient name: <input type="text" placeholder="Patient Name" value={dataContext.patientName} onChange={(e)=>dataContext.setPatientName(e.target.value)}/>
        </div>
      </div>
      <div>
        <DoctorList />
      </div>
      <div>
        <div>date: </div>
        <input type="date" id="birthday" name="birthday" value={dataContext.date} onChange={(e)=>dataContext.setDate(e.target.value)} />
      </div>
      <div>
        <Duration />
      </div>
      <div>
        <AppointmentType />
      </div>
      <div>
        <button onClick={()=> handleClick()}> Submit </button>
      </div>
    </div>
  );
}

export default Homepage;
