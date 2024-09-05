import React, { useState } from "react";
import jsonData from "../restApi.json"; 
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [show, setShow] = useState(false);

  // Access the data from the first element in the array
  const navbarLinks = jsonData.data[0].navbarLinks;

  if (!navbarLinks) {
    return <div>Error loading navigation links</div>;
  }

  return (
    <nav>
      <div className="logo">ZOBATO</div>
      <div className={show ? "navLinks showmenu" : "navLinks"}>
        <div className="links">
          {navbarLinks.map((element) => (
            <Link
              to={element.link}
              spy={true}
              smooth={true}
              duration={500}
              key={element.id}
              onClick={() => setShow(false)} // Close menu on link click
            >
              {element.title}
            </Link>
          ))}
        </div>
      </div>
      <div className="hamburger" onClick={() => setShow(!show)} aria-label="Toggle menu">
        <GiHamburgerMenu />
      </div>
    </nav>
  );
};

export default Navbar;
