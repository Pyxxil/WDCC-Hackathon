<<<<<<< HEAD
<<<<<<< HEAD

import React, { useState, useEffect } from "react";
=======
=======
>>>>>>> 8970b7fda54370fd9f530468658bc4f1b3775642
import React, {useState, useEffect} from "react"
import Layout from '../components/layout'
import { useFetchUser } from '../lib/user'

<<<<<<< HEAD
>>>>>>> pushing new changes
=======
>>>>>>> 8970b7fda54370fd9f530468658bc4f1b3775642
function Form(props) {
  const [state, setState] = useState({});
  const {user, loading} = useFetchUser();
  function handleChange(event) {
    event.persist()
    setState((_state) => ({ ..._state, [event.target.id]:event.target.value }));
  }
  function handleClick(e) {
    axios.post("/api/user", {state}).then(res => {
      console.log(res)
    }).catch(console.warn())8970b7fda54370fd9f530468658bc4f1b3775642
  }
  return(
    <div>
      <form id="forUser">
        <span>Title</span>
        <input onChange={handleChange} id="Title"></input>
        <br />
        <span>Description</span>
        <input onChange={handleChange} id="Description"></input>
        <br />
        <span>Complete</span>
        <input onChange={handleChange} id="Complete" type="checkbox"></input>
        <br />
        <input type="submit" onClick={handleClick}></input>
      </form>
      <Layout user={user} loading={loading}>
        <form id="forUser">
          <span>Title</span><input onChange={handleChange} id="Title"></input><br/>
          <span>Description</span><input onChange={handleChange} id="Description"></input><br/>
          <span>Complete</span><input onChange={handleChange} id="Complete" type="checkbox"></input><br/>
          <input type="submit" onClick={handleClick}></input>
        </form>
      </Layout>
    </div>
  )
}
export default Form
