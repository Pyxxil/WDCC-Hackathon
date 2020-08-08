import Link from "next/link";
import { useRouter } from "next/router";

const MenuItem = ({ children, href }) => {
  const router = useRouter();
  const active = router.pathname === href;
  return (
    <Link href={href}>
      <li className={active ? "active-bg nav-links" : "nav-links"}>
        <a className={active ? "active" : "not-active"}>{children}</a>
      </li>
    </Link>
  );
};


function Header ({ user, loading }) {
  return (
    <header className='bg-orange-300'>
      <nav className='container flex items-center justify-between flex-wrap  py-2 '>
        <div id='Brand' className='text-3xl text-black-700'>
          WDCC Workshop Application
        </div>
<<<<<<< HEAD
        <ul className="flex">
=======
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
>>>>>>> 8970b7fda54370fd9f530468658bc4f1b3775642
          <MenuItem href="/events">Events</MenuItem>
          {!loading &&
            (user ? (
              <>
                <MenuItem href="/calendar">Calendar</MenuItem>
                <MenuItem href="/profile">Profile</MenuItem>
              </>
            ) : (
              <MenuItem href="/api/login">Login</MenuItem>
            ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
