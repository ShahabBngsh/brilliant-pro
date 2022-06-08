import { Box, Button, FormLabel, TextField } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddAssessment = () => {
  const history = useNavigate();
  const [inputs, setInputs] = useState({
    title:'',
    duration:'',
    minPassingCriteria:'',
    questions:[],
    answers:[],
  });

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    sendRequest().then(() => history("/assessments"));
  };
  const sendRequest = async () => {
    await axios
      .post("http://localhost:5000/api/assessments/", {    
        title: String(inputs.title),
        duration: String(inputs.duration),
        minPassingCriteria:String(inputs.minPassingCriteria),
        questions:[String(inputs.questions)],
        answers:[String(inputs.answers)]
    })
      .then((res) => res.data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box display="flex" flexDirection="column" padding="10px" margin="50px">
        <FormLabel>Title</FormLabel>
        <TextField
          value={inputs.title}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="title"
        ></TextField>
        <FormLabel>Duration</FormLabel>
        <TextField
          value={inputs.duration}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="duration"
        ></TextField>
        <FormLabel>Min Passing Criteria</FormLabel>
        <TextField
          value={inputs.minPassingCriteria}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="minPassingCriteria"
        ></TextField>
        <FormLabel>Questions</FormLabel>
        <TextField
          value={inputs.questions}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="questions"
        ></TextField>
        <FormLabel>Answers</FormLabel>
        <TextField
          value={inputs.answers}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="answers"
        ></TextField>

        <Button variant="contained" type="submit">
          Add Assessment
        </Button>
      </Box>
    </form>
  );
};

export default AddAssessment;
