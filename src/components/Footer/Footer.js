import "./Footer.css";
import logo from "../../images/Logo white.svg";
import social1 from "../../images/Social icon.svg";
import social2 from "../../images/Social icon(1).svg";
import social3 from "../../images/Social icon(2).svg";
import { useState } from "react";


function Footer() {
  function submit() {
    setEmail("");
  }

  const [email, setEmail] = useState("");

  return (
    <footer className="footer">
      <div className="footer__navigation">
        <img className="footer__logo"
          src={logo}
          alt="positivus logo"
        />
        <div className="footer__links">
          <a className="footer__link" href="#">About us</a>
          <a className="footer__link" href="#">Services</a>
          <a className="footer__link" href="#">Use cases</a>
          <a className="footer__link" href="#">Pricing</a>
          <a className="footer__link" href="#">Blog</a>
        </div>
        <div className="footer__socials">
          <button className="footer__social-button" type="button">
            <img className="footer__social-icon"
              src={social1}
              alt="linkedin"
            />
          </button>
          <button className="footer__social-button" type="button">
            <img className="footer__social-icon"
              src={social2}
              alt="facebook"
            />
          </button>
          <button className="footer__social-button" type="button">
            <img className="footer__social-icon"
              src={social3}
              alt="twitter"
            />
          </button>
        </div>
      </div>
      <div className="footer__contacts">
        <div className="footer__column">
        <h4 className="footer__contacts-title">Contact us:</h4>
        <ul className="footer__contact-list">
          <li className="footer__contact">
            Email: info@positivus.com
          </li>
          <li className="footer__contact">
            Phone: 555-567-8901
          </li>
          <li className="footer__contact">
            Address: 1234 Main St<br/>
            Moonstone City, Stardust State 12345
          </li>
        </ul>
        </div>
        <div className="footer__subscribe">
          <input className="footer__input"
            type="email"
            placeholder="Email"
            value={email}
            onChange={setEmail}
          />
          <button className="footer__button"
            type="submit"
            onClick={submit}
          >
            Subscribe to news
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;