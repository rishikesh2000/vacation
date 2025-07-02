import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCcPaypal,
  faCcVisa,
  faCcMastercard,
  faCcDiscover,
  faCcStripe
} from '@fortawesome/free-brands-svg-icons';
const Footer = () => {
  return (
    <footer className="custom-footer">
      <div className="footer-bubbles">
        {[...Array(30)].map((_, i) => (
          <span key={i} className={`bubble bubble-${i + 1}`} />
        ))}
      </div>

      <div className="footer-wrapper">
        <div className="footer-box">
          <img
            src={require("../../Assests/bglogo.png")}
            alt="Tree House"
            className="footer-logo"
          />
          <p>
            Sky High Luxury Vacations leads the way in premium hospitality,
            offering a curated collection of unforgettable travel experiences.
            Our reputation for excellence and personalized service sets us apart
            globally.
          </p>
          <p>
            <strong>Call Us:</strong> (+91) 7400687873
          </p>
          <p>
            <strong>Landline:</strong> 7400687873
          </p>
          <p>
            <strong>Head Office (Delhi):</strong> Office No. 00, Ground Floor,Indore, Indore - 452001
          </p>
          <p>
            <strong>Email:</strong> info@skyhighluxuryvacations.com
          </p>
        </div>

        {/* Column Sections */}
        <div className="footer-section">
          <h4>Company</h4>
          <ul>
            <li>About Us</li>
            <li>Membership</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Return Policy</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Services</h4>
          <ul>
            <li>Paynow</li>
            <li>Contact us</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Newsletter</h4>
          <p>
            At Sky High Luxury Vacations, we believe every journey is a
            personal story waiting to be written.
          </p>
          <input
            type="email"
            placeholder="Enter your email"
            className="newsletter-input"
          />
          <button className="subscribe-btn">Subscribe</button>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="support-section">
          <span>We Support:</span>
    <FontAwesomeIcon icon={faCcPaypal} size="2x" />
    <FontAwesomeIcon icon={faCcVisa} size="2x" />
    <FontAwesomeIcon icon={faCcMastercard} size="2x" />
    <FontAwesomeIcon icon={faCcStripe} size="2x" />
    <FontAwesomeIcon icon={faCcDiscover} size="2x" />
        </div>
        <div className="dropdowns">
          <select>
            <option>English (United States)</option>
          </select>
          <select>
            <option>₹ INR</option>
          </select>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
