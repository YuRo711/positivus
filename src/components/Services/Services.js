import { services } from '../../utils/constants';
import ServiceCard from '../ServiceCard/ServiceCard';
import './Services.css';

function Services(props) {
  return (
    <div className="services">
      {
        services.map((data, id) => {
          return (
            <ServiceCard
              key={id}
              bgColor={data.bgColor}
              titleColor={data.titleColor}
              buttonColor={data.buttonColor}
              title={data.title}
              image={data.image}
            />
          )
        })
      }
    </div>
  );
}

export default Services;
