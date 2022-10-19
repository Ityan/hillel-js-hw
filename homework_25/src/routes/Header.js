import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="wrapper">
      <div className="navigation">
        <Link to="/" className="logo"></Link>
        <nav className="nav-links">
          <NavLink to="/" className={({ isActive }) => "nav-link" + (isActive ? " nav-link-active" : "")} end >
            Home
          </NavLink>
          <NavLink to="users" className={({ isActive }) => "nav-link" + (isActive ? " nav-link-active" : "")} >
            Users
          </NavLink>
          <NavLink to="hotels" className={({ isActive }) => "nav-link" + (isActive ? " nav-link-active" : "")} >
            Hotels
          </NavLink>
        </nav>
      </div>
      <header>
      </header>
    </div>
  )
};

export default Header;