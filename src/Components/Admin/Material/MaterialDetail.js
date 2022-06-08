import { Button, FormLabel, TextField, Box } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const MaterialDetail = () => {
  const [inputs, setInputs] = useState();

  const id = useParams().id;
  console.log(id);
  const history = useNavigate();
  useEffect(() => {
    const fetchHandler = async () => {
      await axios
        .get(`http://localhost:5000/api/materials/${id}`)
        .then((res) => res.data)
        .then((data) => setInputs(data.material));
    };
    fetchHandler();
  }, [id]);

  const sendRequest = async () => {
    await axios
      .put(`http://localhost:5000/api/materials/${id}`, {
        title: String(inputs.title),
        link: String(inputs.link),
      })
      .then((res) => res.data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest().then(() => history("/materials"));
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
            <FormLabel>Link</FormLabel>
            <TextField
              value={inputs.link}
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
      )}
    </div>
  );
};

export default MaterialDetail;
