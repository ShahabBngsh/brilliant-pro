import { Tab } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Assessment from "./Assessment";

const URL = "http://localhost:5000/api/assessments";

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};

const Assessments = () => {
  const [assessments, setAssessments] = useState();
  useEffect(() => {
    fetchHandler().then((data) => setAssessments(data.assessments));
  }, []);
  console.log(assessments);

  return (
    <div>
    <Tab LinkComponent={NavLink} to="/addAssessment" label="Add Assessment" />

      <ul>
        {assessments &&
          assessments.map((assessment, i) => (
            <li className="assessment" key={i}>
              <Assessment assessment={assessment} />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Assessments;
