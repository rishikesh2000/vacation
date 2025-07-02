import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import "./Destinations.css";
import hotels from './HotelListData';

const HotelsLocations = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const city = searchParams.get('city');

    console.log(city,"lllllllll")
    
    // Filter hotels by city from search parameter
    const filteredHotels = city 
        ? hotels.filter(hotel => hotel.city.toLowerCase() === city.toLowerCase())
        : hotels;
    
    return (
        <div className='destinations-container'>
            <div className="destinationsHero">
                <div className="overlay">
                    <h1>Luxurious Hotels</h1>
                </div>
            </div>

            <div className="grid-container">
                {filteredHotels.map((dest, index) => (
                    <div className="destination" key={index}>
                        <img src={dest.image} alt={dest.name} className="destination-img" />
                        <div className="destination-content">
                            <div className="stars">
                                {'★'.repeat(5).split('').map((star, i) => (
                                    <span key={i} className="star">{star}</span>
                                ))}
                            </div>
                            <h3 className="destination-name">{dest.name}</h3>
                            <p className="tag">
                                <span className="location-icon">📍</span>{dest.city}
                            </p>
                        </div>
                        <Link to="#" className="view-btn" target="_blank" rel="noreferrer">
                            View
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HotelsLocations;