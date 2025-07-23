import React from "react"
import StudentDetails from "./StudentDetails.jsx"

const AllStudents = ({ students ,removeStudent}) => {
  return (
    <div className="student-grid">
      {students && students.map((student) => (
        <StudentDetails key={student.id} student={student} removeStudent={removeStudent} />
      ))}
    </div>
  )
}

export default AllStudents