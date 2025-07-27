import React, { useState } from "react";

const AddStudent = ({ addStudent, changeBack }) => {
  const [name, setName] = useState("")
  const [picture, setPicture] = useState("")
  const [gender, setGender] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    addStudent({name,picture, gender})
  }

  return (
    <form onSubmit={handleSubmit} className="add-student-form">
  <div className="form-group">
    <label>Name</label>
    <input
      type="text"
      name="name"
      placeholder="Set name"
      value={name}
      onChange={(e) => setName(e.target.value)}
      required
    />
  </div>

  <div className="form-group">
    <label>Picture URL</label>
    <input
      type="text"
      name="picture"
      placeholder="Set picture URL"
      value={picture}
      onChange={(e) => setPicture(e.target.value)}
    />
  </div>

  <div className="form-group">
    <label>Gender</label>
    <select
      name="gender"
      value={gender}
      onChange={(e) => setGender(e.target.value)}
      required
    >
      <option value="" disabled>Select gender</option>
      <option value="Male">Male</option>
      <option value="Female">Female</option>
    </select>
  </div>

  <div style={{ display: "flex", gap: "15px", marginTop: "20px" }}>
    <button type="submit" className="btn btn-success">Add Student</button>
    <button type="button" className="btn btn-secondary" onClick={changeBack}>Cancel</button>
  </div>
</form>
  )
}

export default AddStudent;
