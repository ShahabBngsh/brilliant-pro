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

const Learner = (props) => {

  const { _id, name, img, bio, achievements, enrolled, assesments, balance } =
    props.learner;

  const history = useNavigate();

  const deleteHandler = async () => {
    if (window.confirm("Are you sure to Delete the Record?")) {
      await axios
        .delete(`http://localhost:5000/api/learners/${_id}`)
        .then((res) => res.data)
        .then(() => history("/learners"));
    }
  };

  return (
    <div>
      <Card sx={{ maxWidth: 345, margin: 10, padding: 1 }}>
        <CardMedia component="img" height="190" image={img} alt={name} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {bio}
          </Typography>
          <Typography variant="p" color="text.secondary">
            <br/>
            Achievements: {" "+achievements}
          </Typography>
          <Typography variant="p" color="text.secondary">
            <br/>
            Enrolled: {" " + enrolled}
          </Typography>
          <Typography variant="p" color="text.secondary">
            <br />
            Assessments:
            {" " + assesments}
          </Typography>

          <Typography variant="body2" color="text.secondary">
            {balance}
          </Typography>

        </CardContent>
        <CardActions>
          <Button LinkComponent={Link} to={`/learners/${_id}`} size="small">
            Update Learner
          </Button>
          <Button
            LinkComponent={Link}
            to={"/learners"}
            onClick={deleteHandler}
            size="small"
          >
            Delete Learner
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default Learner;
