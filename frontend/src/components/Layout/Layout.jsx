import React from "react";
import Routers from "../../routes/Routers";
import Header from "../Header/Header";
import Footer from "../footer/footer";

const Layout = () => {
  return (
    <div>
      <Header />
      <div>
        <Routers />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
