import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

import "./step-section.css";

const STEP__DATA = [
  {
    title: "Setup your wallet",
    desc: "Start by setting up a secure wallet to manage your digital assets. This will enable you to store and trade NFTs while ensuring your transactions are safe. ",
    icon: "ri-wallet-line",
  },

  {
    title: "Create your collection",
    desc: "Curate and showcase your digital artwork or cultural pieces in a personalized collection. Highlight the beauty of Moroccan heritage through unique designs. ",
    icon: "ri-layout-masonry-line",
  },

  {
    title: "Add your NFTs",
    desc: "Mint your digital creations into NFTs. Share the stories and inspirations behind your art, making them accessible to a global audience of collectors.",
    icon: "ri-image-line",
  },

  {
    title: "List them for sale",
    desc: "Display your NFTs in the marketplace for collectors to discover and purchase. Promote Moroccan art and culture while earning from your creations. ",
    icon: "ri-list-check",
  },
];

const StepSection = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="mb-4">
            <h3 className="step__title">Create and sell your NFTs</h3>
          </Col>

          {STEP__DATA.map((item, index) => (
            <Col lg="3" md="4" sm="6" key={index} className="mb-4">
              <div className="single__step__item">
                <span>
                  <i class={item.icon}></i>
                </span>
                <div className="step__item__content">
                  <h5>
                    <Link to="/wallet">{item.title}</Link>
                  </h5>
                  <p className="mb-0">{item.desc}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default StepSection;
