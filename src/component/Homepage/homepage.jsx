import React from 'react'
import DoctorList from '../DoctorList/DoctorList'
import Duration from '../Duration/Duration'
import AppointmentType from '../AppointmentType/AppointmentType'

function Homepage() {
  return (
    <div>
    <div>
    <div>patient name: <input type='text'/></div></div>
    <div><DoctorList/></div>
    <div>

    <div>date: </div>
      <input type="date" id="birthday" name="birthday"></input>
    </div>
    <div><Duration /></div>
    <div><AppointmentType /></div>
    <div>
      <button> Submit </button>
    </div>
    </div>
  )
}

export default Homepage