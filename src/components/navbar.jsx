import React from "react";

const Navbar = (props) =>{
  return (
    <nav className="navbar navbar-light bg-light">
      <span> {props.total}</span>
    </nav>
  );
}

export default Navbar;
