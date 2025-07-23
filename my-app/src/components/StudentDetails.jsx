import PinSys from "./PinSys";

const StudentDetails = ({ student, removeStudent, getPins }) => {
  return (
    <div className="student-list-item">
      <div className="card-buttons">
        <input className="btn btn-warning" type="button" value="Edit" />
        <input onClick={() => removeStudent(student.id)}
         className="btn btn-danger" type="button" value="remove from class" />
        
      </div>

      <div className="pin-card">
        <div className="card-body">
          <img src={student.picture} alt="Student" className="student-image" />
          <h3 className="student-name">{student.name}</h3>
          <p className="student-type">Sex: {student.sex}</p>
          <p className="student-type">Type: {student.type}</p>
          <p className="student-behavior">Behavior: {student.behavior}</p>
        </div>

        <PinSys getPins={getPins} removeStudent={removeStudent} student={student} />
      </div>
    </div>
  )
}

export default StudentDetails;