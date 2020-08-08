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

function Header({ user, loading }) {
  return (
    <header className="navbar">
      <nav className="container flex items-center justify-between flex-wrap">
        <div id="Brand" className="logo">
          <MenuItem id="landing-page" href="/">
            Timeline
          </MenuItem>
        </div>
        <ul className="flex">
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
