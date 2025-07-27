  import React,{useState} from "react"

  const SearchStudent = ({searchByName,filterByGender,filterByBehavior})=> {

    const [name, setName] = useState('');
    const [gender, setGender] = useState('');
    const [behavior, setBehavior] = useState('');


    // console.log("name",name)
    // console.log("gender",gender)
    // console.log("behavior",behavior)

  const handleName = (e) => {
    const storeName = e.target.value
    setName(storeName)
    searchByName(storeName)
  }

  const handleGender = (e) => {
    const storeGender = e.target.value
    setGender(storeGender)
    filterByGender(storeGender)
  }

  const handleBehavior = (e) => {
    const storeBehavior = e.target.value
    setBehavior(storeBehavior)
    filterByBehavior(storeBehavior)
  }

    
    return(
    <div className="search-bar">
        <input
          type="text"
          name="name"
          placeholder="Search by Name"
          value={name}
          onChange={handleName}
        />
        <select value={behavior} onChange={handleBehavior} >
          <option value="" disabled>select behavior </option>
          <option value="Excellent">Excellent</option>
          <option value="Good">Good</option>
          <option value="Average">Average</option>
          <option value="Bad">Bad</option>
          <option value="Delinquent">Delinquent</option>
        </select>

         <select value={gender} onChange={handleGender} >
          <option value="" disabled>Select gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
      )
  }


  export default SearchStudent;
