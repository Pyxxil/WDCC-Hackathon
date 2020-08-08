<<<<<<< HEAD
import React, {useState, useEffect} from "react"
import Layout from '../components/layout'
import { useFetchUser } from '../lib/user'

function Form(props) {
  const {user, loading} = useFetchUser()
  const [state, setState] = useState({});
  function handleChange(event) {
    event.persist()
    setState((_state) => ({ ..._state, [event.target.id]:event.target.value }));
  }
  function handleClick(e) {
    axios.post("/api/user", {state}).then(res => {
      console.log(res)
    }).catch(console.warn())
  }
  return(
    <div>
      <Layout user={user} loading={loading}>
        <form id="forUser">
          <span>Title</span><input onChange={handleChange} id="Title"></input><br/>
          <span>Description</span><input onChange={handleChange} id="Description"></input><br/>
          <span>Date</span><input onChange={handleChange} id="Date"></input><br/>
          <span>Club</span><input onChange={handleChange} id="Club"></input><br/>
          <input type="submit" onClick={handleClick}></input>
        </form>
      </Layout>
    </div>
  )
}
export default Form
=======
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
>>>>>>> 0b0f94678c8c6cd5b9967fe120be532a2cbc12fe
