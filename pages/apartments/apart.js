import React from "react";
import ImageGallery from "react-image-gallery";

const Apartment = () => {
  const images = [
    {
      original: "/assets/main01.jpg",
      thumbnail: "/assets/main01.jpg",
    },
    {
      original: "/assets/main02.jpg",
      thumbnail: "/assets/main02.jpg",
    },
  ];
  return (
    <>
      <div className="apart-main-image">
        <div className="cover-dark"></div>
        <img src="/assets/main01.jpg" />
        <div className="apart-main-container">
          <div className="title">Apartment #01</div>
        </div>
      </div>
      <div className="apart-text gen-padding">
        Apartment #01 is a lovely apartment with two bedrooms, river view and a
        lot of space.
      </div>
      <div className="apart-section gen-margin">
        <i class="bi bi-camera"></i>Gallery
        <div className="divider"></div>
      </div>
      <div className="apart-slider">
        <ImageGallery items={images} />
      </div>
    </>
  );
};

export default Apartment;
