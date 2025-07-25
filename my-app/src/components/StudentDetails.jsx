import PinSys from "./PinSys";

const StudentDetails = ({ student, removeStudent, updateSt ,addPins }) => {
  return (
    <div className="student-list-item">
      <div className="card-buttons">
        <input className="btn btn-warning" type="button" value="Edit" onClick={()=>{updateSt(student)}}/>
        <input onClick={() => removeStudent(student.id)}
         className="btn btn-danger" type="button" value="remove from class" />
        
      </div>

      <div className="pin-card">
        <div className="card-body">
          <img src={student.picture} alt="Student" className="student-image" />
          <h3 className="student-name">{student.name}</h3>
          <p className="student-type">genre: {student?.genre}</p>
          <p className="student-type">status: {student?.status}</p>
          <p className="student-type">behavior: {student?.behavior}</p>
        </div>

        <PinSys addPins={addPins} removeStudent={removeStudent} student={student} />
      </div>
    </div>
  )
}

export default StudentDetails;