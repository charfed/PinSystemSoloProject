import React from "react"
import StudentDetails from "./StudentDetails.jsx"

const AllStudents = ({ students ,removeStudent ,getPins}) => {
  return (
    <div className="student-grid">
      {students.length>0 ? 
      (students.map((student) => (
       <StudentDetails key={student.id} getPins ={getPins} student={student} removeStudent={removeStudent} />
        ))) : (<div>Loading...</div>)}</div>)}

export default AllStudents