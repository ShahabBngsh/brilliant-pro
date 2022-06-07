import React from "react";
import './Dashboard.css'

const Dashboard = () => {


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
