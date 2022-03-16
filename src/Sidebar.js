import React from "react";
import logo from "./logo.svg";
import { FaTimes } from "react-icons/fa";
import { social, links } from "./data";
import { useGlobelContext } from "./context";

const Sidebar = () => {
  const { isSideBarOpen, closeSideBar } = useGlobelContext();
  return (
    <aside
      className={` ${isSideBarOpen ? "sidebar show-sidebar" : "sidebar"} `}
    >
      <div className="sidebar-header">
        <img src={logo} alt="coding addict" className="logo" />
        <button className="close-btn" onClick={closeSideBar}>
          <FaTimes />
        </button>
      </div>
      <ul className="links">
        {links.map((link) => {
          const { id, url, icon, text } = link;
          return (
            <li key={id}>
              <a href={url}>
                {icon}
                {text}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="social-icons">
        {social.map((social) => {
          const { id, url, icon } = social;
          return (
            <li key={id}>
              <a href={url}>{icon}</a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
