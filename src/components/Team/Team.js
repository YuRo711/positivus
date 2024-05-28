import Employee from "../Employee/Employee";
import "./Team.css";


function Team(props) {
  return (
    <div className="team">
      <div className="team__cards">
        <Employee/>
      </div>
    </div>
  );
}

export default Team;