import React, { useState } from "react";
import Header from "./Header/Header";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted!");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);
  };
  return (
    <>
      <Header />
      <div className="intro w-100 d-flex flex-col justify-content-center align-items-center mb-3">
        <div className=" w-50">
          <h1 className="text-white text-center font-s-60 font-w-700">
            Contact Us
          </h1>
        </div>
      </div>
      <div className="contact-us">
        <div className="our-info">
          <p className="display-6">Feel free to reach out to us!</p>
          <p>Contact Information:</p>
          <ul>
            <li>Email: brilworks@gmail.com</li>
            <li>Phone: 093136 44148</li>
            <li>
              Address:503, Fortune Business Hub, Science City Rd, near Shell
              Petrol Pump, Sola, Ahmedabad, Gujarat 380060
            </li>
          </ul>
        </div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>

          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default Contact;
