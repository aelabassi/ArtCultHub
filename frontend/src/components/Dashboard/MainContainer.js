import React from "react";
import "../../styles/MainContainer.css";
import Banner from "../../img/1.jpg";
import CardMain from "./CardMain";
import Card1 from "../../img/card1.jpg";
import Card2 from "../../img/card2.jpg";
import Card3 from "../../img/card3.jpg";
import Card4 from "../../img/card4.jpg";
import Card5 from "../../img/card5.jpg";
import Card6 from "../../img/card6.jpg";
import MainRightTopCard from "./MainRightTopCard";
import MainRightBottomCard from "./MainRightBottomCard";

function MainContainer() {
  return (
    <div className="maincontainer">
      <div className="left">
        <div
          className="banner"
          style={{
            background: `url(${Banner})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="textContainer">
            <h1>Round Hall</h1>
            <h2>199 MAD</h2>
            <p>Uploaded by Youness Daoudi</p>
            <div className="bid">
              <a href="/#" className="button">
                Bid Now
              </a>
              <p>
                Ending In <span>2d:15h:20m</span>
              </p>
            </div>
          </div>
        </div>

        <div className="cards">
          <div className="filters">
            <div className="popular">
              <h2>Feed</h2>
              <a href="/#" className="button2">
                Popular
              </a>
            </div>
            <div className="filter_buttons">
              <a href="/#" className="button">
                All
              </a>
              <a href="/#" className="button2">
                Illustration
              </a>
              <a href="/#" className="button2">
                Art
              </a>
              <a href="/#" className="button2">
                Music
              </a>
            </div>
          </div>

          <main>
            <CardMain imgSrc={Card1} title={"Dresses Indians"} hearts={"127"} />
            <CardMain imgSrc={Card2} title={"Silk Threads"} hearts={"150"} />
            <CardMain imgSrc={Card3} title={"Dishes Chamaliy"} hearts={"165"} />
            <CardMain imgSrc={Card4} title={"Light Dream"} hearts={"89"} />
            <CardMain imgSrc={Card5} title={"Caftan Randa"} hearts={"65"} />
            <CardMain imgSrc={Card6} title={"Food Coach"} hearts={"18"} />
          </main>
        </div>
      </div>
      <div className="right">
        <MainRightTopCard />
        <MainRightBottomCard />
      </div>
    </div>
  );
}

export default MainContainer;
