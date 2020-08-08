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
        <span>Name</span><input onChange={handleChange} id="Name"></input><br/>
        <span>Members</span><input onChange={handleChange} id="Members"></input><br/>
        <span>Leader</span><input onChange={handleChange} id="Leader"></input><br/>
        <input type="submit" onClick={handleClick}></input>
      </form>
    </div>
  )
}
export default Form
