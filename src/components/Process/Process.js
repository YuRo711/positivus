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
      <Step
        number="02"
        title="Research and Strategy Development"
        text="During the research and strategy development phase, we delve into market trends, competitor analysis, and consumer behavior to craft a tailored approach that aligns with your objectives. This meticulous process ensures our strategies are finely tuned to maximize your business's potential for success."
      />
      <Step
        number="03"
        title="Implementation"
        text="During implementation, we seamlessly translate our meticulously crafted strategies into action, leveraging innovative tools and techniques to amplify your brand's presence and drive tangible results. Our dedicated team ensures a smooth execution, keeping your business objectives at the forefront every step of the way."
      />
      <Step
        number="04"
        title="Monitoring and Optimization"
        text="Throughout the monitoring and optimization phase, we vigilantly track key performance indicators, refining our approach based on real-time data insights to continuously enhance your campaign's effectiveness and maximize ROI."
      />
      <Step
        number="05"
        title="Reporting and Communication"
        text="During reporting and communication, we provide transparent and detailed insights into campaign performance, accompanied by clear explanations and actionable recommendations to foster collaborative decision-making."
      />
      <Step
        number="06"
        title="Continual Improvement"
        text="Continual improvement is integral to our approach, driving us to refine our strategies and processes through ongoing analysis and adaptation. By embracing feedback and staying abreast of industry trends, we ensure that our services evolve in alignment with your evolving business needs."
      />
    </div>
  );
}

export default Process;