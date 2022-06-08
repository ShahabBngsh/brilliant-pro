const express = require('express');
const mongoose=require('mongoose');
const cors = require('cors');
const courseRouter=require('./routes/course-routes')
const learnerRouter=require('./routes/learner-routes')
const assessmentRouter=require('./routes/assessment-routes')
const materialRouter=require('./routes/material-routes')

const app = express();

app.use(cors());
app.use(express.json());


app.use('/api/courses',courseRouter);
app.use('/api/learners',learnerRouter);
app.use('/api/assessments',assessmentRouter);
app.use('/api/materials',materialRouter);


mongoose.connect("mongodb://localhost:27017/brilliantpro")
.then(()=>console.log("Connected to the Database"))
.then(()=>{
  app.listen(5000,console.log("Listening on port 5000"))
})
.catch((err=>{
  console.log("Error connecting to the Database");
}))