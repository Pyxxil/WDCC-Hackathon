import React from "react";
import { useFetchUser } from "../lib/user";
import useSWR from "swr";
import Layout from "../components/layout";

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
            <h1 class="everythinghasamarginnote" style={{ color: "red" }}>
              <a href={`/event/${event._id}`}>
                {event.Title} by <span>{event.Club}</span>
              </a>
            </h1>
            <br />
            <h1 class="everythinghasamarginnote">{event.Date}</h1>
            <br />
            <p class="everythinghasamarginnote">{event.Description}</p>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Events;