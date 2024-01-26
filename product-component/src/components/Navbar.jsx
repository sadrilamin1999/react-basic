import React from "react";

const Navbar = ({ count }) => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="total">{count}</div>
      </div>
    </nav>
  );
};

export default Navbar;
