import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Dashboard.css";

const URL = "http://localhost:5000/api/courses";
const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};

const Dashboard = () => {
  const [courses, setCourses] = useState();
  useEffect(() => {
    fetchHandler().then((data) => setCourses(data.courses));
  }, []);
  console.log(courses);

  return (
    <React.Fragment>
      <div className="dashboard">
        <div>
          <h1>Courses Enrolled</h1>
          <label>100</label>
        </div>
        <div>
          <h1>Total Learners</h1>
          <label>5</label>
        </div>

        <div>
          <h1>Materials</h1>
          <label>25</label>
        </div>

        <div>
          <h1>Certificates Offered</h1>
          <label>30</label>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Dashboard;
