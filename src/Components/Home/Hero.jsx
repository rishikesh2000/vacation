import React, { useState, useEffect } from "react";
import {
  FaSearch,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaUserFriends,
  FaStar,
  FaArrowRight,
} from "react-icons/fa";
import Select from "react-select";
import DatePicker from "react-datepicker";
import { City } from "country-state-city";

import "react-datepicker/dist/react-datepicker.css";
import "./Hero.css";
import { FiPhone, FiMap, FiHome, FiMapPin } from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FaQuoteLeft, FaEye, FaComment } from "react-icons/fa";

const travelersOptions = [
  { value: "1", label: "1 Adult" },
  { value: "2", label: "2 Adults" },
  { value: "2-1", label: "2 Adults, 1 Child" },
  { value: "2-2", label: "2 Adults, 2 Children" },
];

const tours = [
  {
    title: "New York Tour",
    image:
      "https://treehouseluxuryvacations.com/images/destination/destination9.jpg",
  },
  {
    title: "Turkey Tour",
    image:
      "https://treehouseluxuryvacations.com/images/destination/destination3.jpg",
  },
  {
    title: "Armania Tour",
    image:
      "https://treehouseluxuryvacations.com/images/destination/destination4.jpg",
  },
];

const tours1 = [
  {
    title: "Manchester Tour",
    image:
      "https://treehouseluxuryvacations.com/images/destination/destination5.jpg",
  },
  {
    title: "kathmandu Tour",
    image:
      "https://treehouseluxuryvacations.com/images/destination/destination7.jpg",
  },

  {
    title: "Norwich Tour",
    image:
      "https://treehouseluxuryvacations.com/images/destination/destination8.jpg",
  },
  {
    title: "Norwich Tour",
    image:
      "https://treehouseluxuryvacations.com/images/destination/destination9.jpg",
  },
];

const packages = [
  {
    title: "Pushkar",
    description:
      "Aaram Bagh Pushkar is located in the foothills of Aravali, near the Goddess Savitri Temple and 5 km",
    image:
      "https://treehouseluxuryvacations.com/images_new/properties_img/083120210817201_domesticabp2.jpg",
  },
  {
    title: "Goa",
    description:
      "The resort offers 65 beautiful rooms and suites. All ground floor rooms provide access to a compact",
    image:
      "https://treehouseluxuryvacations.com/images_new/properties_img/083120210824221_domesticNew%20Project.jpg",
  },
  {
    title: "Udaipur",
    description:
      "Located in Udaipur, 200 m from Lake Pichola, Aaram Mahal by Pachar Group provides accommodation with",
    image:
      "https://treehouseluxuryvacations.com/images_new/properties_img/083120210852511_domesticNew%20Project%20(3).jpg",
  },
  {
    title: "Bengaluru",
    description:
      "Lake facing, Lemon Tree Hotel, City Center Bengaluru, is situated less than 1 km from Commercial Str",
    image:
      "https://treehouseluxuryvacations.com/images_new/properties_img/083120210900131_domesticNew%20Project%20(3).jpg",
  },
  {
    title: "Dharamshala",
    description:
      "Boasting a garden, bar and views of river, Nishaana – A Luxury Resort in Dharamshala is set in Dharam",
    image:
      "https://treehouseluxuryvacations.com/images_new/properties_img/083120210905401_domesticNew%20Project%20(3).jpg",
  },
  {
    title: "Shimla",
    description:
      "Marigold Sarovar Portico is located at Mashobra Hills in Shimla. The resort offers a virtual bonanza",
    image:
      "https://treehouseluxuryvacations.com/images_new/properties_img/083120211037201_domesticNew%20Project.jpg",
  },
];

const selectStyles = {
  menuPortal: (base) => ({ ...base, zIndex: 9999 }),
  menu: (base) => ({ ...base, zIndex: 9999 }),
};

