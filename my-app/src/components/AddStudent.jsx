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
      
        <input
        type="text"
        name="picture"
        placeholder="image URL"
        value={picture}
        onChange={(e) => setPicture(e.target.value)} 
        className="input-field"
      />

      <button type="submit" className="btn btn-success">
        Add Student
      </button>
    </form>
  )
}

export default AddStudent