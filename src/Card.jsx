import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Draggable from "react-draggable";
export default function CardE({ img, text, show, setShow }) {
  return (
    <Draggable>
      <Card sx={{ maxWidth: 345 }} onClick={() => setShow(!show)}>
        <CardActionArea>
          <CardMedia component="img" height="100" image={img} alt={img} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {text}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Draggable>
  );
}
