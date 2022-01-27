import React from "react";
import ImageGallery from "react-image-gallery";
import Footer from "../../components/Footer";

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
          <div className="title">My River Place #1</div>
        </div>
      </div>
      <div className="apart-text gen-padding">
        Apartment #01 is a lovely apartment with two bedrooms, river view and a
        lot of space.
      </div>
      <div className="apart-section gen-margin">
        <i className="bi bi-house"></i>Spaces
        <div className="divider"></div>
      </div>
      <div className="spaces">
        <div className="space">
          <div className="flex-row">
            <i className="bi bi-person-fill"></i>
            <i className="bi bi-person-fill"></i>
          </div>
          <div>Bedroom 1</div>
          <div className="subtitle">1 double bed</div>
        </div>
        <div className="space">
          <div className="flex-row">
            <i className="bi bi-person-fill"></i>
            <i className="bi bi-person-fill"></i>
            <i className="bi bi-person-fill"></i>
          </div>
          <div>Bedroom 2</div>
          <div className="subtitle">3 single beds</div>
        </div>
      </div>
      <div className="grey-backg gen-mt">
        <div className="apart-section gen-margin">
          <i className="bi bi-camera"></i>Gallery
          <div className="divider"></div>
        </div>
        <div className="apart-slider">
          <ImageGallery
            items={images}
            showFullscreenButton={false}
            showPlayButton={false}
          />
        </div>
      </div>
      <div className="check-in">
        <div>
          <i className="bi bi-door-closed"></i>
          <strong>EASY CHECK&#8209;IN</strong>
        </div>
        <div className="description">with entry codes</div>
      </div>
      <div className="apart-section gen-margin gen-mt">
        <i className="bi bi-check2-square"></i>Amenities
        <div className="divider"></div>
      </div>
      <div className="amenities gen-margin">
        <div className="item">
          <i className="bi bi-caret-right-fill"></i>Teste 1
        </div>
        <div className="item">
          <i className="bi bi-caret-right-fill"></i>Tesdfsmdflte 1
        </div>
        <div className="item">
          <i className="bi bi-caret-right-fill"></i>Testdlfe 1
        </div>
        <div className="item">
          <i className="bi bi-caret-right-fill"></i>Teste 1f
        </div>
        <div className="item">
          <i className="bi bi-caret-right-fill"></i>Testesssss 1
        </div>
      </div>
      <div className="book-apt gen-mt">
        Book this apartment on
        <div className="book-btn">
          <img src="/assets/airbnb.png" alt="airbnb logo" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Apartment;
