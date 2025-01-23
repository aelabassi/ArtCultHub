import React, { useState } from "react";
import detectEthereumProvider from "@metamask/detect-provider";
import CommonSection from "../components/ui/Common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import "../styles/wallet.css";

const walletData = [
  {
    title: "Bitcoin",
    desc: "Connect to your Bitcoin wallet.",
    icon: "ri-bit-coin-line",
  },
  {
    title: "Metamask",
    desc: "Connect to your Metamask wallet.",
    icon: "ri-money-cny-circle-line",
  },
];

const Wallet = () => {
  const [selectedWallet, setSelectedWallet] = useState("");

  // Function to handle wallet connection logic
  const connectWallet = async () => {
    try {
      switch (selectedWallet) {
        case "Bitcoin":
          alert("Redirecting to Bitcoin wallet...");
          // Add Bitcoin wallet logic here if applicable.
          break;

        case "Metamask":
          const metamaskprovider = await detectEthereumProvider();
          if (!metamaskprovider) {
            alert("MetaMask is not installed. Please install MetaMask.");
            return;
          }
          const metamaskaccounts = await metamaskprovider.request({ method: "eth_requestAccounts" });
          alert(`Connected MetaMask Wallet: ${metamaskaccounts[0]}`);
          break;

        default:
          alert("Please select a wallet to connect.");
      }
    } catch (error) {
      console.error(error);
      alert(`Failed to connect to ${selectedWallet} wallet.`);
    }
  };

  return (
    <>
      <CommonSection title="Connect Wallet" />
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <div className="w-50 m-auto">
                <h3 className="text-light">Connect your wallet</h3>
                <p>
                  Choose a wallet to connect to your account. Make sure the wallet is installed and set up!
                </p>
              </div>
            </Col>
          </Row>

          {/* Render available wallets */}
          <Row className="justify-content-center">
            {walletData.map((item, index) => (
              <Col lg="3" md="4" sm="6" key={index} className="mb-4 text-center">
                <div
                  className="wallet__item"
                  onClick={() => setSelectedWallet(item.title)} // Set the selected wallet
                  style={{
                    cursor: "pointer",
                    border: selectedWallet === item.title ? "2px solid #4caf50" : "",
                    padding: "20px",
                    borderRadius: "10px",
                  }}
                >
                  <span>
                    <i className={`${item.icon} wallet-icon`} style={{ fontSize: "2rem" }}></i>
                  </span>
                  <h5>{item.title}</h5>
                  <p>{item.desc}</p>
                </div>
              </Col>
            ))}
          </Row>

          {/* Button to connect the selected wallet */}
          <Row>
            <Col lg="12" className="text-center mt-4">
              <button className="btn btn-primary" onClick={connectWallet} disabled={!selectedWallet}>
                Connect {selectedWallet || "Wallet"}
              </button>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Wallet;
