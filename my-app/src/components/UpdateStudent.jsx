import React, { useState } from "react";

const UpdateStudent = ({ student, modifyStudent, changeBack }) => {
  const [name, setName] = useState(student.name || "");
  const [picture, setPicture] = useState(student.picture || "");
  const [genre, setGenre] = useState(student.genre || "");
  const [greenPin, setGreenPins] = useState(student.greenPin);
  const [bluePin, setBluePins] = useState(student.bluePin);
  const [redPin, setRedPins] = useState(student.redPin);

  if (!student.id) {
    console.error("-----makech mrigel------");
    return null;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    await modifyStudent(student.id, {
      name,
      picture,
      genre,
      greenPin,
      bluePin,
      redPin,
    });
  };

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
        <label>Genre</label>
        <select
          name="genre"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          required
        >
          <option defaultValue="" disabled>
            Select genre
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
  );
};

export default UpdateStudent;