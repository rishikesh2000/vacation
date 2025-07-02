import React from "react";
import "./Activities.css";

const Activities = () => {
  const activityData = [
    {
      video: "https://treehouseluxuryvacations.com/assets/videos/7.mp4",
      title: "Jet Skiing",
      desc: `Jet skiing is an exhilarating water sport that combines speed, agility, and the thrill of riding on water. It involves riding a personal watercraft (PWC), commonly known as a jet ski, across the surface of a lake, river, or ocean. Whether you're a novice or an experienced rider, jet skiing offers an exciting way to explore waterways and enjoy the beauty of nature. Here’s a closer look at what makes jet skiing so appealing and what you can expect from this thrilling activity.`,
    },
    {
      video: "https://treehouseluxuryvacations.com/assets/videos/2.mp4",
      title: "Paragliding",
      desc: `Experience the ultimate freedom with paragliding! Feel the rush as you glide through the skies, taking in panoramic views and embracing the serene beauty of the world below. Whether you're an adventure seeker or a nature lover, paragliding offers an unmatched sense of exhilaration and peace. From the majestic peaks of the Swiss Alps to the sunny coasts of California, top paragliding spots around the globe await. Gear up, follow safety guidelines, and get ready to soar like a bird. Book your paragliding adventure today and make your dream of flying a reality!`,
    },
    {
      video: "https://treehouseluxuryvacations.com/assets/videos/1.mp4",
      title: "River Rafting",
      desc: `Experience the exhilarating rush of rafting! Navigate roaring rapids, work as a team, and soak in breathtaking natural beauty. Whether you're an adrenaline junkie or a beginner, rafting offers unmatched excitement and a full-body workout. Choose from heart-pounding white-water adventures, serene flat-water floats, or multi-day river expeditions. Top destinations include the Colorado River's Grand Canyon, Zambia's Zambezi River near Victoria Falls, Chile's Futaleufú River, and India's sacred Ganges River. Gear up, stay safe, and dive into a thrilling adventure. Book your rafting trip today and create unforgettable memories in the heart of nature!`,
    },
    {
      video: "https://treehouseluxuryvacations.com/assets/videos/4.mp4",
      title: "Scuba Diving",
      desc: `Discover the underwater world with scuba diving! Plunge into crystal-clear waters and explore vibrant coral reefs, exotic marine life, and hidden shipwrecks. Whether you're an experienced diver or a curious beginner, scuba diving offers an unparalleled adventure. From the Great Barrier Reef in Australia to the cenotes of Mexico, the best diving spots around the globe await your exploration. Experience the serenity and thrill of being submerged in a different world. Gear up, follow safety protocols, and dive into an unforgettable underwater journey. Book your scuba diving adventure today and immerse yourself in the ocean's wonders!`,
    },
    {
      video: "https://treehouseluxuryvacations.com/assets/videos/5.mp4",
      title: "Surfing",
      desc: `Ride the waves and embrace the thrill of surfing! Feel the adrenaline rush as you carve through the ocean, balancing on your board and becoming one with the sea. Perfect for adventurers and ocean lovers alike, surfing offers a dynamic blend of excitement and tranquility. Whether you're a seasoned pro or a beginner eager to learn, top surfing spots like Hawaii's North Shore, Australia's Gold Coast, and California's Malibu await you. Gear up, respect the ocean, and get ready for an exhilarating ride. Book your surfing lesson today and catch the wave of a lifetime!`,
    },
    {
      video: "https://treehouseluxuryvacations.com/assets/videos/6.mp4",
      title: "Desert Safari",
      desc: `A desert safari is a thrilling adventure that offers a unique blend of excitement, cultural experiences, and breathtaking landscapes. It's an opportunity to explore the vast, golden sands of the desert, often characterized by endless dunes, dramatic sunsets, and a serene, otherworldly atmosphere. Here's a closer look at what a desert safari typically entails and why it is an experience not to be missed.`,
    },
    {
      video: "https://treehouseluxuryvacations.com/assets/videos/3.mp4",
      title: "Cable Car",
      desc: `Step into a cable car and elevate your travel experience! Glide smoothly above stunning landscapes, enjoying panoramic views that are simply breathtaking. Perfect for families, couples, and solo travelers, cable cars offer a unique and serene way to explore mountainous terrains, cityscapes, and coastal beauty. From the majestic Swiss Alps to the bustling streets of San Francisco, cable cars provide unforgettable rides and scenic vistas. Safe, comfortable, and thrilling, a cable car journey promises an adventure like no other. Book your cable car ride today and discover a new perspective on travel!`,
    },
    {
      video: "https://treehouseluxuryvacations.com/assets/videos/8.mp4",
      title: "Skydiving",
      desc: `Skydiving is one of the most exhilarating and adrenaline-pumping experiences one can undertake. It involves jumping from an aircraft at high altitudes and free-falling before deploying a parachute to glide safely to the ground. This extreme sport offers a unique blend of adventure, challenge, and breathtaking views, making it a bucket-list activity for thrill-seekers around the world. Here’s a detailed look at what makes skydiving such an extraordinary experience.`,
    },
  ];

  const images = [
    "https://treehouseluxuryvacations.com/images_new/activites/3.jpg",
    "https://treehouseluxuryvacations.com/images_new/activites/20.jpg",
    "https://treehouseluxuryvacations.com/images_new/activites/14.jpg",
    "https://treehouseluxuryvacations.com/images_new/activites/9.jpg",
    "https://treehouseluxuryvacations.com/images_new/activites/1.jpg",
    "https://treehouseluxuryvacations.com/images_new/activites/15.jpg",
    "https://treehouseluxuryvacations.com/images_new/activites/6.jpg",
    "https://treehouseluxuryvacations.com/images_new/activites/21.jpg",
    "https://treehouseluxuryvacations.com/images_new/activites/16.jpg",
    "https://treehouseluxuryvacations.com/images_new/activites/10.jpg",
    "https://treehouseluxuryvacations.com/images_new/activites/22.jpg",
    "https://treehouseluxuryvacations.com/images_new/activites/2.jpg",
    "https://treehouseluxuryvacations.com/images_new/activites/8.jpg",
    "https://treehouseluxuryvacations.com/images_new/activites/4.jpg",
    "https://treehouseluxuryvacations.com/images_new/activites/17.jpg",
    "https://treehouseluxuryvacations.com/images_new/activites/13.jpg",
    "https://treehouseluxuryvacations.com/images_new/activites/5.jpg",
    "https://treehouseluxuryvacations.com/images_new/activites/19.jpg",
    "https://treehouseluxuryvacations.com/images_new/activites/7.jpg",
    "https://treehouseluxuryvacations.com/images_new/activites/11.jpg",
    "https://treehouseluxuryvacations.com/images_new/activites/18.jpg",
  ];

  return (
    <div className="activitiesContainer">
      <div className="activitiesHero">
        <div className="overlay">
          <h1>Travel Journeys</h1>
        </div>
      </div>

      <div className="activities-wrapper">
        <h2 className="activities-title">
          Good Reasons To Choose Sky High Luxury Vacations Pvt. Ltd.
        </h2>
        <p className="activities-subtitle">
          We believe in responsible tourism and are committed to sustainable
          travel practices. Our partnerships with eco-friendly resorts and our
          focus on community-based tourism initiatives ensure that your luxury
          holiday also contributes positively to the environment and local
          communities.
        </p>

        <hr className="divider" />

        {activityData.map((item, index) => (
          <div
            className={`activity-container ${index % 2 === 0 ? "" : "reverse"}`}
            key={index}
          >
            <div className="video-container">
              <video
                src={item.video}
                muted
                loop
                playsInline
                className="hover-video"
                onMouseEnter={(e) => e.target.play()}
                onMouseLeave={(e) => e.target.pause()}
              />
            </div>
            <div className="text-container">
              <h3 className="activity-title">{item.title}</h3>
              <p className="activity-desc">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="gallery-wrapper">
        <h2 className="gallery-title">Adventure Activities Gallery</h2>
        <div className="masonry-grid">
          {images.map((src, i) => (
            <div className="masonry-item" key={i}>
              <img src={src} alt={`gallery-${i}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Activities;
