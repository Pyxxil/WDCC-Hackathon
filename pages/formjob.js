import React, { useState, useEffect } from "react";
import Layout from "../components/layout";
import { useFetchUser } from "../lib/user";

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
    axios
      .post("/api/user", { state })
      .then((res) => {
        console.log(res);
        //Also post the CV of User
      })
      .catch(console.warn());
  }
  return (
    <div>
      <Layout user={user} loading={loading}>
        <form id="forJob">
          <span>Title</span>
          <input onChange={handleChange} id="Title"></input>
          <br />
          <span>Company</span>
          <input onChange={handleChange} id="Company"></input>
          <br />
          <span>Description</span>
          <input onChange={handleChange} id="Description"></input>
          <br />
          <span>Application Start</span>
          <input onChange={handleChange} id="DateStart"></input>
          <br />
          <span>Application End</span>
          <input onChange={handleChange} id="DateStart"></input>
          <br />
          <input type="submit" onClick={handleClick}></input>
        </form>
      </Layout>
    </div>
  );
}
export default Form;
