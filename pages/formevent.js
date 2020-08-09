import React, { useState, useEffect } from "react";
import Layout from "../components/layout";
import { useFetchUser } from "../lib/user";
import axios from "axios"
function Form(props) {
  const { user, loading } = useFetchUser();
  const [state, setState] = useState({});
  function handleChange(event) {
    event.persist();
    setState((_state) => ({
      ..._state,
      [event.target.id]: event.target.value,
    }));
  }
  function handleClick(e) {
    axios.post("/api/user", { state })
      .then((res) => {
        console.log(res);
      })
      .catch(console.warn());
  }
  return (
    <div>
      <Layout user={user} loading={loading}>
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
      </Layout>
    </div>
  );
}
export default Form;
