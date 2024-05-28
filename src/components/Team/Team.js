import { employees } from "../../utils/constants";
import Employee from "../Employee/Employee";
import "./Team.css";


function Team(props) {
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
        }
      </div>
    </div>
  );
}

export default Team;