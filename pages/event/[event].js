import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

import Layout from "../../components/layout";
import { useFetchUser } from "../../lib/user";

import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

function Event(props) {
  const { user, loading } = useFetchUser();
  const router = useRouter();
  const event = useSWR(`/api/events/${router.query.event}`, fetcher);

  if (loading || !event.data) {
    return <Layout user={user}>Loading...</Layout>;
  }

  console.log("Event", event);

  return (
    <div>
      <Layout user={user} loading={loading}>
        <div id="eventHolder">
          <div>
            <h2 id="title">
              {event.data.Title} by {event.data.Club}
            </h2>
            <h2 id="date">{event.data.Date}</h2>
            <p id="description">{event.data.Description}</p>
          </div>
        </div>
      </Layout>
    </div>
  );
}
export default Event;
