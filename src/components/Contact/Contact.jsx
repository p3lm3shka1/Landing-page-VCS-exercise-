import { useState } from "react";
import { CiMail, CiPhone, CiLocationOn } from "react-icons/ci";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import "./Contact.scss";

const socials = [
  { icon: <FaFacebookF />, url: "https://www.facebook.com/" },
  { icon: <FaTwitter />, url: "https://www.twitter.com/" },
  { icon: <FaYoutube />, url: "https://www.youtube.com/" },
];

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);
  const [sentName, setSentName] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setError("Please fill in all fields!");
      return;
    }
    setSent(true);
    setSentName(form.name);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <section className="contact" id="contact">
      <div className="contact__container">
        <div className="contact__info-wrapper">
          <div className="contact__form__title">
            <h2>GET IN TOUCH</h2>
            <span></span>
            <p>
              Please fill out the form below to send us an email and we will get
              back to you as soon as possible.
            </p>
          </div>
          <form
            className="contact__form"
            onSubmit={handleSubmit}
            autoComplete="off"
          >
            <div className="contact__form__row">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={form.name}
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
              />
            </div>
            <textarea
              name="message"
              placeholder="Message"
              value={form.message}
              onChange={handleChange}
            />
            {error && <div className="contact__form__error">{error}</div>}
            <button type="submit" className="contact__form__btn">
              SEND MESSAGE
            </button>
          </form>
        </div>
        <div className="contact__info">
          <h3>Contact Info</h3>
          <h4>
            <CiLocationOn />
            Address
          </h4>
          <a
            href="https://www.google.com/maps/place/4321+California+St,+San+Francisco,+CA+12345"
            target="_blank"
            rel="noopener noreferrer"
          >
            4321 California St. San Francisco, CA 12345
          </a>
          <h4>
            <CiPhone /> Phone
          </h4>
          <a href="tel:+11234561234">+1 123 456 1234</a>
          <h4>
            <CiMail /> Email
          </h4>
          <a href="mailto:info@company.com">info@company.com</a>
        </div>
      </div>
      <div className="contact__socials">
        {socials.map((social, index) => (
          <a
            href={social.url}
            key={index}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Social link"
          >
            {social.icon}
          </a>
        ))}
      </div>
      {sent && (
        <div className="contact__overlay">
          <div className="contact__modal">
            {sentName}, Your message has been sent!
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