const testimonials = [
  {
    name: "Rahul sagwan",
    text: `It was Very good experience, Awesome Weather, Hotel Staff was also good, Vacation team was also good and their coordination is also good, no problem were facing while booking the hotel, buffet etc. It was memorable trip, must visit.`,
    stars: 5,
  },
  {
    name: "Trippy singh",
    text: `What truly made this holiday unforgettable was how well it was curated. We went snorkeling in crystal-clear waters, saw colorful marine life, witnessed a breathtaking sunset, and even enjoyed a traditional Lakshadweep dance. The activity was well-organized and safe.`,
    stars: 5,
  },
  {
    name: "Aarti mehra",
    text: `Heaven on earth 🌍 the trip was worth it I mean more than that, truly wanna appreciate it ❤️ thanks`,
    stars: 4,
  },
];

const articles = [
  {
    title: "The real voyage does not consist in seeking new landscapes",
    excerpt:
      "Excited him now natural saw passage offices you minuter. By as asked being court hopes. Farther so friends am to detract...",
    date: "4th Aug 2020",
    views: 3,
    comments: 2,
    category: "Tour, Tourism, Travel",
    author: "Jack Well Fardez",
    image: "https://treehouseluxuryvacations.com/images/blog/blog2.jpg",
    type: "featured",
  },
  {
    title: "Mountains is always right destination.",
    image: "https://treehouseluxuryvacations.com/images/blog/blog3.jpg",
    date: "4th Aug 2020",
    views: 3,
    comments: 2,
    category: "Travel",
  },
  {
    title: "We have not all those who wander are lost.",
    image: "https://treehouseluxuryvacations.com/images/blog/blog4.jpg",
    date: "4th Aug 2020",
    views: 3,
    comments: 2,
    category: "Tourism",
  },
  {
    title: "Here Our’s Life is either a daring adventure.",
    image: "https://treehouseluxuryvacations.com/images/blog/blog5.jpg",
    date: "4th Aug 2020",
    views: 3,
    comments: 2,
    category: "Tour",
  },
];

const featuredArticle = {
  title: "The real voyage does not consist in seeking new landscapes",
  excerpt: `Excited him now natural saw passage offices you minuter. At by asked being court hopes. Farther so friends am to detract. Forbade concern do private be. Offending residence but men engrossed shy. One of the programs is Save Our I have personally in many of the programs mentioned on this site.`,
  date: "4th Aug 2020",
  views: 3,
  comments: 3,
  category: "Tour, Tourism, Travel",
  author: "Jack Well Fardez",
  image: "https://treehouseluxuryvacations.com/images/blog/blog1.jpg",
};

