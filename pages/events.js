import React, {useState, useEffect} from "react"
import Layout from '../components/layout'
import { useFetchUser } from '../lib/user'
import axios from "axios"
import $ from "jquery"
function Events(props) {
  const {user, loading} = useFetchUser()
  const [events, setEvents] = useState("")
  const [test, setTest] = useState("")
  useEffect(()=> {
    axios.get("/api/events").then(res => {
      console.log(res)
      //setEvents(res.data)
    })
  },[])
  useEffect(() => {
    //Comment out later test
    setEvents([{
        "title":"event1",
        "date":"date1",
        "club":"club1",
        "description":"description1"
      },{
        "title":"event2",
        "date":"date2",
        "club":"club2",
        "description":"description2"
      },{
        "title":"event3",
        "date":"date3",
        "club":"club3",
        "description":"description3"
      },{
        "title":"event4",
        "date":"date4",
        "club":"club4",
        "description":"description4"
      },{
        "title":"event5",
        "date":"date5",
        "club":"club5",
        "description":"description5"
      },{
        "title":"event6",
        "date":"date6",
        "club":"club6",
        "description":"description6"
      },{
        "title":"event7",
        "date":"date7",
        "club":"club7",
        "description":"description7"
      },{
        "title":"event8",
        "date":"date8",
        "club":"club8",
        "description":"description8"
      },{
        "title":"event7",
        "date":"date7",
        "club":"club7",
        "description":"description7"
      },{
        "title":"event8",
        "date":"date8",
        "club":"club8",
        "description":"description8"
      }],
    )
  },[])
  return(
    <div>
      <Layout user={user} loading={loading}>
        <Display props={props} events={events}></Display>
      </Layout>
    </div>
  )
}
export default Events

const Display = (props) => {
  let eventsDisplay;
  if( props.events == "" ) {
    eventsDisplay = <div id="noResults"> There are currently no events</div>;
  } else {
    eventsDisplay = props.events.map((x,y) => (
      <div class="eventNote" id={"notice"+y}>
        <h1 class="everythinghasamarginnote" style={{color:"red"}} id={"title"+y}>{x.title} by <span id={"club"+y}>{x.club}</span></h1><br/>
        <h1 class="everythinghasamarginnote" id={"date"+y}>{x.date}</h1><br/>
        <p class="everythinghasamarginnote" id={"description"+y}>{x.description}</p>
      </div>
    ));
    for(let x=0; x<props.events.length; x++) {
      let r = Math.floor(Math.random()*255)
      let g = Math.floor(Math.random()*255)
      let b = Math.floor(Math.random()*255)
      $(`#title${x}`).css("color",`rgb(${b},${r},${g})`)
      $(`#date${x}`).css("color",`rgb(${b},${r},${g})`)
      $(`#description${x}`).css("color",`rgb(${b},${r},${g})`)
      $(`#notice${x}`).css("background-color",`rgba(${r},${g},${b},0.8)`).css("opacity", "0.9")
    }
  }
  return (
    <div id="displayNotes">
      {eventsDisplay}
    </div>
  );
};
