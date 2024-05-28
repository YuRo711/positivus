import CaseStudies from '../CaseStudies/CaseStudies';
import FreeContact from '../FreeContact/FreeContact';
import Process from '../Process/Process';
import Section from '../Section/Section';
import Services from '../Services/Services';
import Team from '../Team/Team';
import './Main.css';

function Main(props) {
  return (
    <main className="main">
      <Section
        descLen="long"
        title="Services"
        description="At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:"
      >
        <Services/>
      </Section>
      <FreeContact/>
      <Section
        descLen="long"
        title="Case Studies"
        description="Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies"
      >
        <CaseStudies/>
      </Section>
      <Section
        descLen="short"
        title="Our Working Process"
        description="Step-by-Step Guide to Achieving Your Business Goals"
      >
        <Process/>
      </Section>
      <Section
        descLen="medium"
        title="Team"
        description="Meet the skilled and experienced team behind our successful digital marketing strategies"
      >
        <Team/>
      </Section>
    </main>
  );
}

export default Main;
