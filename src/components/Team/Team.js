import { useState } from "react";
import { employees } from "../../utils/constants";
import Employee from "../Employee/Employee";
import "./Team.css";

function Team(props) {
  function openAll() {
    setCardsShown(employees.length);
  }

  const [cardsShown, setCardsShown] = useState(3);

  return (
    <div className="team">
      <div className="team__cards">
        {
          employees.map((data, id) => {
            return <Employee
              key={`em${id}`}
              name={data.name}
              image={data.image}
              job={data.job}
              text={data.text}
            />
          })
          .slice(0, cardsShown)
        }
      </div>
      <button className={`black-button team__button 
        ${cardsShown > 3 ? "team__button_hidden" : ""}`}
        type="button"
        onClick={openAll}
      >
        See all team
      </button>
    </div>
  );
}

export default Team;