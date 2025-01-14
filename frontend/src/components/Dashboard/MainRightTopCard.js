import React from "react";

function MainRightTopCard() {
  return (
    <div className="topCard">
      <div className="topCard_name">
        <h2>Statistics</h2>
        <a href="/#">View More</a>
      </div>

      <div className="earning">
        <p>
          Artwork Sold <span>497</span>
        </p>

        <p>
          Artwork Canceled <span>6</span>
        </p>

        <p>
          Artwork Pending <span>25</span>
        </p>

        <p>
          Artwork Delivered <span>340</span>
        </p>

        <p>
          Total Earning <span>4700 MAD</span>
        </p>
      </div>
    </div>
  );
}

export default MainRightTopCard;
