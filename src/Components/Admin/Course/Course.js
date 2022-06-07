import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import axios from "axios";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Course = (props) => {
  const {
    _id,
    title,
    img,
    overview,
    price,
    offeredBy,
    skills,
    materials,
    assesments,
    enrolled,
    mid,
    failed,
    passed,
  } = props.course;

  const history = useNavigate();

  const deleteHandler =async()=>{

    if(window.confirm("Are you sure to Delete the Record?")){
      await axios.delete(`http://localhost:5000/api/courses/${_id}`)
      .then((res)=>res.data)
      .then(()=>history("/courses"))
    }    
  };

  return (
    <div>
      <Card sx={{ maxWidth: 345, margin: 10, padding: 1 }}>
        <CardMedia component="img" height="190" image={img} alt={title} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {overview}
          </Typography>
          <Typography variant="h4" color="text.secondary">
            Rs: {price} 
          </Typography>
          <Typography variant="p" color="text.secondary">
            Offered By: {offeredBy} 
          </Typography>
          <Typography variant="p" color="text.secondary">
          <br />
            Skills:{" " + skills} 
          </Typography>
          <Typography variant="p" color="text.secondary">
          <br />
            Materials: 
            {" "+materials}  
          </Typography>
          <Typography variant="p" color="text.secondary">
          <br />
            Assessments: 
            {" "+assesments}   
          </Typography>
          <Typography variant="p" color="text.secondary">
          <br />
            Enrolled: 
            {" "+enrolled}   
          </Typography>
          <Typography variant="p" color="text.secondary">
          <br />
            Mid: 
            {" "+mid}   
          </Typography>
          <Typography variant="p" color="text.secondary">
          <br />
            Failed: 
            {" "+failed}   
          </Typography>
          <Typography variant="p" color="text.secondary">
          <br />
            Passed: 
            {" "+passed}   
          </Typography>

        </CardContent>
        <CardActions>
          <Button LinkComponent={Link} to={`/courses/${_id}`} size="small">Update Course</Button>
          <Button LinkComponent={Link} to={"/courses"} onClick={deleteHandler} size="small">Delete Course</Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default Course;
