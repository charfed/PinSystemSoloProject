import React, { useState } from "react"

const AddStudent = ({addStudent}) => {
  const [name, setName] = useState("")
  const [picture,setPicture]=useState("")
  const [type ,setType] = useState("Student")
  const [sex ,setSex] = useState("")


  const handleSubmit = (e) => {
    e.preventDefault()
    addStudent({name,picture,type,sex})
  }


  return (
    <form onSubmit={handleSubmit} className="add-student-form">
      <input
        type="text"
        name="name"
        placeholder="set Name"
        value={name}
        onChange={(e)=>{setName(e.target.value)}}
        className="input-field"
      required/>
      
        <input
        type="text"
        name="picture"
        placeholder="set picture URL"
        value={picture}
        onChange={(e) => setPicture(e.target.value)} 
        className="input-field"
      />

      <select
        name="sex"
        value={sex}
        onChange={(e) => setSex(e.target.value)}
        className="input-field"
        required
      >
        <option value="" disabled>
          Select sex
        </option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>

      <button type="submit" className="btn btn-success">
        Add Student
      </button>
    </form>
  )
}

export default AddStudent