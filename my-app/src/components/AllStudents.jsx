import React from "react"
import StudentDetails from "./StudentDetails.jsx"

const AllStudents = ({ students ,removeStudent ,updateSt, addPins}) => {
  
  return (

    <div className="student-grid">
      {students.length>0 ? 
      (students.map((student) => (
       <StudentDetails addPins={addPins} key={student.id} updateSt ={updateSt} student={student} removeStudent={removeStudent} />
        ))) : (<h1>Code 404 page not found ! 👌 </h1>)}</div>)}

export default AllStudents