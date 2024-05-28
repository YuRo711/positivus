import Section from '../Section/Section';
import Services from '../Services/Services';
import './Main.css';

function Main(props) {
  return (
    <main className="main">
      <Section
        title="Services"
        description="At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:"
      >
        <Services/>
      </Section>
    </main>
  );
}

export default Main;
