import './Header.css';
import logo from '../../images/logo.svg'
import image from '../../images/Illustration.svg';
import company1 from '../../images/Company logo.svg';
import company2 from '../../images/Company logo-1.svg';
import company3 from '../../images/Company logo-2.svg';
import company4 from '../../images/Company logo-3.svg';
import company5 from '../../images/Company logo-4.svg';
import company6 from '../../images/Company logo-5.svg';

function Header() {
  return (
    <header className='header'>
      <div className='header__bar'>
        <img className='header__logo'
          src={logo}
          alt='positivus logo'
        />
        <nav className='header__nav'>
          <a className='header__link' href='#'>About us</a>
          <a className='header__link' href='#'>Services</a>
          <a className='header__link' href='#'>Use Cases</a>
          <a className='header__link' href='#'>Pricing</a>
          <a className='header__link' href='#'>Blog</a>
          <button className='header__button-white' type='button'>
            Request a quote
          </button>
        </nav>
      </div>
      <div className='header__cover'>
        <div className='header__info'>
          <h1 className='header__title'>
            Navigating the digital landscape for success
          </h1>
          <p className='header__text'>
            Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.
          </p>
          <button className='black-button' type='button'>
            Book a consultation
          </button>
        </div>
        <img className='header__image'
          src={image}
          alt='a megaphone vector'
        />
      </div>
      <div className='header__companies'>
        <img className='header__company'
          src={company1}
          alt='amazon logo'
        />
        <img className='header__company'
          src={company2}
          alt='dribble logo'
        />
        <img className='header__company'
          src={company3}
          alt='hubspot logo'
        />
        <img className='header__company'
          src={company4}
          alt='notion logo'
        />
        <img className='header__company'
          src={company5}
          alt='netflix logo'
        />
        <img className='header__company'
          src={company6}
          alt='zoom logo'
        />
      </div>
    </header>
  );
}

export default Header;
