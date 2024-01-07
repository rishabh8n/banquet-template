import React from "react";
import "./Contact.scss";

const Contact = () => {
  return (
    <div className="contact">
      <h2 className="fs-800">Contact</h2>
      <div className="container">
        <div className="info">
          <div className="email">
            <p className="fs-600">Email</p>
            <p className="fs-400">xyz@abc.com</p>
          </div>
          <div className="phone">
            <p className="fs-600">Phone</p>
            <p className="fs-400">95487 65874</p>
          </div>
          <div className="email">
            <p className="fs-600">Address</p>
            <p className="fs-400">GTB Nagar, Delhi - 110038</p>
          </div>
        </div>
        <div className="form">
          <h3 className="fs-700">Contact Form</h3>
          <input type="text" name="" id="" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <input type="tel" placeholder="Your Phone No." />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Enter the message"
          ></textarea>
          <div className="btn-container">
            <button>Submit</button>
          </div>
        </div>
      </div>
      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13998.775106097704!2d77.19372678794905!3d28.698805531927903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfdedf3f4cb07%3A0x714827a17f46f858!2sGTB%20Nagar%2C%20Delhi%2C%20110009!5e0!3m2!1sen!2sin!4v1704566657523!5m2!1sen!2sin"
          width="600"
          height="450"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
