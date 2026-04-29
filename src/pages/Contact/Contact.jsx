import { useState } from "react";
import { CiMail, CiPhone, CiLocationOn } from "react-icons/ci";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import "./Contact.scss";

const iconMap = {
  CiLocationOn: <CiLocationOn />,
  CiPhone: <CiPhone />,
  CiMail: <CiMail />,
  FaFacebookF: <FaFacebookF />,
  FaTwitter: <FaTwitter />,
  FaYoutube: <FaYoutube />,
};

const Contact = ({ t, txt, frm, cInfo, social }) => {
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
            <h2>{t}</h2>
            <span></span>
            <p>{txt}</p>
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
                placeholder={frm.name}
                value={form.name}
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                placeholder={frm.email}
                value={form.email}
                onChange={handleChange}
              />
            </div>
            <textarea
              name="message"
              placeholder={frm.message}
              value={form.message}
              onChange={handleChange}
            />
            {error && <div className="contact__form__error">{error}</div>}
            <button type="submit" className="contact__form__btn">
              {frm.buttonText}
            </button>
          </form>
        </div>
        <div className="contact__info">
          <h3>{cInfo.title}</h3>

          <h4>
            {iconMap[cInfo.address.icon]} {cInfo.address.text}
          </h4>
          <a
            href="https://maps.app.goo.gl/eqZ4nLEq55h9afur5"
            target="_blank"
            rel="noopener noreferrer"
          >
            {cInfo.address.link}
          </a>

          <h4>
            {iconMap[cInfo.phone.icon]} {cInfo.phone.text}
          </h4>
          <a href={`tel:${cInfo.phone.link}`}>{cInfo.phone.link}</a>

          <h4>
            {iconMap[cInfo.email.icon]} {cInfo.email.text}
          </h4>
          <a href={cInfo.email.link}>
            {cInfo.email.link.replace("mailto:", "")}
          </a>
        </div>
      </div>
      <div className="contact__socials">
        {social.map(({ url, icon }, idx) => (
          <a
            href={url}
            key={idx}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={icon}
          >
            {iconMap[icon]}
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
