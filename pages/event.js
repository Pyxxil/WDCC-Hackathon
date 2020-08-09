import React, { useState, useEffect } from "react";
import axios from "axios";
import Layout from '../components/layout'
import { useFetchUser } from '../lib/user'
import Calendar from "react-calendar"
import ShowMap from "./googlemaps.js"
import $ from "jquery"
function Event(props) {
  const {user, loading} = useFetchUser()
  const [data, setData] = useState("")
  const [latpos, setLatpos] = useState("")
  const [lngpos, setLngpos] = useState("")
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
    }),
    setLatpos(180)
    setLngpos(180)
  },[])
  useEffect(() => {
    if($("#totalPage").width() < 800) {
      $("#addingStuff").addClass("eventGoogCalSmall")
    } else {
      $("#addingStuff").addClass("eventGoogCalBig")
    }
  })
  return(
    <div id="totalPage">
      <Layout user={user} loading={loading}>
      <div id="eventHolder">
        <div>
          <h2 id="title">{data.title} by {data.club}</h2>
          <h2 id="date">{data.date}</h2>
          <p id="description">{data.description}</p>
        </div><br/>
      <div id="addingStuff">
          <Calendar className={["eventCalendar"]} value={new Date(2020, 3, 5)}/>
          <ShowMap/>
        </div>
      </div>
      </Layout>
    </div>
  )
}
export default Event
