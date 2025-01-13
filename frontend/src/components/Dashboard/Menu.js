import React, { useState } from "react";
import "../../styles/Menu.css";
import logo from "../../assets/logo-ach.png";
import {
  FaDelicious,
  FaShoppingCart,
  FaWallet,
  FaChartLine,
  FaRegClock,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

function Menu() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleMenuClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <menu>
      <img src={logo} alt="Logo" />

      <ul id="mainMenu">
        {menuItems.map((item, index) => (
          <Icon
            key={index}
            icon={item.icon}
            active={activeIndex === index}
            onClick={() => handleMenuClick(index)}
          />
        ))}
      </ul>

      <ul className="lastMenu">
        {lastMenuItems.map((item, index) => (
          <Icon
            key={index}
            icon={item.icon}
            active={false} // For the last menu items, no active state
            onClick={() => {}}
          />
        ))}
      </ul>
    </menu>
  );
}

const Icon = ({ icon, active, onClick }) => (
  <li className={active ? "active" : ""} onClick={onClick}>
    {/* Removed the <a> tag to prevent redirection */}
    <span>{icon}</span>
  </li>
);

const menuItems = [
  { icon: <FaDelicious /> },
  { icon: <FaShoppingCart /> },
  { icon: <FaWallet /> },
  { icon: <FaChartLine /> },
  { icon: <FaRegClock /> },
];

const lastMenuItems = [
  { icon: <FaCog /> },
  { icon: <FaSignOutAlt /> },
];

export default Menu;
