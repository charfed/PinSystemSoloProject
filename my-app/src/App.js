import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import AllStudents from './components/AllStudents.jsx'
import AddStudent from './components/AddStudent.jsx'

function App() {
  const [students, setStudents] = useState([])
  const [view, setView] = useState("allstudents")

    const fetchStudents = async () => {
    try {
      const res = await axios.get(`http://localhost:3000/api/students`)
      setStudents(res.data)
    } catch (error) {
      console.log(error)
    }
  }




  const addStudent = async (body) => {
    console
  //   try {
  //     const res = await axios.post(`http://localhost:3000/api/students`, body)
  //     setStudents([...students, res.data])
  //     fetchStudents()
  //     setView('addstudent')
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  const removeStudent = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/students/${id}`)
      fetchStudents()
    } catch (error) {
      console.log(error)
    }
  }

  const updateStudent = async (id, body) => {
    try {
      const res = await axios.put(`http://localhost:3000/api/students/${id}`, body)
      setStudents([...students, res.data])
      fetchStudents()
      setView('updatestudent')
    } catch (error) {
      console.log(error)
    }
  }








  useEffect(() => {
    fetchStudents()
  }, [])







  return (
    <div className="App">
      <header className="App-header">
        <h1 className="student-list main">Students</h1>
        <nav className="nav">
          <div
            className={view !== "addstudent" ? "nav-unselected" : "nav-selected"}
            onClick={() => setView("addstudent")}
          >
            Add Student
          </div>
          <div
            className={view === "allstudents" ? "nav-selected" : "nav-unselected"}
            onClick={() => setView("allstudents")}
          >
            List of Students
          </div>
        </nav>
        {view === "allstudents" && <AllStudents students={students} removeStudent={removeStudent} />}
        {view === "addstudent" && <AddStudent addStudent={addStudent}/>}
      </header>
    </div>
  )
}

export default App