import React,{useState} from "react"

const SearchStudent = ({SearchByNSB})=> {

  const [name, setName] = useState('');
  const [genre, setGenre] = useState('');
  const [behavior, setBehavior] = useState('');

  
 const handleSearch =(e)=> {
    e.preventDefault()
    SearchByNSB({name,genre,behavior})
 }
  
  return(
        

  <div className="search-bar">
      <input
        type="text"
        name="name"
        placeholder="Search by Name"
        value={name}
        onChange={(e)=>{setName(e.target.value)}}
      />
     
      <select value={genre} onChange={(e) => setGenre(e.target.value)}>
        <option value="">Select genre</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>


      <select value={behavior} onChange={(e) => setBehavior(e.target.value)}>
        <option defaultValue="">select behavior</option>
        <option value="excellent">excellent</option>
        <option value="good">Good</option>
        <option value="Average">Average</option>
        <option value="Bad">Bad</option>
        <option value="very Bad">very Bad</option>
        <option value="Delequint">Delequint</option>
      </select>

      <button className="btn-warning" onClick={handleSearch}>Search</button>
    </div>
    )
}
export default SearchStudent;