const Hero = () => {
  const [destination, setDestination] = useState(null);
  const [travelers, setTravelers] = useState(null);
  const [departDate, setDepartDate] = useState(null);
  const [returnDate, setReturnDate] = useState(null);
  const [cityOptions, setCityOptions] = useState([]);

  const [activeTab, setActiveTab] = useState("Historical");

  const data = {
    Historical: [
      {
        image:
          "https://treehouseluxuryvacations.com/images/trending/trending8.jpg",
        reviews: 38,
        title: "Nepal Special Tour",
        places: "852 Visiting Places",
        country: "Nepal",
      },
      {
        image:
          "https://treehouseluxuryvacations.com/images/trending/trending11.jpg",
        reviews: 38,
        title: "Canada New Year Tour",
        places: "615 Visiting Places",
        country: "Canada",
      },
      {
        image:
          "https://treehouseluxuryvacations.com/images/trending/trending11.jpg",
        reviews: 25,
        title: "America Christmas Tour",
        places: "926 Visiting Places",
        country: "America",
      },
    ],
    Weekend: [
      {
        image:
          "https://treehouseluxuryvacations.com/images/trending/trending14.jpg",
        reviews: 38,
        title: "Nepal Weekend Tour",
        places: "852 Visiting Places",
        country: "Nepal",
      },
      {
        image:
          "https://treehouseluxuryvacations.com/images/trending/trending13.jpg",
        reviews: 38,
        title: "Canada Weekend Tour",
        places: "615 Visiting Places",
        country: "Canada",
      },
      {
        image:
          "https://treehouseluxuryvacations.com/images/trending/trending7.jpg",
        reviews: 25,
        title: "America Weekend Tour",
        places: "926 Visiting Places",
        country: "America",
      },
    ],
    Holidays: [
      {
        image:
          "https://treehouseluxuryvacations.com/images/trending/trending2.jpg",
        reviews: 38,
        title: "Nepal Holidays Tour",
        places: "852 Visiting Places",
        country: "Nepal",
      },
      {
        image:
          "https://treehouseluxuryvacations.com/images/trending/trending3.jpg",
        reviews: 38,
        title: "Canada Holidays Tour",
        places: "615 Visiting Places",
        country: "Canada",
      },
      {
        image:
          "https://treehouseluxuryvacations.com/images/trending/trending4.jpg",
        reviews: 25,
        title: "America Holidays Tour",
        places: "926 Visiting Places",
        country: "America",
      },
    ],
    "Special Tour": [
      {
        image:
          "https://treehouseluxuryvacations.com/images/trending/trending6.jpg",
        reviews: 38,
        title: "Nepal Special Tour",
        places: "852 Visiting Places",
        country: "Nepal",
      },
      {
        image:
          "https://treehouseluxuryvacations.com/images/trending/trending5.jpg",
        reviews: 38,
        title: "Canada Special Tour",
        places: "615 Visiting Places",
        country: "Canada",
      },
      {
        image:
          "https://treehouseluxuryvacations.com/images/trending/trending9.jpg",
        reviews: 25,
        title: "America Special Tour",
        places: "926 Visiting Places",
        country: "America",
      },
    ],
  };

  const tabs = Object.keys(data);

  useEffect(() => {
    const indianCities = City.getCitiesOfCountry("IN");
    if (indianCities && Array.isArray(indianCities)) {
      const options = indianCities.map((city) => ({
        value: city.name,
        label: city.name,
      }));
      setCityOptions(options);
    }
  }, []);

  return (
    <>
      <section className="heroContainer">
        <video autoPlay muted loop className="heroVideo">
          <source
            src="https://treehouseluxuryvacations.com/images/tour.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className="heroOverlay"></div>
        <div className="heroContent">
          <h1>Explore Exotic Locations</h1>
          <p>Luxury vacations crafted for unforgettable experiences</p>
        </div>
      </section>

      <div className="searchContainer">
        <div className="searchCard">
          <h2 className="searchTitle">
            <FaSearch className="titleIcon" />
            Find Your Perfect Vacation
          </h2>

          <div className="searchForm">
            {/* Destination */}
            <div className="formGroup">
              <div className="inputWithIcon">
                <FaMapMarkerAlt className="inputIcon" />
                <Select
                  className="formInput reactSelect"
                  menuPortalTarget={document.body}
                  styles={selectStyles}
                  options={cityOptions}
                  placeholder="Select"
                  value={destination}
                  onChange={setDestination}
                  isSearchable
                />
              </div>
            </div>

            {/* Depart Date */}
            <div className="formGroup">
              <div className="inputWithIcon">
                <FaCalendarAlt className="inputIcon" />
                <DatePicker
                  selected={departDate}
                  onChange={(date) => setDepartDate(date)}
                  className="formInput"
                  placeholderText="Depart Date"
                  dateFormat="dd/MM/yyyy"
                  minDate={new Date()}
                />
              </div>
            </div>

            {/* Return Date */}
            <div className="formGroup">
              <div className="inputWithIcon">
                <FaCalendarAlt className="inputIcon" />
                <DatePicker
                  selected={returnDate}
                  onChange={(date) => setReturnDate(date)}
                  className="formInput"
                  placeholderText="Return Date"
                  dateFormat="dd/MM/yyyy"
                  minDate={departDate || new Date()}
                />
              </div>
            </div>

            {/* Travelers */}
            <div className="formGroup">
              <div className="inputWithIcon">
                <FaUserFriends className="inputIcon" />
                <Select
                  className="formInput reactSelect"
                  menuPortalTarget={document.body}
                  styles={selectStyles}
                  options={travelersOptions}
                  placeholder="Travelers"
                  value={travelers}
                  onChange={setTravelers}
                />
              </div>
            </div>

            {/* Search Button */}
            <button className="searchButton">
              <FaSearch className="searchIcon" />
              Check Availability
            </button>
          </div>
        </div>
      </div>

      <section className="welcomeSection">
        <div className="welcomeContainer">
          <div className="welcomeText">
            <span className="sectionTag">Tour and travels</span>
            <h2 className="sectionTitle">
              Welcome to Sky High Luxury Vacations Pvt. Ltd.
            </h2>
            <p className="sectionText">
              <strong>Sky High Luxury Vacations Pvt. Ltd.</strong> stands as a
              distinguished leader in the global hospitality industry, offering
              an exceptional collection of accommodations celebrated for their
              excellence. Our diverse portfolio features iconic landmarks,
              luxurious resorts, and sophisticated city-center properties.
            </p>
            <p className="sectionText">
              By upholding rigorous company-wide standards, we ensure a
              consistent experience across all our hotels and resorts.
              Centralized procurement guarantees that guests enjoy the same
              premium amenities no matter their destination. These commitments
              and more make every Sky High Luxury Vacations property a truly
              remarkable experience.
            </p>
          </div>
          <div className="welcomeImage">
            <img
              src="https://treehouseluxuryvacations.com/images_new/index.png"
              alt="Luxury vacation"
            />
          </div>
        </div>
      </section>

      <section class="vacation-gallery">
        <div class="vacation-card">
          <img
            src="https://treehouseluxuryvacations.com/images_new/home/1.jpg"
            alt="Palm Swing"
          />
        </div>
        <div class="vacation-card">
          <img
            src="https://treehouseluxuryvacations.com/images_new/home/2.jpg"
            alt="Cruise Ship"
          />
        </div>
        <div class="vacation-card">
          <img
            src="https://treehouseluxuryvacations.com/images_new/home/3.jpg"
            alt="Beach Hut"
          />
        </div>
        <div class="vacation-card">
          <img
            src="https://treehouseluxuryvacations.com/images_new/home/4.jpg"
            alt="Beach Dinner"
          />
        </div>
      </section>

      <section className="company-intro">
        <div className="company-intro__text">
          <h4 className="company-intro__brand">
            Sky High Luxury Vacations Pvt. Ltd.
          </h4>
          <h2 className="company-intro__heading">
            We're truly dedicated to making
            <br /> your travel experience exceptional.
          </h2>
          <p className="company-intro__desc">
            At Sky High Luxury Vacations, we believe that every journey should
            be a seamless blend of luxury and comfort from beginning to end. As
            a leading name in the holiday hospitality industry, we specialize in
            curating unforgettable luxury vacations across India and around the
            world. Whether you desire a tranquil retreat amidst nature, a
            thrilling adventure, or an enriching cultural exploration, we
            meticulously plan and execute every detail to deliver a flawless and
            memorable experience.
          </p>

          <div className="company-intro__features">
            <ul>
              <li>› Safety Travel System</li>
              <li>› Expert Trip Planning</li>
              <li>› Right Solution & Guide</li>
            </ul>
            <ul>
              <li>› Budget-Friendly Tour</li>
              <li>› Fast Communication</li>
              <li>› 24/7 Customer Support</li>
            </ul>
          </div>
        </div>

        <div className="company-intro__image">
          <img
            src={require("../../Assests/bglogo.png")}
            alt="Sky High Luxury Vacations"
          />
        </div>
        <div className="company-intro__divider"></div>
      </section>

      <section className="services-section">
        <div className="service-card">
          <FiPhone className="service-icon" />
          <h3>Advice & Support</h3>
          <p>
            Travel worry free knowing that we're here if you need us, 24 hours a
            day
          </p>
        </div>

        <div className="service-card">
          <FiMap className="service-icon" />
          <h3>Air Ticketing</h3>
          <p>
            Travel worry free knowing that we're here if you need us, 24 hours a
            day
          </p>
        </div>

        <div className="service-card">
          <FiHome className="service-icon" />
          <h3>Hotel Services</h3>
          <p>
            Travel worry free knowing that we're here if you need us, 24 hours a
            day
          </p>
        </div>

        <div className="service-card">
          <FiMapPin className="service-icon" />
          <h3>Tour Packages</h3>
          <p>
            Travel worry free knowing that we're here if you need us, 24 hours a
            day
          </p>
        </div>
      </section>

      <section className="tours-section">
        <div className="floating-dots"></div>
        <div className="title">
          <h2>
            <span className="highlight">Best Holidays Trips</span> In The World
          </h2>
          <p>
            Travel has helped us to understand the meaning of life and it has
            helped us become better people. Each time we travel, we see the
            world with new eyes.
          </p>
          <div className="divider">------</div>
        </div>

        <div className="tours-grid">
          {tours.map((tour, index) => (
            <div className="tour-card" key={index}>
              <img src={tour.image} alt={tour.title} />
              <div className="hover-overlay">
                <button className="book-btn">Book Now ➜</button>
              </div>
              <div className="tour-info">
                <div className="stars">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} color="#ffc107" size={14} />
                  ))}
                </div>
                <p>{tour.title}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="tours-grid">
          {tours1.map((tour, index) => (
            <div className="tour-card1" key={index}>
              <img src={tour.image} alt={tour.title} />
              <div className="hover-overlay">
                <button className="book-btn">Book Now ➜</button>
              </div>
              <div className="tour-info">
                <div className="stars">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} color="#ffc107" size={14} />
                  ))}
                </div>
                <p>{tour.title}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="packages-section">
        <div className="title">
          <h2>
            Perfect <span className="highlight">Tour Packages</span>
          </h2>
          <p>
            Travel has helped us to understand the meaning of life and it has
            helped us become
            <br />
            better people. Each time we travel, we see the world with new eyes.
          </p>
          <div className="divider">------</div>
        </div>

        <div className="packages-grid">
          {packages.map((pkg, index) => (
            <div className="package-card" key={index}>
              <div className="image-container">
                <img src={pkg.image} alt={pkg.title} />
                <div className="image-gradient"></div> {/* gradient overlay */}
              </div>
              <div className="package-content">
                <div className="stars">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} color="#ffc107" size={14} />
                  ))}
                </div>
                <h4>{pkg.title}</h4>
                <p>{pkg.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="explore-section">
        <div className="overlay"></div>

        <div className="explore-content">
          <div className="text-area">
            <p className="subtitle">FIND NEXT PLACE TO VISIT</p>
            <h1 className="title">
              EXPLORE THE <br /> WORLD
            </h1>
            <p className="description">
              At Sky High Luxury Vacations Pvt. Ltd., we are committed to
              transforming every journey into a perfect harmony of luxury and
              comfort, ensuring an exceptional experience from start to finish.
              Renowned as a premier name in the holiday hospitality industry, we
              specialize in crafting unforgettable travel moments.
            </p>
            <button className="explore-button">
              Go Explore <FaArrowRight className="icon" />
            </button>
          </div>

          <div className="image-area">
            <img
              src="https://treehouseluxuryvacations.com/images/trending/trending8.jpg"
              alt="Temple"
            />
          </div>
        </div>
      </section>

      <section className="associates-section">
        <div className="text-center">
          <h2>
            Our Travel <span className="highlight">Associates</span>
          </h2>
          <p className="subtext">
            Travel has helped us to understand the meaning of life and it has
            helped us become <br />
            better people. Each time we travel, we see the world with new eyes.
          </p>
          <div className="divider">------</div>
        </div>

        {/* <div className="logo-row">
          <img
            src="https://images.squarespace-cdn.com/content/v1/62a99fb8e114e544e0780567/dc22f480-98bf-4d26-8034-8517a8ee58b5/MakeMyTrip+-+Welcome+to+Arabia.png"
            alt="MakeMyTrip"
          />
          <img
            src="https://images.squarespace-cdn.com/content/v1/62a99fb8e114e544e0780567/dc22f480-98bf-4d26-8034-8517a8ee58b5/MakeMyTrip+-+Welcome+to+Arabia.png"
            alt="Trivago"
          />
          <img
            src="https://images.squarespace-cdn.com/content/v1/62a99fb8e114e544e0780567/dc22f480-98bf-4d26-8034-8517a8ee58b5/MakeMyTrip+-+Welcome+to+Arabia.png"
            alt="Goibibo"
          />
          <img
            src="https://images.squarespace-cdn.com/content/v1/62a99fb8e114e544e0780567/dc22f480-98bf-4d26-8034-8517a8ee58b5/MakeMyTrip+-+Welcome+to+Arabia.png"
            alt="Booking.com"
          />
          <img
            src="https://images.squarespace-cdn.com/content/v1/62a99fb8e114e544e0780567/dc22f480-98bf-4d26-8034-8517a8ee58b5/MakeMyTrip+-+Welcome+to+Arabia.png"
            alt="Agoda"
          />
        </div> */}

        <div className="features-row">
          <div className="feature-box">
            <img src={require("../../Assests/price-tag.png")} alt="Pricing" />
            <h5>Competetive Pricing</h5>
            <p>
              With 500+ suppliers and the purchasing <br />
              power of millions of members
            </p>
          </div>

          <div className="feature-box">
            <img src={require("../../Assests/award.png")} alt="Award" />
            <h5>Award Winning Service</h5>
            <p>
              Fabulous travel worry free knowing that <br />
              we're here if you need us, 24 hours a day
            </p>
          </div>

          <div className="feature-box">
            <img src={require("../../Assests/coverage.png")} alt="Coverage" />
            <h5>Coverage</h5>
            <p>
              1,00,000+ hotels in more than 100+ <br />
              countries and flights to over 2,000+ cities.
            </p>
          </div>
        </div>
      </section>

      <section className="explore-section">
        <div className="overlay overlay2"></div>

        <div className="explore-content">
          <div className="text-area">
            <p className="subtitle subtitle2">
              About Tree House luxury vacations Pvt. Ltd.
            </p>
            <h1 className="title">
              Unparalleled <br /> Hospitality
            </h1>
            <p className="description">
              At Sky High Luxury Vacations Pvt. Ltd, our dedication to providing
              outstanding service makes us unique. From the moment your journey
              begins, our expert hospitality team is committed to delivering
              personalized care and attention, ensuring your comfort and
              satisfaction at every step. Whether you're envisioning the
              sun-kissed beaches of the Maldives, the charming streets of Paris,
              the serene backwaters of Kerala, or the regal palaces of
              Rajasthan, Sky High Luxury Vacations offers a wide array of
              destinations for every type of traveler. Explore hidden treasures
              and world-renowned landmarks with our thoughtfully designed travel
              experiences.
            </p>

            <p className="description-points">
              <span>Safety Travel System</span>
              <span>Budget-Friendly Tour</span>
            </p>
            <p className="description-points">
              <span>Expert Trip Planning</span>

              <span>24/7 Customer Support</span>
            </p>
            <p className="description-points">
              <span>Fast Communication</span>
              <span>Right Solution & Guide</span>
            </p>
          </div>

          <div className="image-area">
            <img
              src="https://treehouseluxuryvacations.com/images/destination/destination4.jpg"
              alt="Temple"
            />
          </div>
        </div>
      </section>

      <section className="explore-section membership-section">
        <div className="overlay overlay3"></div>

        <div className="explore-content membership-content">
          <div className="text-area">
            <p className="subtitle subtitle2">Premium Membership</p>
            <h1 className="title">
              Tailored Luxury <br /> Experiences
            </h1>
            <p className="description">
              We understand that luxury means different things to different
              people. That's why we offer bespoke holiday packages tailored to
              your unique preferences and desires. From opulent resorts and
              private villas to exclusive guided tours and gourmet dining
              experiences, we create personalized itineraries that exceed your
              expectations.
            </p>
            <button className="explore-button">
              Go Explore <FaArrowRight className="icon" />
            </button>
          </div>
        </div>
      </section>

      <section className="destination-section">
        <h2>
          Find Your <span className="highlight">Favourite Destination</span>
        </h2>
        <p className="subtext">
          Travel has helped us to understand the meaning of life and it has
          helped us become better people. Each time we travel, we see the world
          with new eyes.
        </p>

        <div className="tab-buttons">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={activeTab === tab ? "active" : ""}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="card-container">
          {data[activeTab].map((tour, index) => (
            <div className="tour-card" key={index}>
              <img src={tour.image} alt={tour.title} />
              <div className="card-body">
                <div className="ratings">
                  {"★".repeat(5)} <span>{tour.reviews} Reviews</span>
                </div>
                <h3>{tour.title}</h3>
                <p className="location">
                  <span>{tour.places}</span> &nbsp;&bull;&nbsp;{" "}
                  <span>{tour.country}</span>
                </p>
                <p className="description">
                  A wonderful little cottage right on the seashore - perfect for
                  exploring.
                </p>
                <div className="tag-footer">
                  Tree House <span className="heart">♡</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="explore-section testimonial-section">
        <div className="overlay overlay4"></div>
        <div className="explore-content ourClient">
          <h2 className="title">
            <span>What</span>
            <br />
            <span>People Say About Us</span>
          </h2>
          <p className="ourClient-text">
            Travel has helped us to understand the meaning of life and it has
            helped us become better people. Each time we travel, we see the
            world with new eyes.
          </p>
        </div>

        <div className="slider">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000 }}
            className="testimonial-slider"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="testimonial-card">
                  <FaQuoteLeft className="quote-icon" />
                  <p className="testimonial-text">
                    <em>{testimonial.text}</em>
                  </p>
                  <div className="testimonial-author">
                    <strong>{testimonial.name}</strong>
                    <div className="stars">
                      {Array.from({ length: testimonial.stars }).map((_, i) => (
                        <span key={i}>⭐</span>
                      ))}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <section className="articles-section">
        <div className="section-header">
          <h2>
            <span>Articles & Travel</span> Guidings
          </h2>
          <p>
            Travel has helped us to understand the meaning of life and it has
            helped us become better people. Each time we travel, we see the
            world with new eyes.
          </p>
        </div>

        <div className="articles-layout">
          {/* Left Featured */}
          <div className="featured-article">
            <img src={featuredArticle.image} alt="Featured" />
            <div className="article-meta">
              <span>
                <FaCalendarAlt /> {featuredArticle.date}
              </span>
              <span>
                <FaEye /> {featuredArticle.views}
              </span>
              <span>
                <FaComment /> {featuredArticle.comments}
              </span>
              <span className="category">{featuredArticle.category}</span>
            </div>
            <h3>{featuredArticle.title}</h3>
            <p>{featuredArticle.excerpt}</p>
            <div className="article-author">
              <img src={featuredArticle.image} alt="Author" />
              <span>By - {featuredArticle.author}</span>
            </div>
          </div>

          {/* Right Article Cards */}
          <div className="articles-grid">
            {articles.map((item, index) => (
              <div className="article-card" key={index}>
                <div className="article-img">
                  <img src={item.image} alt="Article" />
                </div>
                <div className="article-meta">
                  <span>
                    <FaCalendarAlt /> {item.date}
                  </span>
                  <span>
                    <FaEye /> {item.views}
                  </span>
                  <span>
                    <FaComment /> {item.comments}
                  </span>
                  <span className="category">{item.category}</span>
                </div>
                <h4>{item.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
