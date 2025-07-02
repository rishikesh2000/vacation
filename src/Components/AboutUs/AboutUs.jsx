import React from "react";
import "./AboutUs.css";
import { FiPhoneCall, FiMapPin } from "react-icons/fi";
import { FaPlaneDeparture, FaHotel } from "react-icons/fa";

const AboutUs = () => {
  const services = [
    { icon: <FiPhoneCall size={50} />, label: "Advice & Support" },
    { icon: <FaPlaneDeparture size={50} />, label: "Air Ticketing" },
    { icon: <FaHotel size={50} />, label: "Hotel Services" },
    { icon: <FiMapPin size={50} />, label: "Tour Packages" },
  ];
  return (
    <div className="aboutUsContainerAll">
      <div className="aboutUsContainer">
        {/* Hero Section */}
        <div className="heroBanner">
          <div className="overlay">
            <h1>ABOUT US</h1>
          </div>
        </div>

        {/* Unified Text + Image Section */}
        <div className="introSection">
          <div className="textSection">
            <h2>Why Choose Us</h2>
            <p>
              At Sky High Luxury Vacations, we believe that travel is more than
              just a destination — it's an experience that should elevate your
              spirit and broaden your horizons. Our commitment is to deliver
              highly personalized service, ensuring your journey is seamless
              from the very first step.
            </p>
            <p>
              Whether you're dreaming of a tranquil escape, a cultural
              deep-dive, or an adrenaline-filled adventure, Sky High Luxury
              Vacations is your trusted partner in crafting extraordinary
              experiences. Each itinerary is thoughtfully tailored to reflect
              your unique style and desires.
            </p>
            <p>
              Step into a world where luxury meets adventure, and where every
              detail is curated to perfection. With Sky High Luxury Vacations,
              discover the true meaning of unforgettable travel — crafted with
              care, delivered with excellence.
            </p>
            <p className="features">
              Trusted Safety Standards | Smart & Flexible Travel Packages |
              Professional Itinerary Design | Fast & Transparent Communication |
              Personalized Planning | Friendly and Reliable Support
            </p>
          </div>

          <div className="imageSection">
            <img
              className="img1"
              src="https://treehouseluxuryvacations.com/images/new-deal/deal3.jpg"
              alt="img1"
            />
            <img
              className="img2"
              src="https://treehouseluxuryvacations.com/images/new-deal/deal5.jpg"
              alt="img2"
            />
          </div>
        <div className="restText">
  <p>
    Sky High Luxury Vacations was created with a clear purpose: to provide travelers with unforgettable journeys, combining inspiring destinations with personalized, budget-conscious luxury — all in one seamless experience. Our mission is to make exceptional travel not just a dream, but a reality for every explorer.
  </p>
  <p>
    Today, our global presence includes a dynamic network of 250 dedicated travel professionals and collaborations with over 6,500 premium properties. With affiliations to more than 64 renowned hotel brands across the world, Sky High Luxury Vacations continues to set new benchmarks in hospitality, service, and unforgettable travel experiences.
  </p>
</div>


          <div className="serviceGrid">
            {services.map((service, index) => (
              <div className="serviceCard" key={index}>
                <div className="icon">{service.icon}</div>
                <p>{service.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="experienceSection">
        <div className="leftImage">
          <img
            src="https://treehouseluxuryvacations.com/images/new-deal/deal6.jpg"
            alt="Hiking Adventure"
          />
        </div>

       <div className="rightContent">
  <p className="tagline">
    About <span>Sky High Luxury Vacations Pvt. Ltd.</span>
  </p>
  <h2>We're truly dedicated to making your travel experience exceptional</h2>
  <p>
    Sky High Luxury Vacations stands as a leader in the global hospitality landscape, celebrated for its exclusive portfolio and world-class reputation. From iconic landmarks and lavish resorts to elegant urban escapes, our offerings blend sophistication with personalized service.
  </p>
  <p>
    We maintain the highest standards across our entire network, ensuring a consistently premium experience at every destination. Thanks to our centralized systems and strong global partnerships, guests enjoy the same exceptional amenities and comfort wherever they travel. At Sky High Luxury Vacations, every journey becomes a signature experience.
  </p>

  <div className="thumbnailRow">
    <img
      src="https://treehouseluxuryvacations.com/images/new-deal/deal1.jpg"
      alt="t1"
    />
    <img
      src="https://treehouseluxuryvacations.com/images/new-deal/deal2.jpg"
      alt="t2"
    />
    <img
      src="https://treehouseluxuryvacations.com/images/new-deal/deal3.jpg"
      alt="t3"
    />
    <img
      src="https://treehouseluxuryvacations.com/images/new-deal/deal4.jpg"
      alt="t4"
    />
    <img
      src="https://treehouseluxuryvacations.com/images/new-deal/deal5.jpg"
      alt="t5"
    />
  </div>
</div>

      </div>
    </div>
  );
};

export default AboutUs;
