import React, {useState, useEffect} from "react"
function Form(props) {
  const [state, setState] = useState({});
  function handleChange(event) {
    event.persist()
    setState((_state) => ({ ..._state, [event.target.id]:event.target.value }));
  }
  function handleClick(e) {
    console.log("asdasd")
  }
  return(
    <div>
      <form id="forUser">
        <span>username</span><input onChange={handleChange} id="Username"></input><br/>
        <span>password</span><input onChange={handleChange} id="Password"></input><br/>
        <span>year</span><input onChange={handleChange} id="Year"></input><br/>
        <span>bachelor</span><input onChange={handleChange} id="Bachelor"></input><br/>
        <span>admin</span><input onChange={handleChange} id="Admin" type="checkbox"></input><br/>
        <input onChange={handleChange}></input><br/>
        <input type="submit" onClick={handleClick}></input>
      </form>
    </div>
  )
}
export default Form
