import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div>
      <ul>
        <Link to="/login">Login | </Link>
        <Link to="/register"> Register | </Link>
        <Link to="/lists"> List Checklist | </Link>
        <Link to="/lists/edit"> Form Checklist | </Link>
        <Link to="/listchecklistitem"> List Checklist Item | </Link>
        <Link to="/formchecklistitem"> Form Checklist Item | </Link>
      </ul>
    </div>
  );
}

export default Navigation;
