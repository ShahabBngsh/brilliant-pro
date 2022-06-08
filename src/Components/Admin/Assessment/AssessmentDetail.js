import { Button, FormLabel, TextField, Box } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const AssessmentDetail = () => {
  const [inputs, setInputs] = useState();

  const id = useParams().id;
  console.log(id);
  const history = useNavigate();
  useEffect(() => {
    const fetchHandler = async () => {
      await axios
        .get(`http://localhost:5000/api/assessments/${id}`)
        .then((res) => res.data)
        .then((data) => setInputs(data.assessment));
    };
    fetchHandler();
  }, [id]);

  const sendRequest = async () => {
    await axios
      .put(`http://localhost:5000/api/assessments/${id}`, {
        title: String(inputs.title),
        duration: String(inputs.duration),
        minPassingCriteria: String(inputs.minPassingCriteria),
        questions: [String(inputs.questions)],
        answers: [String(inputs.answers)],
      })
      .then((res) => res.data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest().then(() => history("/assessments"));
  };
  const handleChange = (e) => {
    // console.log(e);
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  console.log(inputs);
  return (
    <div>
      {inputs && (
        <form onSubmit={handleSubmit}>
          <Box
            display="flex"
            flexDirection="column"
            padding="10px"
            margin="50px"
          >
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
      )}
    </div>
  );
};

export default AssessmentDetail;
