import React from 'react';
import { Link, useParams } from 'react-router-dom';
import "./Destinations.css";
import destinations from './destinationsData';

const Destinations = () => {
    const { type } = useParams();

    const filteredDestinations = type
        ? destinations.filter(dest => dest.type.toLowerCase() === type.toLowerCase())
        : destinations;

    return (
        <div className='destinations-container'>
            <div className="destinationsHero">
                <div className="overlay">
                    <h1>DESTINATIONS</h1>
                </div>
            </div>

            <div className="grid-container">
                {filteredDestinations.map((dest, index) => (
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
                                <span className="location-icon">📍</span>{dest.country}
                            </p>
                        </div>
                        <Link to={`/hotels/?city=${dest.name}`} className="view-btn" rel="noreferrer">
                            View
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Destinations;
