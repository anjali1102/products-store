import React from "react";
import { NavLink } from "react-router-dom";
import brandlogo from "../../assets/websitelogo.png";
import { BiUser } from "react-icons/bi";
import "./Navbar.css";

const Navbar = () => {
  const navlinks = [
    { id: 1, name: "HOME", link: "/" },
    { id: 1, name: "THE JOURNEY", link: "/journey" },
    { id: 1, name: "TEAM", link: "/team" },
    { id: 1, name: "STORE", link: "/store" },
    { id: 1, name: "CONTACT", link: "/contact" },
  ];
  const activelinkStyle = ({ isActive }) => ({
    borderBottom: isActive && "2px solid",
  });
  return (
    <main className="navbar_wrapper flex-align-center pt-4 pb-2">
      <section className="logo">
        <img src={brandlogo} alt="brandlogo" className="logoImg" />
      </section>
      <ul className="flex navlinks">
        {navlinks.map(({ id, name, link }) => (
          <li key={id}>
            <NavLink to={link} style={activelinkStyle}>
              {name}
            </NavLink>
          </li>
        ))}
      </ul>
      <section className="user flex-align-center ">
        <BiUser size={30} />
        <span>Gagan</span>
      </section>
    </main>
  );
};

export { Navbar };
