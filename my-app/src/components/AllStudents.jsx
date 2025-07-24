import React from "react"
import StudentDetails from "./StudentDetails.jsx"

const AllStudents = ({ students ,removeStudent ,getPins,updateSt}) => {
  
  return (

    <div className="student-grid">
      {students.length>0 ? 
      (students.map((student) => (
       <StudentDetails key={student.id} updateSt ={updateSt} getPins ={getPins} student={student} removeStudent={removeStudent} />
        ))) : (<h1>404 page not found</h1>)}</div>)}


export default AllStudents