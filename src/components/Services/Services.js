import ServiceCard from '../ServiceCard/ServiceCard';
import './Services.css';
import image1 from '../../images/tokyo-magnifier-web-search-with-elements 2.svg';
import image2 from '../../images/tokyo-selecting-a-value-in-the-browser-window 1.svg';
import image3 from '../../images/tokyo-browser-window-with-emoticon-likes-and-stars-around 2.svg';
import image4 from '../../images/tokyo-sending-messages-from-one-place-to-another 1.svg';
import image5 from '../../images/tokyo-many-browser-windows-with-different-information 1.svg';
import image6 from '../../images/tokyo-volumetric-analytics-of-different-types-in-web-browsers 2.svg';


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
      <ServiceCard
        bgColor="black"
        titleColor="white"
        buttonColor="white"
        title="Social media marketing"
        image={image3}
      />
      <ServiceCard
        bgColor="white"
        titleColor="green"
        buttonColor="green"
        title="Email marketing"
        image={image4}
      />
      <ServiceCard
        bgColor="green"
        titleColor="white"
        buttonColor="green"
        title="Content creation"
        image={image5}
      />
      <ServiceCard
        bgColor="black"
        titleColor="green"
        buttonColor="white"
        title="Analytics and tracking"
        image={image6}
      />
    </div>
  );
}

export default Services;
