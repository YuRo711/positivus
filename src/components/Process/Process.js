import Step from "../Step/Step";
import "./Process.css";

function Process(props) {
  return (
    <div className="process">
      <Step
        number="01"
        title="Consultation"
        text="During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."
      />
    </div>
  );
}

export default Process;