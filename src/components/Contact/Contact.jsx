import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import call_icon from "../../assets/call_icon.svg";
import location_icon from "../../assets/location_icon.svg";

export default function Contact() {
  return (
    <div className="contact">
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
        <div className="contact-right">
          <label htmlFor="name">Your Name</label>
          <input type="text" name="name" placeholder="Enter Your Name" />
          <label htmlFor="email">Your Email</label>
          <input type="text" name="email" placeholder="Enter Your Email" />
          <label htmlFor="message">Write Your Message Here</label>
          <textarea
            name="message"
            placeholder="Enter Your Message"
            rows={8}
          ></textarea>
          <button type="submit" className="contact-sumbit">
            Submit Now
          </button>
        </div>
      </div>
    </div>
  );
}
