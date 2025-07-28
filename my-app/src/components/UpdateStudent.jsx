import React, { useState,useEffect } from "react";

const UpdateStudent = ({ student, modifyStudent, changeBack }) => {
  const [name, setName] = useState(student.name || "")
  const [picture, setPicture] = useState(student.picture || "")
  const [gender, setGender] = useState(student.gender || "")
  const [greenPin, setGreenPins] = useState(student.greenPin)
  const [bluePin, setBluePins] = useState(student.bluePin)
  const [redPin, setRedPins] = useState(student.redPin)
  const [behavior,setBehavior] = useState(student.behavior)
  const [warning,setWarning] = useState("")



  if (!student.id) {
    console.error("-----student mahouch mrigel------");
  }


  const handleSubmit = async (e) => {
    e.preventDefault();
    await modifyStudent(student.id,
    {name,picture,gender,greenPin,bluePin,redPin,behavior,warning})}


  useEffect(() => {
    const green = Number(greenPin)
    const blue = Number(bluePin)
    const red = Number(redPin)
  
    if (red === 2) {
      setBehavior("Delinquent")
    } else if (red === 1 || blue >= 4) {
      setBehavior("Bad")
    } else if (blue >= 1  ||  green >= 4) {
      setBehavior("Average")
    } else if (green >= 1) {
      setBehavior("Good")
    } else if (green === 0 && blue === 0 && red === 0) {
      setBehavior("Excellent")
    }
  }, [greenPin, bluePin, redPin])


  useEffect(() => {
    if (redPin === 2) {
      setWarning("Warning: one more red pin and the student is out of the class !")
    } 
  }, [redPin])

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
          <option defaultValue="" disabled>
            Select gender
          </option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </div>

      <div className="form-group">
        <label>Green Pins</label>
        <select value={greenPin} onChange={(e) => setGreenPins(e.target.value)}>
          <option value="">select number of greePins</option>
          <option value={0}>0</option>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
        </select>
      </div>

      <div className="form-group">
        <label>Blue Pins</label>
        <select value={bluePin} onChange={(e) => setBluePins(e.target.value)}>
          <option value="">select number of bluePins</option>
          <option value={0}>0</option>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
        </select>
      </div>

      <div className="form-group">
        <label>Red Pins</label>
        <select value={redPin} onChange={(e) => setRedPins(e.target.value)}>
          <option value="">select number of redPins</option>
          <option value={0}>0</option>
          <option value={1}>1</option>
          <option value={2}>2</option>
        </select>
      </div>

      <div style={{ display: "flex", gap: "15px", marginTop: "20px" }}>
        <button type="submit" className="btn btn-success">
          Update Student
        </button>
        <button type="button" className="btn btn-secondary" onClick={changeBack}>
          Cancel
        </button>
      </div>
    </form>
  )
}

export default UpdateStudent;