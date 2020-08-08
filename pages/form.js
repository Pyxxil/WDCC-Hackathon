<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState, useEffect } from "react";
=======
import React, {useState, useEffect} from "react"
import Layout from '../components/layout'
import { useFetchUser } from '../lib/user'
>>>>>>> 8970b7fda54370fd9f530468658bc4f1b3775642
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
          <span>username</span><input onChange={handleChange} id="Username"></input><br/>
          <span>password</span><input onChange={handleChange} id="Password"></input><br/>
          <span>year</span><input onChange={handleChange} id="Year"></input><br/>
          <span>bachelor</span><input onChange={handleChange} id="Bachelor"></input><br/>
          <span>Association Leader/Rep</span><input onChange={handleChange} id="Association" type="checkbox"></input><br/>
          { state.Association = "on" && <span>Association Name</span> && <input onChange={handleChange} id="AssociationName"/> }
          <input onChange={handleChange}></input><br/>

          <input type="submit" onClick={handleClick}></input>
        </form>
      </Layout>
    </div>
  )
}
<<<<<<< HEAD
export default Form;
=======
=======
>>>>>>> pushing to ivan branch
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
          <span>username</span><input onChange={handleChange} id="Username"></input><br/>
          <span>password</span><input onChange={handleChange} id="Password"></input><br/>
          <span>year</span><input onChange={handleChange} id="Year"></input><br/>
          <span>bachelor</span><input onChange={handleChange} id="Bachelor"></input><br/>
          <span>Association Leader/Rep</span><input onChange={handleChange} id="Association" type="checkbox"></input><br/>
          { state.Association = "on" && <span>Association Name</span> && <input onChange={handleChange} id="AssociationName"/> }
          <input onChange={handleChange}></input><br/>

          <input type="submit" onClick={handleClick}></input>
        </form>
      </Layout>
    </div>
  )
}
export default Form
<<<<<<< HEAD
>>>>>>> revieweese
=======
>>>>>>> pushing to ivan branch
=======
export default Form
>>>>>>> 8970b7fda54370fd9f530468658bc4f1b3775642
