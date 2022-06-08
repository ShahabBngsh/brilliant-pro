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
  
  const Material = (props) => {
    const {
      _id,
      title,
      link,
    } = props.material;
  
    const history = useNavigate();
  
    const deleteHandler =async()=>{
  
      if(window.confirm("Are you sure to Delete the Record?")){
        await axios.delete(`http://localhost:5000/api/materials/${_id}`)
        .then((res)=>res.data)
        .then(()=>history("/materials"))
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
              {link}
            </Typography>

          </CardContent>
          <CardActions>
            <Button LinkComponent={Link} to={`/materials/${_id}`} size="small">Update Material</Button>
            <Button LinkComponent={Link} to={"/materials"} onClick={deleteHandler} size="small">Delete Material</Button>
          </CardActions>
        </Card>
      </div>
    );
  };
  
  export default Material;
  