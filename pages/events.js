import React, { useState, useEffect } from "react";
import Layout from "../components/layout";
import { useFetchUser } from "../lib/user";
import useSWR from "swr";

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
              <a class="title">
                {event.Title} by <span>{event.Club}</span>
              </a>
            </h1>
            <div className="PriceDate"> 
            <h1
              class="everythinghasamarginnote dates"
              style={{ display: "inline" }}
            >
              {event.Date}
            </h1>
            <p class="everythinghasamarginnote price" style={{ display: "inline" }}>{event.Price}</p>
            </div>
            <div className = "DescBG">
            <p class="AboutEvent"> About the event: </p>
  
            <p>
              <a class="everythinghasamarginnote descriptions" href={`/event/${event._id}`}>
              {event.Description}</a>
            </p>
          
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Events;
