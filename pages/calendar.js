import React, {useState, useEffect} from "react"
import Layout from '../components/layout'
import { useFetchUser } from '../lib/user'
import Calendar from "react-calendar";
import Link from 'next/link'

function Showcalendar(props) {
  const {user, loading} = useFetchUser()
  function onChange(event) {
    const data = event.toString().split(" ");
    let day = data[2];
    let month = data[1];
    let year = data[3];
    const monthNum = ["01","02","03","04","05","06","07","08","09","10","11","12"]
    const monthShort = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    month = monthNum[monthShort.indexOf(month)]
    const route = `/calendar/${day}/${month}/${year}`;
  }
  return(
    <div>
      <Layout user={user} loading={loading}>
        <Calendar onChange = {onChange} />
      </Layout>
    </div>
  )
}
export default Showcalendar
