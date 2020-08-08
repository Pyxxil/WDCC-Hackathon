import Link from 'next/link'

const MenuItem = ({ children, href }) =>
  <Link href={href}>
    <li className='block mt-4 inline-block  rounded-md text-center bg-orange-200 hover:bg-orange-500 px-4 py-2 m-2 lg:mt-0 hover:text-white mr-4'>
      <a className='no-underline hover:text-white'>{children}</a>
    </li>
  </Link>


function Header ({ user, loading }) {
  return (
    <header className='bg-orange-300'>
      <nav className='container flex items-center justify-between flex-wrap  py-2 '>
        <div id='Brand' className='text-3xl text-black-700'>
          WDCC Workshop Application
        </div>
        <ul className=' flex   '>
          <MenuItem href='/'>Home</MenuItem>
          <MenuItem href="/form">MUser</MenuItem>
          <MenuItem href="/formevent">MEvent</MenuItem>
          <MenuItem href="/formclub">MClub</MenuItem>
          <MenuItem href="/formgoal">MGoal</MenuItem>
          <MenuItem href="/formjob">MJob</MenuItem>
          <MenuItem href='/about'>About</MenuItem>
          <MenuItem href="/calendar">Calendar</MenuItem>
          <MenuItem href="/event">Event</MenuItem>
          <MenuItem href="/events">Events</MenuItem>
          {!loading &&
            (user ? (
              <>
                <MenuItem href='/reportSWR'>
                Report
                </MenuItem>
                <MenuItem href='/api/logout'>
                Logout
                </MenuItem>
              </>
            ) : (
              <MenuItem href='/api/login'>
                Login
              </MenuItem>
            ))}
        </ul>
      </nav>

    </header>
  )
}

export default Header
