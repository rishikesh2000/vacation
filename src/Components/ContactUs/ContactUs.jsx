import React from "react";
import "./ContactUs.css";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";

const ContactUs = () => {
  return (
    <div className="contactContainer">
      <div className="contactHero">
        <div className="overlay">
          <h1>GET IN TOUCH WITH US</h1>
        </div>
      </div>

      <div className="contactContent">
        <div className="infoSection">
          <h3>INFORMATION ABOUT US</h3>
          <p>
            For immediate assistance, feel free to call us. Our customer service team is available to take your call and
            provide the support you need.
          </p>

          {/* Contact Card 1 */}
          <div className="infoCard">
            <div className="icon"><FiMapPin size={20} /></div>
            <div className="infoText">
              <strong>Head Office (Indore)</strong> – Office No. 00, Ground Floor, Indore, Indore - 452001
            </div>
          </div>

          {/* Contact Card 2 */}
          <div className="infoCard">
            <div className="icon"><FiPhone size={20} /></div>
            <div className="infoText">
              Call Us: (+91) 7400687873 <br />
              Landline: 7400687873
            </div>
          </div>

          {/* Contact Card 3 */}
          <div className="infoCard">
            <div className="icon"><FiMail size={20} /></div>
            <div className="infoText">
              info@skyhighluxuryvacations.com <br />
              <span>Timing:</span> 10:00 AM – 06:00 PM (Monday to Saturday)
            </div>
          </div>
        </div>

        {/* Right Form Section */}
        <div className="formSection">
          <h3>Keep in Touch</h3>
          <p>
            Prefer to reach us via email? Send us a message with your inquiries, and our team will respond promptly to ensure you have all the information you need.
          </p>

          <form>
            <div className="inputGroup">
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
            </div>
            <input type="email" placeholder="Email" />
            <input type="tel" placeholder="Phone" />
            <textarea placeholder="Enter a message" rows="4"></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
