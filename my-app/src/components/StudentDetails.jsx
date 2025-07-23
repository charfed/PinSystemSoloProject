import React,{useState} from "react"

const StudentDetails = ({ student ,removeStudent={removeStudent} }) => {


 
  return (

    <div className="student-list-item" >
      <div className="card-buttons">
        <input className="btn btn-danger" type="button" value="Remove" onClick={(e)=>{removeStudent(student.id)}}/>
      </div>
      
<div className="pin-buttons">
  <button className="pin-btn green"  /*onClick={(e)=>addGreen()}*/   style={{ background: 'transparent', border: 'none', padding: 0 }}>
    <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" fill="green" />
    </svg>
  </button>
  <button className="pin-btn blue"  /*onClick={(e)=>addBlue()}*/    style={{ background: 'transparent', border: 'none', padding: 0 }}>
    <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" fill="blue" />
    </svg>
  </button>
  <button className="pin-btn red"    /*onClick={(e)=>addRed()}*/   style={{ background: 'transparent', border: 'none', padding: 0 }}>
    <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" fill="red" />
    </svg>
  </button>
</div>
      <div className="student-list-item-lede">
        <div className="student-list-item-title">name : {student.name}</div>
        <img src={student.picture} alt="Student" className="student-image" />
        <div className="student-list-item-lede">type :{student.type}</div>
        <div className="student-list-item-lede">behavior: {student.behavior}</div>
      </div>
      <div className="pin-buttons">
      
      </div>
    </div>

  )
}

export default StudentDetails