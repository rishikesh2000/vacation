import React from "react";
import "./TravelDesk.css";

const TravelDesk = () => {
  const travelData = [
    {
      image: "https://treehouseluxuryvacations.com/images_new/flight-hero.jpg",
      title: "Turn Your Flights Into Rewards Fast",
      description:
        "We offer fast booking, fantastic products, and competitive pricing & an amazing experience.",
      offerTitle: "Flights Offers",
      offerDetail:
        "Collect miles with Tree House Luxury Vacations and 20+ partners flying to 3000 destinations.",
    },
    {
      image: "https://treehouseluxuryvacations.com/images_new/bus.jpg",
      title: "Bus And Volvo",
      description:
        "Tree House Luxury Vacations offers easy bus tickets for UPSRTC Volvo buses plying in several city routes. You can avail the ongoing deals and cashbacks on bus reservation.",
      offerTitle: "Bus & Volvo Exciting Offers",
      offerDetail:
        "On-time bookings · 10 Lakh+ buses | 0 convenience fees | 24x7 support team.",
    },
    {
      image: "https://treehouseluxuryvacations.com/images_new/taxi.jpg",
      title: "Taxi",
      description:
        "Book our driver in the city with Tree House Luxury Vacations. We provide professional drivers for private parties, night outs, shopping, or special occasions. Clients can enjoy VIP service with timely pickups and safe drop-offs.",
    },
  ];

  return (
    <div className="travelDeskContainer">
      <div className="travelDeskHero">
        <div className="overlay">
          <h1>Travel Desk</h1>
        </div>
      </div>
     <div className="travelDeskContent">
  <h1>Your Gateway to Seamless Adventures</h1>
  <p>
    At Sky High Luxury Vacations Pvt. Ltd., our Travel Desk is dedicated to
    transforming your travel dreams into reality. Think of it as your
    personalized travel concierge, designed to take the stress out of
    planning and elevate your travel experience.
  </p>
  <p>
    Whether you need assistance with itinerary planning, booking flights,
    arranging accommodations, or finding the best local attractions, our
    Travel Desk is here to guide you at every step. We specialize in
    curating tailored travel solutions, ensuring that every detail is
    handled with precision and care.
  </p>
</div>


      <div className="travelDetailsWrapper">
        {travelData?.map((item, index) => (
          <div className="travelBox" key={index}>
            <img src={item.image} alt={item.title} />
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            {item.offerTitle && item.offerDetail && (
              <div className="subBox">
                <h3>{item.offerTitle}</h3>
                <p>{item.offerDetail}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TravelDesk;
