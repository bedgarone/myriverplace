import React from "react";
import ImageGallery from "react-image-gallery";
import Footer from "../../components/Footer";

import client from "../../client";
import urlFor from "../../imageUrlBuilder";
import { galleryUrlArray } from "../../imageUrlBuilder";

const Apartment = ({ apartments }) => {
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

  const apt = apartments[0];
  console.log(apt);
  return (
    <>
      <div className="apart-main-image">
        <div className="cover-dark"></div>
        <img src={urlFor(apt["mainimg"]).url()} />
        <div className="apart-main-container">
          <div className="title">My River Place #1</div>
        </div>
      </div>
      <div className="apart-text gen-padding">{apt["description"]}</div>
      <div className="apart-section gen-margin">
        <i className="bi bi-house"></i>Spaces
        <div className="divider"></div>
      </div>
      <div className="spaces">
        {apt["spaces"].map((sp) => (
          <div className="space" key={sp["_key"]}>
            <div className="flex-row">
              {[...Array(sp["pax"])].map((i, key) => (
                <i className="bi bi-person-fill" key={i + key}></i>
              ))}
            </div>
            <div>{sp["name"]}</div>
            <div className="subtitle">{sp["beds"]}</div>
          </div>
        ))}
      </div>
      <div className="grey-backg gen-mt">
        <div className="apart-section gen-margin">
          <i className="bi bi-camera"></i>Gallery
          <div className="divider"></div>
        </div>
        <div className="apart-slider">
          <ImageGallery
            items={galleryUrlArray(apt["gallery"])}
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
        {apt["amenities"].map((am, key) => (
          <div className="item" key={key}>
            <i className="bi bi-caret-right-fill"></i>
            {am}
          </div>
        ))}
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

export async function getStaticProps(context) {
  const apartments = await client.fetch(`
    *[_type == "apartment"]
`);
  return {
    props: {
      apartments,
    },
  };
}

export default Apartment;
