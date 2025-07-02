import React from "react";
import "./Membership.css";

const Membership = () => {

  const data = [
    {
      question: "When the resorts are not packed",
      values: [true, true, true, true]
    },
    {
      question: "If you love the Monsoon season",
      values: [false, true, true, true]
    },
    {
      question: "During the work week",
      values: [false, true, true, true]
    },
    {
      question: "During School/College Vacations",
      values: [false, false, true, true]
    },
    {
      question: "On National Holidays",
      values: [false, false, true, true]
    },
    {
      question: "During Festivals",
      values: [false, false, true, true]
    },
    {
      question: "Any time of the year",
      values: [false, false, false, true]
    },
    {
      question: "On Special Days i.e. New Year's Eve",
      values: [false, false, false, true]
    }
  ];

  const columnHeaders = [
    { name: 'Blue', color: '#001f8b' },
    { name: 'White', color: '#666' },
    { name: 'Red', color: '#8b0000' },
    { name: 'Purple', color: '#800080' }
  ];

  return (
    <div className="membershipContainer">
      <div className="membershipHero">
        <div className="overlay">
          <h1>MEMBERSHIP</h1>
        </div>
      </div>

      <div className="membershipContent">
        <div className="imageSection">
          <img
            src="https://treehouseluxuryvacations.com/9388901.jpg"
            alt="Travel Membership Illustration"
          />
        </div>

        <div className="textSection">
  <div className="textBox">
    <h3>Membership Benefits of Sky High Luxury Vacations</h3>
    <p>
      At Sky High Luxury Vacations, membership isn’t just access — it’s an invitation to explore the world with unmatched exclusivity and comfort. Members enjoy priority reservations, first access to elite destinations, custom-designed tours, and seamless, end-to-end travel coordination tailored to their lifestyle.
    </p>
    <p>
      From exclusive discounts on luxury stays and flights to complimentary upgrades and VIP experiences, every journey is elevated. Enjoy access to private events, airport pick-up services, and curated networking opportunities with fellow global travelers. With Sky High Luxury Vacations, you don’t just travel — you travel with prestige.
    </p>
     <p>
      Whether you're chasing sunsets on a private beach, dining atop a skyline, or discovering hidden cultural gems, our membership ensures your travels are always extraordinary. Discover the true meaning of luxury — where every detail reflects your taste, and every journey tells your story.
    </p>
  </div>
</div>

      </div>

      <div className="roomsContainer">
        <div className="roomsContent">
          <h2>Luxury Spacious Rooms</h2>
          <p>
            Relax in complete comfort with our elegantly appointed rooms at Sky High Luxury Vacations. Each space is designed with sophistication, offering a perfect harmony of luxury, function, and modern style.
          </p>
          <p>
            High ceilings, premium furnishings, and soothing decor create an inviting atmosphere. Drift into tranquility with plush bedding and thoughtful amenities crafted to enhance your stay.
          </p>
        </div>

        <div className="roomGallery">
          <img
            src="https://treehouseluxuryvacations.com/images_new/rooms/Deleux-Room.webp"
            alt="Room 1"
          />
          <img
            src="https://treehouseluxuryvacations.com/images_new/rooms/Deleux-Room.webp"
            alt="Room 2"
          />
          <img
            src="https://treehouseluxuryvacations.com/images_new/rooms/Deleux-Room.webp"
            alt="Room 3"
          />
          <img
            src="https://treehouseluxuryvacations.com/images_new/rooms/Deleux-Room.webp"
            alt="Room 4"
          />
        </div>
      </div>

      <div className="additionalFeatureContainer">
        <div className="featureContent">
          <ol className="featureList">
            <h2>Additional Features</h2>

            <li>25 years of access to premium holiday packages</li>
            <li>6 Nights / 7 Days at 500+ global destinations</li>
            <li>Vast selection of curated activities</li>
            <li>Over ₹10,000 savings on international flights</li>
            <li>Free movie tickets, flight assistance, and custom holiday vouchers</li>
            <li>Complimentary concierge support</li>
            <li>Delicious global cuisines</li>
          </ol>

          <div className="featureImage">
            <img
              src="https://treehouseluxuryvacations.com/images_new/promo.jpg"
              alt="Promotional Visual"
            />
          </div>
        </div>
      </div>

      <div className="apartmentContainer">
        <h2 className="titile">Seasons & Apartment</h2>
        <p className="subtitile">APARTMENT CATEGORIES (BUSINESS PRICE LIST)</p>
        <div className="apartmentRooms">
          <div className="room">
            <img src="https://treehouseluxuryvacations.com/images_new/rooms_standard/t1.webp" alt="room1" />
            <h2>T1 Standard Room</h2>
            <p>This room offers space for 2 adults and 2 children under 6, ideal for small families seeking comfort and convenience.</p>
          </div>

          <div className="room">
            <img src="https://treehouseluxuryvacations.com/images_new/rooms_standard/t2.webp" alt="room2" />
            <h2>T2 Standard Room</h2>
            <p>This larger suite accommodates 4 adults and 2 children under 6, offering additional space and luxury.</p>
          </div>
        </div>
      </div>

      <div className="packages-wrapper">
        <div className="packages-left">
          <h4 className="section-highlight">Awesome Packages</h4>
          <h1 className="section-heading">
            We offer great prices, <br />
            premium and quality products <br />
            for your business.
          </h1>
          <h5 className="section-subheading">Seamless Travel Planning</h5>
          <p className="section-description">
            Planning your dream vacation is effortless with Sky High Luxury Vacations. Our expert travel consultants manage every detail—from flights and accommodations to exclusive experiences—so you can relax and enjoy a stress-free getaway.
          </p>
        </div>

        <div className="package-card">
          <div className="card-top purple-bg">
            <h2>₹ 9.78 <span>LAKHS</span></h2>
            <p>Package Price (25 Yrs T1 Standard Room)</p>
            <h2>₹ 11.78 <span>LAKHS</span></h2>
            <p>Package Price (25 Yrs T2 Suite Room)</p>
          </div>
          <div className="card-bottom">
            <p className="card-note">Elevate Your Travel Experience to Extraordinary Heights!</p>
            <ul className="features-list">
              <li>When the resort is not packed</li>
              <li>If you enjoy monsoon travel</li>
              <li>During the work week</li>
              <li>During off-peak seasons</li>
              <li>During school/college vacations</li>
              <li>On national holidays</li>
              <li>During festivals</li>
              <li>Any time of the year</li>
              <li>On special days</li>
            </ul>
          </div>
        </div>

        <div className="package-card">
          <div className="card-top red-bg">
            <h2>₹ 8.02 <span>LAKHS</span></h2>
            <p>Package Price (25 Yrs T1 Standard Room)</p>
            <h2>₹ 10.02 <span>LAKHS</span></h2>
            <p>Package Price (25 Yrs T2 Suite Room)</p>
          </div>
          <div className="card-bottom">
            <p className="card-note">Reach New Heights with Our Peak Packages</p>
            <ul className="features-list">
              <li>When the resort is not packed</li>
              <li>If you enjoy monsoon travel</li>
              <li>During the work week</li>
              <li>During off-peak seasons</li>
              <li>During school/college vacations</li>
              <li>On national holidays</li>
              <li>During festivals</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="packages-wrapper">
        <div className="packages-left">
          <img src="https://treehouseluxuryvacations.com/images_new/promo-1.webp" alt="packageImg" />
          <h5 className="section-subheading">Luxury Accommodations</h5>
          <p className="section-description">
            Enjoy a stay in some of the world’s most elegant hotels, resorts, and private villas — all offering unmatched luxury and comfort.
          </p>

          <h5 className="section-subheading">Exclusive Experiences</h5>
          <p className="section-description">
            Savor once-in-a-lifetime experiences like private yacht charters, helicopter rides, wildlife safaris, and fine dining at Michelin-starred restaurants.
          </p>

          <h5 className="section-subheading">Personalized Itineraries</h5>
          <p className="section-description">
            Our team creates custom journeys that reflect your unique interests — from culture and adventure to wellness and luxury.
          </p>

          <h5 className="section-subheading">Wellness Retreats</h5>
          <p className="section-description">
            Rejuvenate with exclusive wellness escapes, featuring luxury spas, guided yoga, and personalized health programs.
          </p>
        </div>

        <div className="package-card">
          <div className="card-top gray-bg">
            <h2>₹ 9.78 <span>LAKHS</span></h2>
            <p>Package Price (25 Yrs T1 Standard Room)</p>
            <h2>₹ 11.78 <span>LAKHS</span></h2>
            <p>Package Price (25 Yrs T2 Suite Room)</p>
          </div>
          <div className="card-bottom">
            <p className="card-note">Elevate Your Travel Experience to Extraordinary Heights!</p>
            <ul className="features-list">
              <li>When the resort is not packed</li>
              <li>If you enjoy monsoon travel</li>
              <li>During the work week</li>
              <li>During off-peak seasons</li>
              <li>During school/college vacations</li>
              <li>On national holidays</li>
              <li>During festivals</li>
              <li>Any time of the year</li>
              <li>On special days</li>
            </ul>
          </div>
        </div>

        <div className="package-card">
          <div className="card-top blue-bg">
            <h2>₹ 8.02 <span>LAKHS</span></h2>
            <p>Package Price (25 Yrs T1 Standard Room)</p>
            <h2>₹ 10.02 <span>LAKHS</span></h2>
            <p>Package Price (25 Yrs T2 Suite Room)</p>
          </div>
          <div className="card-bottom">
            <p className="card-note">Reach New Heights with Our Peak Packages</p>
            <ul className="features-list">
              <li>When the resort is not packed</li>
              <li>If you enjoy monsoon travel</li>
              <li>During the work week</li>
              <li>During off-peak seasons</li>
              <li>During school/college vacations</li>
              <li>On national holidays</li>
              <li>During festivals</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="table-wrapper">
        <table className="comparison-table">
          <thead>
            <tr>
              <th className="question-head">When do you prefer to holiday?</th>
              {columnHeaders.map((col, index) => (
                <th key={index} style={{ backgroundColor: col.color }}>{col.name}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIdx) => (
              <tr key={rowIdx} className={rowIdx % 2 === 0 ? 'even' : 'odd'}>
                <td className="feature-cell">{row.question}</td>
                {row.values.map((val, i) => (
                  <td key={i} className="icon-cell">
                    {val ? <span className="check">✔</span> : <span className="cross">✖</span>}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Membership;
