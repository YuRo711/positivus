import "./Employee.css";

function Employee(props) {
  const {image, name, job, text} = props;

  return (
    <div className="employee">
      <div className="employee__header">
        <div className="employee__portrait">
          <img className="employee__image"
            src={image}
            alt="employee portrait"
          />
        </div>
        <div className="employee__info">
          <h4 className="employee__name">{name}</h4>
          <p className="employee__job">{job}</p>
        </div>
      </div>
      <p className="employee__text">{text}</p>
    </div>
  );
}

export default Employee;