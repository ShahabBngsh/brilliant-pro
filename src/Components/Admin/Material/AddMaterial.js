import { Box, Button, FormLabel, TextField } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddMaterial = () => {
  const history = useNavigate();
  const [inputs, setInputs] = useState({
    title:'',
    link:'',
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
    sendRequest().then(() => history("/materials"));
  };
  const sendRequest = async () => {
    await axios
      .post("http://localhost:5000/api/materials/", {    
        title: String(inputs.title),
        link: String(inputs.duration),
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
        <FormLabel>Link</FormLabel>
        <TextField
          value={inputs.duration}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="link"
        ></TextField>

        <Button variant="contained" type="submit">
          Add Material
        </Button>
      </Box>
    </form>
  );
};

export default AddMaterial;
