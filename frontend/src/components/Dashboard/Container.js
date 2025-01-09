import React from "react";
import "../../styles/Container.css";
import TopContainer from "./TopContainer";
import MainContainer from "./MainContainer";

function Container() {
  return (
    <div className="container">
      <TopContainer />
      <MainContainer />
    </div>
  );
}

export default Container;
