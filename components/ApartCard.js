import React from "react";
import Image from "next/image";

const ApartCard = () => {
  return (
    <div className="apart-container">
      <div className="apart-image">
        <Image
          src="/assets/main01.jpg"
          alt="Problem with this image"
          layout="fill"
        />
      </div>
      <div className="apart-detail">
        <div className="flex-end">
          <div className="apart-numb">4</div>
        </div>
        <div className="apart-title">Apartment #4</div>
        <div className="apart-building">General Torres Builing</div>
        <div className="apart-description">
          Up to 6 <i class="bi bi-person-fill"></i>
        </div>
        <div className="apart-btn">Apartment Details</div>
      </div>
    </div>
  );
};

export default ApartCard;
