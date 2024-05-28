import "./FreeContact.css";
import image from "../../images/Illustration 2.svg";

function FreeContact(props) {
  return (
    <div className="free-contact">
      <div className="free-contact__container">
        <div className="free-contact__info">
          <h3 className="free-contact__title">Let's make things happen</h3>
          <p className="free-contact__text">
          Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.
          </p>
          <button className="black-button">
            Get your free proposal
          </button>
        </div>
        <img className="free-contact__image"
          src={image}
          alt="a vector with an emoticon and stars"
        />
      </div>
    </div>
  );
}

export default FreeContact;
