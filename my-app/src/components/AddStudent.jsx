import React, { useState } from "react"

const AddStudent = ({addStudent}) => {
  const [name, setName] = useState("")
  const [picture,setPicture]=useState("")
  const [type ,setType] = useState("Student")

  const handleSubmit = (e) => {
    e.preventDefault()
    addStudent({name,picture,type})
  }


  return (
    <form onSubmit={handleSubmit} className="add-student-form">
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={name}
        onChange={(e)=>{setName(e.target.value)}}
        className="input-field"
      required/>
      
      <label className="file-label">
        {picture ? picture.name : "set up pic"}
        <input
          type="file"
          accept="image"
          onChange={(e) => setPicture(e.target.files[0])}
          className="file-input"
        />
      </label>

      <button type="submit" className="btn btn-success">
        Add Student
      </button>
    </form>
  )
}

export default AddStudent