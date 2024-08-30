import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import ReactStars from "react-stars";
import { Button } from "@mui/material";
import Chip from "@mui/material/Chip";


export default function MediaControlCard({ detail }) {
  const theme = useTheme();


  return (
    <Card sx={{ display: "flex" }}>
      <CardMedia
        component="img"
        sx={{ width: 275, objectFit: "contain" }}
        image={detail.image}
        alt="Live from space album cover"
      />

      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
            {detail.title}
          </Typography>

          <Typography
            variant="subtitle1"
            component="div"
            sx={{ color: "text.secondary" }}
          >
            {detail.description}
          </Typography>

          <ReactStars
            edit={false}
            value={detail.rating.rate}
            count={5}
            size={30}
            color2={"#ffd700"}
          />
          <div style={{ marginTop: 10, marginBottom: 10 }}>
            <Chip label={detail.category} />
          </div>

          <Typography variant="h6" component="div">
            Rs {detail.price} /-
          </Typography>
          <div style={{ marginTop: 10 }}>
            <Button size="small">ADD TO CART</Button>

            <Button
              style={{ marginLeft: 10 }}
              className="view-detail-btn"
              size="small"
            >
              BUY NOW
            </Button>
          </div>
        </CardContent>
      </Box>
    </Card>
  );
}
