import React from "react";
import "./index.css";
import { withRouter } from "react-router-dom";
import Projects from "../../mock/project";

const MissionCard = ({
  id,
  title,
  description,
  imageUrl,
  showProgress,
  history
}) => {
  const [showDetails, setShowDetails] = React.useState(false);
  const tasks = Projects[id].tasks;
  const status = Projects[id].status;
  const conflict = Projects[id].conflict;
  const completed = Projects[id].completed;
  return (
    <div
      className="project-wrapper"
      onClick={() => {
        if (showProgress) {
          history.push("/project/" + id);
          return;
        }
        setShowDetails(!showDetails);
      }}
    >
      <div className="main-content">
        <div className="text-content">
          <h4>{title}</h4>
          <p>{description}</p>
        </div>
        {imageUrl && <img src={imageUrl} alt="logo for this project" />}
      </div>
      {/* <div className="navigation">View Milestone</div> */}
      {showProgress && (
        <div className="progress">
          {tasks.map((v, i) => (
            <div
              key={v}
              className={[
                "progress-traker",
                (i < status || completed) && "progress-complete",
                i === status && conflict && !completed && "progress-conflict"
              ].join(" ")}
            />
          ))}
        </div>
      )}
      {showDetails && (
        // This shoudl write into mock file, but im too lazy
        <div className="project-detail">
          For prototype, there will be like login screen, one entry screen, one
          dashboard, one config screen, some server side computation using
          substantial data to demonstrate the performance, one report generation
          interface.
        </div>
      )}
    </div>
  );
};

export default withRouter(MissionCard);
