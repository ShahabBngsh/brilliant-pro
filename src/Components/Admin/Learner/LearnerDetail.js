import {
  Button,
  FormLabel,
  TextField,
  Box,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const LearnerDetail = () => {
  const [inputs, setInputs] = useState();

  const id = useParams().id;
  console.log(id);
  const history = useNavigate();
  useEffect(() => {
    const fetchHandler = async () => {
      await axios
        .get(`http://localhost:5000/api/learners/${id}`)
        .then((res) => res.data)
        .then((data) => setInputs(data.learner));
    };
    fetchHandler();
  }, [id]);

  const sendRequest = async () => {
    await axios
      .put(`http://localhost:5000/api/learners/${id}`, {
        name: String(inputs.name),
        img: String(inputs.img),
        bio: String(inputs.bio),
        achievements: [String(inputs.achievements)],
        enrolled: [String(inputs.enrolled)],
        assesmests: [String(inputs.assesments)],
        balance: Number(inputs.balance),
      })
      .then((res) => res.data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest().then(() => history("/learners"));
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
            <FormLabel>Name</FormLabel>
            <TextField
              value={inputs.name}
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="name"
            ></TextField>
            <FormLabel>Image</FormLabel>
            <TextField
              value={inputs.img}
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="img"
            ></TextField>
            <FormLabel>Bio</FormLabel>
            <TextField
              value={inputs.bio}
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="bio"
            ></TextField>
            <FormLabel>Achievements</FormLabel>
            <TextField
              value={inputs.achievements}
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="achievements"
            ></TextField>
            <FormLabel>Enrolled</FormLabel>
            <TextField
              value={inputs.enrolled}
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="enrolled"
            ></TextField>
            <FormLabel>Assesments</FormLabel>
            <TextField
              value={inputs.assesments}
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="assesments"
            ></TextField>

            <FormLabel>Balance</FormLabel>
            <TextField
              value={inputs.balance}
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="balance"
            ></TextField>

            <Button variant="contained" type="submit">
              Add Learner
            </Button>
          </Box>
        </form>
      )}
    </div>
  );
};

export default LearnerDetail;
