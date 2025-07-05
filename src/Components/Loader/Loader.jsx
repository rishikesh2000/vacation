import React from 'react';
import { FiMapPin } from 'react-icons/fi';
import './Loader.css';

const Loader = () => {
  return (
    <div className="loaderWrapper">
      <div className="locationIcon">
        <FiMapPin className="iconPulse" />
      </div>
      <p>Loading...</p>
    </div>
  );
};

export default Loader;
