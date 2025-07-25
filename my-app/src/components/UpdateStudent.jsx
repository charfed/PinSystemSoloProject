import React, { useState } from "react"

const UpdateStudent = ({student,modifyStudent,changeBack}) => {
  const [name, setName] = useState(student?.name || "")
  const [picture,setPicture]=useState(student?.picture || "")
  const [behavior,setBehavior] = useState("unkown")
  const [status ,setStatus] = useState("student")
  const [genre ,setGenre] = useState(student?.sex || "")


     
    if (!student.id) {
        console.error('-----------');
        return
    }

  const handleSubmit = async (e) => {
    e.preventDefault()
await  modifyStudent(student.id,{name,picture,status,genre,behavior})
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
        name="genre"
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
        className="input-field"
        required
      >
        <option value="" disabled>
          Select sex
        </option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>
      
        <select value={behavior} onChange={(e) => setBehavior(e.target.value)}>
        <option defaultValue="unkown">Unkown</option>
        <option value="good">excellent</option>
        <option value="good">Good</option>
        <option value="average">Average</option>
        <option value="bad">Bad</option>
        <option value="bad">very Bad</option>
        <option value="bad">Deliquent</option>
      </select>
      <button type="submit" className="btn btn-success">
        update Student
      </button>
      <button type="button" className="btn btn-secondary" onClick={(e)=>changeBack()}>
        Cancel
      </button>
    
    
    
    </form>
  
)
}

export default UpdateStudent; 
        
      