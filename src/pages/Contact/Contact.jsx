import { useState } from "react";
import * as iconsC from "react-icons/lu";
import "./Contact.scss";

const Contact = ({ title, txt, frm, contactInfo, social }) => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);
  const [sentName, setSentName] = useState("");

  const validate = (values) => {
    const nextErrors = {};

    if (!values.name.trim()) nextErrors.name = "Required field";
    if (!values.email.trim()) nextErrors.email = "Required field";
    if (!values.message.trim()) nextErrors.message = "Required field";

    if (values.email.trim()) {
      const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email);
      if (!ok) nextErrors.email = "Invalid email";
    }

    return nextErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => {
      const next = { ...prev, [name]: value };

      return next;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const nextErrors = validate(form);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) return;

    setSent(true);
    setSentName(form.name);
    setForm({ name: "", email: "", message: "" });
    setErrors({});
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <section className="contact" id="contact">
      <div className="contact__container">
        <div className="contact__info-wrapper">
          <div className="contact__form__title">
            <h2>{title}</h2>
            <span></span>
            <p>{txt}</p>
          </div>

          <form className="contact__form" onSubmit={handleSubmit} noValidate>
            <div className="contact__form__row">
              <div className="contact__field">
                <input
                  type="text"
                  name="name"
                  placeholder={frm.name}
                  value={form.name}
                  onChange={handleChange}
                  className={errors.name ? "is-invalid" : ""}
                />
                {errors.name && (
                  <div className="contact__field-error">{errors.name}</div>
                )}
              </div>

              <div className="contact__field">
                <input
                  type="email"
                  name="email"
                  placeholder={frm.email}
                  value={form.email}
                  onChange={handleChange}
                  className={errors.email ? "is-invalid" : ""}
                />
                {errors.email && (
                  <div className="contact__field-error">{errors.email}</div>
                )}
              </div>
            </div>

            <div className="contact__field">
              <textarea
                name="message"
                placeholder={frm.message}
                value={form.message}
                onChange={handleChange}
                className={errors.message ? "is-invalid" : ""}
              />
              {errors.message && (
                <div className="contact__field-error">{errors.message}</div>
              )}
            </div>

            <button type="submit" className="contact__form__btn">
              {frm.buttonText}
            </button>
          </form>
        </div>

        <div className="contact__info">
          <h3>{contactInfo.title}</h3>

          <h4>
            {iconsC[contactInfo.address.icon]()} {contactInfo.address.text}
          </h4>
          <a
            href="https://maps.app.goo.gl/eqZ4nLEq55h9afur5"
            target="_blank"
            rel="noopener noreferrer"
          >
            {contactInfo.address.link}
          </a>

          <h4>
            {iconsC[contactInfo.phone.icon]()} {contactInfo.phone.text}
          </h4>
          <a href={`tel:${contactInfo.phone.link}`}>{contactInfo.phone.link}</a>

          <h4>
            {iconsC[contactInfo.email.icon]()} {contactInfo.email.text}
          </h4>
          <a href={contactInfo.email.link}>
            {contactInfo.email.link.replace("mailto:", "")}
          </a>
        </div>
      </div>

      <div className="contact__socials">
        {social.map(({ url, icon }, idx) => (
          <a href={url} key={idx} target="_blank" rel="noopener noreferrer">
            {iconsC[icon]()}
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
