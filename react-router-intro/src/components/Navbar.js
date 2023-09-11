import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <h2>Router</h2>
      </div>
      <div className="links">
        <NavLink end to="/">
          Home
        </NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/Contact">Contact</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
