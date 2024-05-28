import { useState } from "react";
import "./Step.css";

function Step(props) {
  function toggleOpen() {
    setIsOpen(!isOpen);
  }

  const {number, title, text} = props;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`step ${isOpen ? "step_opened" : ""}`}>
      <div className="step__header">
        <p className="step__number">{number}</p>
        <h3 className="step__title">{title}</h3>
        <button 
          className={`step__button step__button_${isOpen ? "plus" : "minus"}`}
          type="button"
          onClick={toggleOpen}
        ></button>
      </div>
      <p className={`step__text ${isOpen ? "step__text_visible" : ""}`}>
        {text}
      </p>
    </div>
  );
}

export default Step;