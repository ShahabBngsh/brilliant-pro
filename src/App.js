import './App.css';
import Header from './Components/Header';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './Components/Admin/Dashboard';
import Courses from './Components/Admin/Course/Courses';
import Learners from './Components/Admin/Learner/Learners';
import Materials from './Components/Admin/Material/Materials';
import Assessments from './Components/Admin/Assessment/Assessments';
import AddCourse from './Components/Admin/Course/AddCourse';
import AddLearner from './Components/Admin/Learner/AddLearner';
import CourseDetail from './Components/Admin/Course/CourseDetail';
import LearnerDetail from './Components/Admin/Learner/LearnerDetail';

function App() {


  return (
    <React.Fragment>
      <header>
        <Header />
      </header>

      <main>
      <Routes>
        <Route exact path='/dashboard' element={<Dashboard />} />
        <Route exact path='/courses' element={<Courses />}/>
        <Route exact path='/learners' element={<Learners />} />
        <Route exact path='/material' element={<Materials />} />
        <Route exact path='/assessments' element={<Assessments />} />
        <Route exact path="/addCourse" element={<AddCourse/>}/>
        <Route exact path="/courses/:id" element={<CourseDetail />}/>
        <Route exact path="/addLearner" element={<AddLearner/>}/>
        <Route exact path="/learners/:id" element={<LearnerDetail />}/>

      </Routes>

      </main>

    </React.Fragment>

  );
}

export default App;
