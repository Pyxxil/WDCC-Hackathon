<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import axios from "axios"; //For later
function Event(props) {
  const [date, setDate] = useState("");
  const [title, setTitle] = useState("");
  const [data, setData] = useState([]);
  // useEffect(() => {
  //   axios.get("/api/events").then()
  //   .catch((err) => console.log(err))
  // }, []) For events later
  //Mocked event
  useEffect(() => {
    setData({
      title: "Wow an Event",
      date: "1/01/01",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem IpsumLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem IpsumLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      club: "A club",
    });
  }, []);
  return (
    <div>
      <h2 id="title">
        {data.title} hosted by {data.club}
      </h2>
      <h2 id="date">{data.date}</h2>
      <div id="description">{data.description}</div>
    </div>
  );
}
export default Event;
=======
import React, {useState, useEffect} from "react"
import axios from "axios"
import Layout from '../components/layout'
import { useFetchUser } from '../lib/user'
function Event(props) {
  const {user, loading} = useFetchUser()
  const [data, setData] = useState("")
  useEffect(() => {
    // axios.get("").then(res => {
    //  setData(res.data)
  // }).catch(console.warn())
  },[])
  useEffect(() => {
    setData({
      "date": "20/01/20",
      "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem IpsumLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem IpsumLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      "title": "Wow an event",
      "club": "a club"
    })
  },[])
  return(
    <div>
      <Layout user={user} loading={loading}>
      <div id="eventHolder">
        <div>
          <h2 id="title">{data.title} by {data.club}</h2>
          <h2 id="date">{data.date}</h2>
          <p id="description">{data.description}</p>
        </div>
        <Picture props={props} data={data}/>
      </div>
      </Layout>
    </div>
  )
}
export default Event

const Picture = (props) => {
  let pictureDisplay
  if( props.data == "" ) {
    pictureDisplay = <div id="noResults"><img src="https://placebear.com/200/200"></img></div>;
  } else {
    // pictureDisplay = props.data.pictures.map((x,y) => (
    //   <div>
    //     <img src={props.data.pictures.map} height="200px" width="200px"></img>
    //   </div>
    // ));
    pictureDisplay = <div id="noResults"><img src="https://placebear.com/300/300"/><img src="https://placebear.com/300/300"/><img src="https://placebear.com/300/300"/></div>;
  }
  return(
    <div id="eventPictureHolder">
      {pictureDisplay}
    </div>
  )
}
>>>>>>> pushing new changes
