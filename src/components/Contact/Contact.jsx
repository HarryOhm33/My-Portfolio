import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import call_icon from "../../assets/call_icon.svg";
import location_icon from "../../assets/location_icon.svg";

import { useState } from "react";

const apiUrl = import.meta.env.VITE_API_URL;
const apiKey = import.meta.env.VITE_API_KEY;

export default function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();

    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", apiKey);

    const response = await fetch(apiUrl, {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Success!!");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult("Some Error Occurred!!");
    }
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get In Touch</h1>
        <img src={theme_pattern} alt="theme" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            I'm currently avaliable to take on new projects, so feel free to
            send me a message about anything that you want me to work on. You
            can contact anytime.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" />
              <p>hari333333om@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="" />
              <p>+91 9939261969</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" />
              <p>Bihar, India</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            required
          />
          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email"
            required
          />
          <label htmlFor="message">Write Your Message Here</label>
          <textarea
            name="message"
            placeholder="Enter Your Message"
            rows={8}
            required
          ></textarea>
          {result == "success" ? (
            <span>
              <i className="fa-regular fa-circle-check"></i> Form Submitted
              Successfully
            </span>
          ) : (
            result
          )}
          <button type="submit" className="contact-submit">
            Submit Now
          </button>
        </form>
      </div>
    </div>
  );
}
