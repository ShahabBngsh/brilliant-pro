import { Tab } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Course from "./Course";

const URL = "http://localhost:5000/api/courses";

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};

const Courses = () => {
  const [courses, setCourses] = useState();
  useEffect(() => {
    fetchHandler().then((data) => setCourses(data.courses));
  }, []);
  console.log(courses);

  return (
    <div>
    <Tab LinkComponent={NavLink} to="/addCourse" label="Add Course" />

      <ul>
        {courses &&
          courses.map((course, i) => (
            <li className="course" key={i}>
              <Course course={course} />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Courses;
