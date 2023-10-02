import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div id="nav">
      <h2>CHM Tracker</h2>
      <div id="nav-part-2">
        <h4>
          <Link href="./">Home</Link>
        </h4>
        <h4>
          <Link href="./Meeting">Meeting List</Link>
        </h4>
        <h4>
          <Link href="./About">About</Link>
        </h4>
      </div>
      <button>Login</button>
    </div>
  );
};

export default Header;
