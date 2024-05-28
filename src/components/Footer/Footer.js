import "./Footer.css";
import logo from "../../images/Logo white.svg";
import social1 from "../../images/Social icon.svg";
import social2 from "../../images/Social icon(1).svg";
import social3 from "../../images/Social icon(2).svg";


function Footer() {
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
    </footer>
  );
}

export default Footer;