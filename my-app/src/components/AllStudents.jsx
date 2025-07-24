import React from "react"
import StudentDetails from "./StudentDetails.jsx"

const AllStudents = ({ students ,removeStudent ,getPins,updateSt}) => {
  return (
    <div className="student-grid">
      {students.length>0 ? 
      (students.map((student) => (
       <StudentDetails key={student.id} updateSt ={updateSt(student)} getPins ={getPins} student={student} removeStudent={removeStudent} />
        ))) : (<div>?</div>)}</div>)}

export default AllStudents