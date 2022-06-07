import { Box, Button, FormLabel, TextField } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddLearner = () => {
  const history = useNavigate();
  const [inputs, setInputs] = useState({
    name: "",
    img: "",
    bio: "",
    achievements: [],
    enrolled: [],
    assesmests: [],
    balance: undefined,
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
    sendRequest().then(() => history("/learners"));
  };
  const sendRequest = async () => {
    await axios
      .post("http://localhost:5000/api/learners/", {
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

  return (
    <form onSubmit={handleSubmit}>
      <Box display="flex" flexDirection="column" padding="10px" margin="50px">
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
  );
};

export default AddLearner;
