<<<<<<< HEAD
import React from "react";
// import Layout from '../components/layout'
import { useFetchUser } from "../lib/user";
import Calendar from "react-calendar";
import Link from "next/link";
class Showcalendar extends React.Component {
  onChange = (e) => {
    console.log(e);
=======
import React from "react"
// import Layout from '../components/layout'
import { useFetchUser } from '../lib/user'
import Calendar from "react-calendar";
import Link from 'next/link'
class Showcalendar extends React.Component {
  onChange = (e) => {
    console.log(e)
>>>>>>> revieweese
    const data = e.toString().split(" ");
    let day = data[2];
    let month = data[1];
    let year = data[3];
<<<<<<< HEAD
    const monthNum = [
      "01",
      "02",
      "03",
      "04",
      "05",
      "06",
      "07",
      "08",
      "09",
      "10",
      "11",
      "12",
    ];
    const monthShort = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    month = monthNum[monthShort.indexOf(month)];
    const route = `/calendar/${day}/${month}/${year}`;
    console.log(route);
  };

  render() {
    console.log(this.date);
    return (
      <div>
        <Link href="event">asd</Link>
        <h1>auskdhjanskjd</h1>
        <Calendar onChange={this.onChange} />
      </div>
    );
  }
}
export default Showcalendar;
=======
    const monthNum = ["01","02","03","04","05","06","07","08","09","10","11","12"]
    const monthShort = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    month = monthNum[monthShort.indexOf(month)]
    const route = `/calendar/${day}/${month}/${year}`;
    console.log(route)
  }

  render() {
    console.log(this.date)
    return(
      <div>
      <Link href="event">asd</Link>
      <h1>auskdhjanskjd</h1>
        <Calendar onChange = {this.onChange} />
      </div>
    )
  }
}
export default Showcalendar
>>>>>>> revieweese
