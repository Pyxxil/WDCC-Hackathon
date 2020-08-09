import React, { useState, useEffect } from "react";
import Layout from "../components/layout";
import { useFetchUser } from "../lib/user";
import useSWR from "swr";
import axios from "axios";
import $ from "jquery";
// function Events(props) {
//   const { user, loading } = useFetchUser();
//   const [events, setEvents] = useState("");
//   const [test, setTest] = useState("");
//   useEffect(() => {
//     axios.get("/api/events").then((res) => {
//       console.log(res);
//       // setEvents(res.data)
//     });
//   }, []);
//   useEffect(() => {
//     //Comment out later test
//     setEvents([
//       {
//         title: "event1",
//         date: "date1",
//         club: "club1",
//         description: "description1",
//       },
//       {
//         title: "event2",
//         date: "date2",
//         club: "club2",
//         description: "description2",
//       },
//       {
//         title: "event3",
//         date: "date3",
//         club: "club3",
//         description: "description3",
//       },
//       {
//         title: "event4",
//         date: "date4",
//         club: "club4",
//         description: "description4",
//       },
//       {
//         title: "event5",
//         date: "date5",
//         club: "club5",
//         description: "description5",
//       },
//       {
//         title: "event6",
//         date: "date6",
//         club: "club6",
//         description: "description6",
//       },
//       {
//         title: "event7",
//         date: "date7",
//         club: "club7",
//         description: "description7",
//       },
//       {
//         title: "event8",
//         date: "date8",
//         club: "club8",
//         description: "description8",
//       },
//       {
//         title: "event7",
//         date: "date7",
//         club: "club7",
//         description: "description7",
//       },
//       {
//         title: "event8",
//         date: "date8",
//         club: "club8",
//         description: "description8",
//       },
//     ]);
//   }, []);
//   return (
//     <div>
//       <Layout user={user} loading={loading}>
//         <Display props={props} events={events}></Display>
//       </Layout>
//     </div>
//   );
// }
// export default Events;

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const filterFor = (preferences) => {
  return (event) => {
    return (
      preferences.Skills.find((skill) => skill === event.Skills) ||
      (preferences.Industry.find((ind) => ind === event.Industry) &&
        preferences.Year === event.Year) ||
      preferences.Job.find((job) => job === event.Job)
    );
  };
};

const Events = () => {
  const { user, loading } = useFetchUser({ required: true });
  const events = useSWR("/api/events", fetcher);
  const preferences = useSWR(
    `/api/preferences${user ? "/" + user.nickname : ""}`,
    fetcher
  );

  if (loading || !events.data || !preferences.data) {
    return <Layout user={user}>Loading...</Layout>;
  }

  return (
    <Layout user={user}>
      <div id="displayNotes">
        {events.data.filter(filterFor(preferences.data[0])).map((event) => (
          <div class="eventNote">
            <h1 class="everythinghasamarginnote">
              <a href={`/event/${event._id}`} class="title">
                {event.Title} by <span>{event.Club}</span>
              </a>
            </h1>

            <h1
              class="everythinghasamarginnote dates"
              style={{ display: "inline" }}
            >
              {event.Date}
            </h1>
            <p class="everythinghasamarginnote price">{event.Price}</p>
            <p class="AboutEvent"> About the event: </p>
            <p class="everythinghasamarginnote descriptions">
              {event.Description}
            </p>
            <a href="#" class="everythinghasamarginnotes seemore">
              See More{" "}
            </a>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Events;
