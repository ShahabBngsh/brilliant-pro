import {
    Button,
    Card,
    CardActions,
    CardContent,
    Typography,
  } from "@mui/material";
  import axios from "axios";
  import React from "react";
  import { Link, useNavigate } from "react-router-dom";
  
  const Assessment = (props) => {
    const {
      _id,
      title,
      duration,
      minPassingCriteria,
      questions,
      answers
    } = props.assessment;
  
    const history = useNavigate();
  
    const deleteHandler =async()=>{
  
      if(window.confirm("Are you sure to Delete the Record?")){
        await axios.delete(`http://localhost:5000/api/assessments/${_id}`)
        .then((res)=>res.data)
        .then(()=>history("/assessments"))
      }    
    };
  
    return (
      <div>
        <Card sx={{ maxWidth: 345, margin: 10, padding: 1 }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {duration}
            </Typography>
            <Typography variant="h4" color="text.secondary">
              Min Passing Criterai: {minPassingCriteria} 
            </Typography>
            <Typography variant="p" color="text.secondary">
              Questions: {questions} 
            </Typography>
            <Typography variant="p" color="text.secondary">
            <br />
              Answers:{" " + answers} 
            </Typography>

          </CardContent>
          <CardActions>
            <Button LinkComponent={Link} to={`/assessments/${_id}`} size="small">Update Assessment</Button>
            <Button LinkComponent={Link} to={"/assessments"} onClick={deleteHandler} size="small">Delete Assessment</Button>
          </CardActions>
        </Card>
      </div>
    );
  };
  
  export default Assessment;
  