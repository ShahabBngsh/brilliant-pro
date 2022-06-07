import { Tab } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Learner from "./Learner";

const URL = "http://localhost:5000/api/learners";

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};

const Learners = () => {
  const [learners, setLearners] = useState();
  useEffect(() => {
    fetchHandler().then((data) => setLearners(data.learners));
  }, []);
  console.log(learners);

  return (
    <div>
    <Tab LinkComponent={NavLink} to="/addLearner" label="Add Learner" />

      <ul>
        {learners &&
          learners.map((learner, i) => (
            <li className="learner" key={i}>
              <Learner learner={learner} />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Learners;
