import React, { useRef, useEffect, useState } from "react";
import "./header.css";
import { Container } from "reactstrap";
import logo from "../../assets/logo.png";

import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const NAV__LINKS = [
  { display: "Home", url: "/home" },
  { display: "Market", url: "/market" },
  { display: "Create", url: "/create" },
  { display: "Contact", url: "/contact" },
];

const Header = () => {
  const navigate = useNavigate();
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const [walletAddress] = useState("");

  const handleScroll = () => {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      headerRef.current.classList.add("header__shrink");
    } else {
      headerRef.current.classList.remove("header__shrink");
    }
  };

  const toggleMenu = () => menuRef.current.classList.toggle("active__menu");

  useEffect(() => {
    if (typeof window.ethereum === 'undefined') {
      alert("MetaMask is not installed. Please install it from https://metamask.io/download.html");
    } else {
      console.log("MetaMask is installed");
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /*const connectWallet = async () => {
    // Check if MetaMask is installed
    if (typeof window.ethereum === 'undefined') {
      alert("MetaMask is not installed. Please install it from https://metamask.io/download.html");
      return; // Exit the function if MetaMask is not found
    }
  
    try {
      // Create a Web3Modal instance
      const web3Modal = new Web3Modal();
      const instance = await web3Modal.connect();
      
      // Connect to the Ethereum provider (MetaMask)
      const provider = new ethers.providers.Web3Provider(instance);
      const signer = provider.getSigner();
      
      // Get the connected wallet address
      const address = await signer.getAddress();
      
      // Update the wallet address state
      setWalletAddress(address);
      
      // Show an alert with the connected wallet address
      alert(`Connected Wallet Address: ${address}`);
    } catch (error) {
      // Handle errors, including when the modal is closed by the user
      if (error.code === 4001) {
        alert("You declined to connect your wallet.");
      } else {
        console.error("Error connecting wallet:", error);
        alert("Failed to connect wallet. Please try again.");
      }
    }
  };*/
  
  
  

  return (
    <header className="header" ref={headerRef}>
      <Container style={{paddingTop : "0" , marginTop : "0"}}>
        <div className="navigation">
          <div className="logo">
            <img src={logo} alt="ArtCultHub Logo" className="logo__image" />
          </div>

          <div className="nav__menu" ref={menuRef} onClick={toggleMenu}>
            <ul className="nav__list">
              {NAV__LINKS.map((item, index) => (
                <li className="nav__item" key={index}>
                  <NavLink
                    to={item.url}
                    className={(navClass) =>
                      navClass.isActive ? "active" : ""
                    }
                  >
                    {item.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="nav__right d-flex align-items-center gap-5">
            <button
              className="btn d-flex gap-2 align-items-center"
              onClick={() => navigate("/wallet")} style={{color : "white"}}
            >
              <span>
                <i className="ri-wallet-line"></i>
              </span>
              {walletAddress
                ? `${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}`
                : "Connect Wallet"}
            </button>
            <button className="btn d-flex gap-2 align-items-center">
              <span>
                <i className="ri-account-pin-circle-line"></i>
              </span>
              <NavLink to="/signin">Sign In/Sign Up</NavLink>
            </button>

            <span className="mobile__menu">
              <i className="ri-menu-line" onClick={toggleMenu}></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
