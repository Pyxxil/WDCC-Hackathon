import React, { useState, useEffect } from "react";
function Form(props) {
  const [state, setState] = useState({});
  function handleChange(event) {
    event.persist();
    setState((_state) => ({
      ..._state,
      [event.target.id]: event.target.value,
    }));
  }
  function handleClick(e) {
    console.log("asdasd");
  }
  return (
    <div>
      <form id="forUser">
        <span>Title</span>
        <input onChange={handleChange} id="Title"></input>
        <br />
        <span>Description</span>
        <input onChange={handleChange} id="Description"></input>
        <br />
        <span>Date</span>
        <input onChange={handleChange} id="Date"></input>
        <br />
        <span>Club</span>
        <input onChange={handleChange} id="Club"></input>
        <br />
        <input type="submit" onClick={handleClick}></input>
      </form>
    </div>
  );
}
export default Form;
