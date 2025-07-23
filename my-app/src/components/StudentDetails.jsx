import React,{useState} from "react"
import PinSys from "./PinSys"

const StudentDetails = ({ student ,removeStudent,getPins }) => {

  return (

    <div className="student-list-item" >
      <div className="card-buttons">
        <input className="btn btn-warning" type="button" value="Edit"/>
      </div>
      
      
        <PinSys getPins={getPins} removeStudent={removeStudent} student = {student}/>
      <div className="student-list-item-lede">
        <div className="student-list-item-title">{student.name}</div>
        <img src={student.picture} alt="Student" className="student-image" />
        <div className="student-list-item-lede">type :{student.type}</div>
        <div className="student-list-item-lede">behavior: {student.behavior}</div>
      </div>
    </div>

  )
}

export default StudentDetails