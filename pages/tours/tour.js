import React from "react";
import ImageGallery from "react-image-gallery";
import Footer from "../../components/Footer";

const Tour = () => {
  const images = [
    {
      original: "/assets/tastingtour.png",
      thumbnail: "/assets/tastingtour.png",
    },
    {
      original: "/assets/main02.jpg",
      thumbnail: "/assets/main02.jpg",
    },
  ];
  return (
    <div className="tour-backg">
      <div className="tour-main-tab">
        <div className="tour-main-container">
          <div className="title">
            Douro Valley Region for a Port Wine Tasting Full Day Tour From Porto
          </div>
        </div>
      </div>
      <div className="tour-slider">
        <ImageGallery
          items={images}
          showThumbnails={false}
          showFullscreenButton={false}
          showPlayButton={false}
        />
      </div>
      <div className="gen-margin">
        <div className="tour-main-details extra-line">
          <div className="time">
            <i className="bi bi-stopwatch"></i> 8 hours
          </div>
          <div className="meet-point">
            <i className="bi bi-geo"></i>Cruise Port, Address or Intersection
          </div>
        </div>
      </div>
      <ul className="timeline gen-padding">
        <li>
          <h4>8:30</h4>
          <h5>Departure</h5>
        </li>
        <li>
          <h4>10:00</h4>
          <h5>Arrival to Pinhão</h5>
          <p>
            My suggestion goes to a relaxed cruise along the dazzling Douro
            River in the typical Rabelo boat, to enjoy the vineyards and
            terraces along this amazing Valley.
          </p>
        </li>
        <li>
          <h5>Lunch</h5>
          <p>Difficult decisions to make! :)</p>
        </li>
      </ul>
      <div className="gen-margin">
        <div className="tour-main-details extra-line">
          <div className="changes">
            The tour timeline will never be strict. Changes are always possible
            and will be suggested during previous contacts.
          </div>
        </div>
      </div>
      <div className="transportation">
        <div>
          <i className="bi bi-signpost-fill"></i>
          Transportation
        </div>
      </div>
      <div className="transp-description">
        The transport will be carried out in a modern and spacious vehicle
        (7-seat Seat Alhambra), equipped with air conditioning and all the
        passive safety systems to provide you all the comfort on board.
        <div className="option">
          9-seat vehicle transportation is available upon request.
        </div>
        <div className="option">
          Vehicle transportation is available upon request.
        </div>
      </div>
      <div className="tour-section gen-margin gen-mt">
        <i className="bi bi-wallet2"></i>Extra optional costs
        <div className="divider"></div>
      </div>
      <div className="extra-costs gen-margin">
        <div className="item">
          <i className="bi bi-caret-right-fill"></i>Tasting visit at Quinta do
          Seixo
          <div className="value">10€ p.p.</div>
        </div>
        <div className="item">
          <i className="bi bi-caret-right-fill"></i>Tesdfsmdflte 1{" "}
          <div className="value">10€ to 23€</div>
        </div>
        <div className="item">
          <i className="bi bi-caret-right-fill"></i>Tesdfsmdflte 1{" "}
          <div className="value">23€</div>
        </div>
      </div>
      <div className="book-apt gen-mt">
        Book this tour on
        <div className="book-btn book-btn-tour">
          <img src="/assets/toursbylocals.png" alt="toursbylocals logo" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Tour;
