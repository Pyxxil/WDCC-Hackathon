import fetch from 'node-fetch'
import Layout from '../components/layout'
import { useFetchUser } from '../lib/user'
import config from '../lib/config'
import ProfileCard from '../components/ProfileCard'
import Link from 'next/link'
const LinkA = ({ children, href }) =>
  <Link href={href}>
    <a className='pl-4 block pr-4 underline hover:text-white'>{children}</a>
  </Link>

function Home () {
  // set required to true to force the page to require login.
  const { user, loading } = useFetchUser({ required: false })

  const logEvent = async (type, value) => {
    const event = {
      name: user.nickname,
      type: type,
      value: value
      // date: added server side so we can't lie
    }
    await fetch(`${config.HOST}/api/events`, {
      method: 'post',
      body: JSON.stringify(event)
    })

    // TODO handle error if event cannot be posted.
    // TODO display feedback if event is ok
  }

  const handleClick = (e) => {
    // console.log(e.target)
    logEvent('click', 1)
  }
  return (
    <Layout user={user} loading={loading}>

      {loading && <p>Loading login info...</p>}
      {!loading && !user && (
        <>

  
  <section className="container-hero">
    <div>
      <h1>Timeline</h1>
      <div className="Divider"></div>
      <p>Start your path to success. </p>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" href="#">
  Signup
</button>
<p><a href="#" className="LearnMore"> Or view all events </a></p>
    </div>
  </section>

  <section className="container-about">
  <div>
      <h2>About</h2>
      <div className="Divider"></div>
      <div className="desc"><p>You go into university wanting to do your best, but shortly after you've given up. Students are not given enough information for what they need to do to succeed, and that's where Timeline comes in! <br/><br /> Our goal is to help you create your path to success. We help you meet your goals by providing only the relevant information, events and reminders to keep you on track. Whether you're looking for an internship, graduate position or just want to learn something new, Timeline can help.</p></div>
    </div>
  </section>
   
   <section className="container-features">
     <div>
       <h2>Features</h2>
       <div className = "Divider"/>
      </div>
      <div className="container-features-grid">
      <div><img src="/img/cal.svg"/><h4>Calendar:</h4> {/* add logo of calendar */} <p>Keep track of your assignments and upcoming events.</p></div>
      <div><img src="/img/profile.svg"/><h4>Personalized:</h4> {/* add logo of a tick */} <p>Tell us your goals and let us personalize all the events and reminders for you. </p></div>
      <div><img src="/img/info.svg"/><h4>Consolidated Information:</h4> {/* add logo of a tick */} <p>Information at the touch of your fingers, curated by us. </p></div>
      <div><img src="/img/event.svg"/><h4>Events:</h4> {/* add logo of a tick */} <p>See relevant career workshops and club events. </p></div>
      </div>
       
    </section>

    <footer>
      {/* <a href="#"  id = "TOC"> Terms of Conditions</a> */}

    </footer>     
        </>
  )}

      {/* After login see the information below */}
      {/* {user && (
        <>
          <ProfileCard user={user}>
            <button className='btn-blue' onClick={handleClick}>Event</button>
          </ProfileCard>
          <h2>Reports</h2>
          <LinkA href='/report'>Report - useEffect</LinkA>
          <LinkA href='/reportSSR'>Report - SSR</LinkA>
          <LinkA href='/reportSWR'>Report - SWR</LinkA>

        </>)} */}
    </Layout>
  )
}

export default Home
