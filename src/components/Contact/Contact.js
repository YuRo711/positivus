import "./Contact.css";
import image from "../../images/Illustration 3.svg";
import { useState } from "react";

function Contact(props) {
  function submit() {
    setName("");
    setEmail("");
    setMessage("");
  }

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div className="contact">
      <form className="contact__form">
        <div className="contact__type">
          <div className="contact__type-option">
            <input className="contact__radio"
              name="type"
              type="radio"
              id="hi" 
              value="hi" 
              defaultChecked
            />
            <span className="contact__checkmark"></span>
            <label htmlFor="hi" className="contact__radio-label">Say Hi</label>
          </div>
          <div className="contact__type-option">
            <input className="contact__radio"
              name="type"
              type="radio"
              id="quote" 
              value="quote"
            />
            <span className="contact__checkmark"></span>
            <label htmlFor="quote" className="contact__radio-label">Get a Quote</label>
          </div>
        </div>
        <fieldset className="contact__fieldset">
          <label className="contact__label">
            Name<br/>
            <input className="contact__input"
              type="text"
              placeholder="Name"
              value={name}
              onChange={setName}
            />
          </label>
          <label className="contact__label">
            Email*<br/>
            <input className="contact__input"
              type="email"
              placeholder="Email"
              value={email}
              onChange={setEmail}
            />
          </label>
          <label className="contact__label">
            Message*<br/>
            <textarea className="contact__input contact__input_big"
              type="text"
              placeholder="Message"
              value={message}
              onChange={setMessage}
            />
          </label>
        </fieldset>
        <button className="black-button contact__button"
          type="submit"
          onClick={submit}
        >
          Send Message
        </button>
      </form>
      <img className="contact__image"
        src={image}
        alt="star vector"
      />
    </div>
  );
}

export default Contact;