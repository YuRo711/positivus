import './ServiceCard.css';
import greenArrow from '../../images/more dark.svg';
import whiteArrow from '../../images/more light.svg';

function ServiceCard(props) {
  const {bgColor, titleColor, buttonColor, title, image} = props;
  const buttonImage = buttonColor === "green" ? greenArrow : whiteArrow;

  return (
    <div className={`service-card service-card_bg_${bgColor}`}>
      <div className='service-card__column'>
        <h3 className='service-card__title'>
          <span className={`service-card__span service-card__span_bg_${titleColor}`}>
            {title}
          </span>
        </h3>
        <button className='service-card__button'>
          <img className='service-card__button-icon'
            src={buttonImage}
            alt='arrow vector'
          />
          Learn more
        </button>
      </div>
      <img className='service-card__image'
        src={image}
        alt='card image'
      />
    </div>
  );
}

export default ServiceCard;
