import React from "react";

import HeroSection from "./ui/HeroSection";
import LiveAuction from "./ui/Live-auction/LiveAuction";
import SellerSection from "./ui/Seller-section/SellerSection";
import Trending from "./ui/Trending-section/Trending";
import StepSection from "./ui/Step-section/StepSection";


const Home = () => {
  return (
    <>
      <HeroSection />
      <LiveAuction />
      <SellerSection />
      <Trending />
      <StepSection />
    </>
  );
};

export default Home;
