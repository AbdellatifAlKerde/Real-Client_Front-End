import React, { useRef, useState, useEffect } from "react";
import emailjs from "emailjs-com";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import "./ContactUs.css";
import TextField from "../../components/text-field/text-field.js";

const ContactUs = () => {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        "service_4142vbv",
        "template_6uy649e",
        form.current,
        "CNu08EDHjEOkh-fre"
      )
      .then(
        (result) => {
          console.log(result.text);
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          console.log(error.text);
        }
      )
      .finally(() => setIsSubmitting(false));
  };

  useEffect(() => {
    if (!isSubmitting) {
      return;
    }

    const timer = setTimeout(() => {
      setName("");
      setEmail("");
      setMessage("");
    }, 3000);

    return () => clearTimeout(timer);
  }, [isSubmitting]);

  return (
    <div className="contact-us-page-container">
      <div className="contact-us-container">
        <div className="contact-us-form-container">
          <form ref={form} onSubmit={sendEmail}>
            <fieldset>
              <legend>Contact Us</legend>
              {/* <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="user_name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
              required
            /> */}
              <div>
                <TextField
                  type="text"
                  id="name"
                  label="Name"
                  name="name"
                  value={name}
                  style={{ width: "100%" }}
                  placeholder="Enter your name"
                />
              </div>
              {/* <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="user_email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your Email"
              required
            /> */}
              <div>
                <TextField
                  type="email"
                  label="Email"
                  id="email"
                  name="email"
                  value={email}
                  style={{ width: "100%" }}
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Your Message"
                  required
                />
              </div>
            </fieldset>
            <div className="contact-us-form-submit-btn">
              <button
                type="submit"
                disabled={isSubmitting}
                className="contact-us-page-submit-button"
              >
                {isSubmitting ? "Sending..." : "Send"}
              </button>
            </div>
          </form>
        </div>
        <div className="get-in-touch">
          <h2>Get in touch!</h2>
          <p>
            <i className="fas fa-envelope"></i>{" "}
            <a href="mailto:your-email@example.com">your-email@example.com</a>
          </p>
          <p>
            <i className="fas fa-phone"></i>{" "}
            <a href="tel:+123456789">+123456789</a>
          </p>
          <p>
            <i className="fas fa-map-marker-alt"></i> 123 Main St, Anytown USA
          </p>
        </div>
      </div>
      <div className="map-container">
        <div className="map">
          <iframe
            title="Google Maps showing the location of our client"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3105.607939271958!2d-77.03843538417068!3d38.931773979566794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b83694653e97%3A0x8b4bf50a4f2c4507!2sWhite%20House!5e0!3m2!1sen!2sus!4v1621896361793!5m2!1sen!2sus"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
