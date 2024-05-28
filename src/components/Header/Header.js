import './Header.css';
import logo from '../../images/logo.svg'

function Header() {
  return (
    <header className='header'>
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
        <button className='header__button' type='button'>
          Request a quote
        </button>
      </nav>
    </header>
  );
}

export default Header;
