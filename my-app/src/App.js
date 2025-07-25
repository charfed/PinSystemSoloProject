import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import AllStudents from './components/AllStudents.jsx'
import AddStudent from './components/AddStudent.jsx'
import UpdateStudent from './components/UpdateStudent.jsx'
import SearchStudent from './components/SearchStudent.jsx'
import TeacherLogin from './components/TeacherLogin.jsx'

function App() {
  const [students, setStudents] = useState([])
  const [student, setStudent] = useState({})
  const [view, setView] = useState("allstudents")
  

    const fetchStudents = async () => {
    try {
      const res = await axios.get(`http://localhost:3000/api/students`)
      setStudents(res.data)
    } catch (error) {
      console.log(error)
    }
  }

 const SearchByNSB = async ( {name,genre,behavior} ) => {

   try {
      const res = await axios.get(`http://localhost:3000/api/students/sear?name=${name}&genre=${genre}&behavior=${behavior}`)
      // console.log("res",res.data)
      setStudents(res.data)
    } catch (error) {
      console.log(error)
    }
 }
  const addStudent = async (body) => {
      
    try {
  
      const res = await axios.post(`http://localhost:3000/api/students`, body)
      setStudents([...students, res.data])
      fetchStudents()
      setView('addstudent')
    } catch (error) {
      console.log(error)
    }
  }

  const removeStudent = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/students/${id}`)
      fetchStudents()
    } catch (error) {
      console.log(error)
    }
  }

  const modifyStudent = async (id, student) => {
    try {
      const res = await axios.put(`http://localhost:3000/api/students/${id}`, student)
      setStudents([...students, res.data])
      fetchStudents()
      setView('allstudents')
    } catch (error) {
      console.log(error)
    }
  }

const addPins = async (id,student) => {
  try {
      const res = await axios.put(`http://localhost:3000/api/students/${id}`, student)
      setStudents([...students, res.data])
      fetchStudents()
    } catch (error) {
      console.log(error)
    }
}  



  const updateSt = (student)=> {
    // console.log("student",student)
    setStudent(student)
    setView("updatestudent")
    
  }


  useEffect(() => {
    fetchStudents()
  }, [])


const changeBack = ()=> {
  setView("allstudents")
}



  return (
    <div className="App">
      <header className="App-header">
        <h1 className="student-list main">Proper pinning system</h1>
        <nav className="nav">
          <SearchStudent SearchByNSB={SearchByNSB}/>

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
        {view  === "allstudents"    && <AllStudents addPins={addPins}  updateSt={updateSt} students={students} removeStudent={removeStudent} />}
        {view  === "addstudent"    && <AddStudent changeBack={changeBack} addStudent={addStudent}/>}
        {view  === "updatestudent" && <UpdateStudent changeBack={changeBack} modifyStudent={modifyStudent} student={student}/>}
      
      </header>
    </div>
  )
}

export default App