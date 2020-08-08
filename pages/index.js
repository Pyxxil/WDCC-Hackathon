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
  <div class="flex mb-4">
  <div class="w-full h-12"> 
  <section className="container-hero">
    <div>
      <h1>Timeline</h1>
      <p>To start your path to success: </p>
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" href="#">
  Signup
</button>
<p><a href="#"> Or Login </a></p>
    </div>
  </section>
     
  </div>
  </div>

        </>
  )}

      {/* After login see the information below */}
      {user && (
        <>
          <ProfileCard user={user}>
            <button className='btn-blue' onClick={handleClick}>Event</button>
          </ProfileCard>
          <h2>Reports</h2>
          <LinkA href='/report'>Report - useEffect</LinkA>
          <LinkA href='/reportSSR'>Report - SSR</LinkA>
          <LinkA href='/reportSWR'>Report - SWR</LinkA>

        </>)}
    </Layout>
  )
}

export default Home
