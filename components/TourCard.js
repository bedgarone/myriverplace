import React from "react";
import Image from "next/image";

const TourCard = () => {
  return (
    <div className="tour-container">
      <div className="tour-image">
        <Image
          src="/assets/tastingtour.png"
          alt="Problem with this image"
          layout="fill"
        />
        <div className="tour-title">
          Douro Valley Region for a Port Wine Tasting
        </div>
      </div>
      <div className="tour-detail">
        <div className="apart-btn tour-btn">Tour Details</div>
      </div>
    </div>
  );
};

export default TourCard;
