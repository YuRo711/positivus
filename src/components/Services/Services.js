import ServiceCard from '../ServiceCard/ServiceCard';
import './Services.css';
import image1 from '../../images/tokyo-magnifier-web-search-with-elements 2.svg';
import image2 from '../../images/tokyo-selecting-a-value-in-the-browser-window 1.svg';

function Services(props) {
  return (
    <div className="services">
      <ServiceCard
        bgColor="white"
        titleColor="green"
        buttonColor="green"
        title="Search engine optimization"
        image={image1}
      />
      <ServiceCard
        bgColor="green"
        titleColor="white"
        buttonColor="green"
        title="Pay-per-click advertising"
        image={image2}
      />
    </div>
  );
}

export default Services;
