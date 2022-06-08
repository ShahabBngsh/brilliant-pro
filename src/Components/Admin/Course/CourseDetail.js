import {
  Button,
  FormLabel,
  TextField,
  Box,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const CourseDetail = () => {
  const [inputs, setInputs] = useState();

  const id = useParams().id;
  console.log(id);
  const history=useNavigate();
  useEffect(() => {
    const fetchHandler = async () => {
      await axios
        .get(`http://localhost:5000/api/courses/${id}`)
        .then((res) => res.data)
        .then((data)=>setInputs(data.course));
    };
    fetchHandler();
  }, [id]);


  const sendRequest = async () => {
    await axios.put(`http://localhost:5000/api/courses/${id}`, {
      title: String(inputs.title),
      img: String(inputs.img),
      overview: String(inputs.overview),
      price:Number(inputs.price),
      offeredBy: String(inputs.offeredBy),
      skills:[String(inputs.skills)],
      materials:[String(inputs.materials)],
      assessmests:[String(inputs.assesments)],
      enrolled:[String(inputs.enrolled)],
      mid:[String(inputs.mid)],
      failed:[String(inputs.failed)],
      passed:[String(inputs.passed)],  
  }).then(res=>res.data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest().then(()=>history('/courses'));
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
      <FormLabel>Image</FormLabel>
      <TextField
        value={inputs.img}
        onChange={handleChange}
        margin="normal"
        fullWidth
        variant="outlined"
        name="img"
      ></TextField>
      <FormLabel>Overview</FormLabel>
      <TextField
        value={inputs.overview}
        onChange={handleChange}
        margin="normal"
        fullWidth
        variant="outlined"
        name="overview"
      ></TextField>
      <FormLabel>Price</FormLabel>
      <TextField
        value={inputs.price}
        onChange={handleChange}
        type="number"
        margin="normal"
        fullWidth
        variant="outlined"
        name="price"
      ></TextField>
      <FormLabel>OfferedBy</FormLabel>
      <TextField
        value={inputs.offeredBy}
        onChange={handleChange}
        margin="normal"
        fullWidth
        variant="outlined"
        name="offeredBy"
      ></TextField>
      <FormLabel>Skills</FormLabel>
      <TextField
        value={inputs.skills}
        onChange={handleChange}
        margin="normal"
        fullWidth
        variant="outlined"
        name="skills"
      ></TextField>
      <FormLabel>Materials</FormLabel>
      <TextField
        value={inputs.materials}
        onChange={handleChange}
        margin="normal"
        fullWidth
        variant="outlined"
        name="materials"
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
      <FormLabel>Enrolled</FormLabel>
      <TextField
        value={inputs.enrolled}
        onChange={handleChange}
        margin="normal"
        fullWidth
        variant="outlined"
        name="enrolled"
      ></TextField>
      <FormLabel>Mid</FormLabel>
      <TextField
        value={inputs.mid}
        onChange={handleChange}
        margin="normal"
        fullWidth
        variant="outlined"
        name="mid"
      ></TextField>
      <FormLabel>Failed</FormLabel>
      <TextField
        value={inputs.failed}
        onChange={handleChange}
        margin="normal"
        fullWidth
        variant="outlined"
        name="failed"
      ></TextField>
      <FormLabel>Passed</FormLabel>
      <TextField
        value={inputs.passed}
        onChange={handleChange}
        margin="normal"
        fullWidth
        variant="outlined"
        name="passed"
      ></TextField>

      <Button variant="contained" type="submit">
        Update Course
      </Button>
    </Box>
  </form>
    )}
    </div>
  );
};

export default CourseDetail;
