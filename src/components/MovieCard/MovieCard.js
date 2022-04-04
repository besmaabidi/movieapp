import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Stars from "../Stars/Stars";
// import MovieForm from "../MovieForm/MovieForm";
import "./moviecard.css";
import { Link } from "react-router-dom";


const MovieCard = ({ movie: { title, image, rate, year,id } }) => {
    return (
      <Card sx={{ maxWidth: 345 }} className="mycard">
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt="green iguana"
          className="card"
        />
        <CardContent className="cart">
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {year}
          </Typography>
  
          <Stars isEdit={false} rating={rate} />
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions className="buttons">
          <div >
            <Button size="small">Share</Button>
            <Link to={`/moviedetails/${id}`}>
            <Button size="small">Show More</Button>
            </Link>
          </div>
  
          {/* <MovieForm isEdit={true} /> */}
        </CardActions>
      </Card>
    );
  };
  
  export default MovieCard;