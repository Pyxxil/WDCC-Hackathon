import React, { useState } from "react";
import Layout from "../components/layout";
import { useFetchUser } from "../lib/user";
import axios from "axios"
import { post } from "jquery";

function Form(props) {
  const { user, loading } = useFetchUser();
  const [state, setState] = useState({});

  function handleChange(event) {
    event.persist();
    setState({
      ...state,
      [event.target.id]: event.target.value,
    });
  }
<<<<<<< HEAD
  function handleClick(e) {
    axios.post("/api/user", { state })
      .then((res) => {
        console.log(res);
      })
      .catch(console.warn());
=======

  async function handleClick(e) {
    console.log("SENDING", state);
    const resp = await fetch("/api/events", {
      method: "post",
      body: JSON.stringify(state),
    }).catch((err) => console.log("Error", err));
>>>>>>> e5f71d75701e9eab01cd2ab6f76c12d5570426c1
  }

  return (
    <div>
      <Layout user={user} loading={loading}>
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
        <span>Year</span>
        <input onChange={handleChange} id="Year"></input>
        <br />
        <span>Job</span>
        <input onChange={handleChange} id="Job"></input>
        <br />
        <span>Industry</span>
        <input onChange={handleChange} id="Industry"></input>
        <br />
        <span>Skills</span>
        <input onChange={handleChange} id="Skills"></input>
        <br />
        <span>lat</span>
        <input onChange={handleChange} id="lat"></input>
        <br />
        <span>lng</span>
        <input onChange={handleChange} id="lng"></input>
        <br />
        <span>Price</span>
        <input onChange={handleChange} id="Price"></input>
        <br />
        <input type="submit" onClick={handleClick}></input>
      </Layout>
    </div>
  );
}
export default Form;
