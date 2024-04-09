import { IOrder } from "cesieats-service-types/src/order";
import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CardMedia } from "@mui/material";
import Chip from "@mui/material/Chip";

interface IDeleveryProps {
  order: IOrder;
}

const bull = (
  <Box
    component="span"
    sx={{ display: "inline", mx: "4px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const Restaurant: React.FC<IDeleveryProps> = ({ order }) => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="">
        <Chip
          label="10,0$"
          variant="outlined"
          style={{ backgroundColor: "black", color: "white" }}
          deleteIcon={<span className="text-green-500">$</span>}
        />
      </div>

      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            NOM DU RESTAURANT
          </Typography>
          <Typography variant="h4" component="div">
            ADRESSE DU RESTAU
          </Typography>
          <Typography variant="h4" component="div">
            téléphone du restaurant
          </Typography>

          <CardMedia
            component="img"
            height="194"
            image="/static/images/cards/paella.jpg"
            alt="Photo du restau "
          />

          <Typography variant="h4">
            Adresse client
            <br />
          </Typography>
          <Typography variant="h4">argent gagn</Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Accepter la livraison</Button>
        </CardActions>
      </Card>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            NOM DU RESTAURANT
          </Typography>
          <Typography variant="h4" component="div">
            ADRESSE DU RESTAU
          </Typography>
          <Typography variant="h4" component="div">
            téléphone du restaurant
          </Typography>

          <CardMedia
            component="img"
            height="194"
            image="/static/images/cards/paella.jpg"
            alt="Photo du restau "
          />

          <Typography variant="h4">
            Adresse client
            <br />
          </Typography>
          <Typography variant="h4">argent gagn</Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Accepter la livraison</Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default Restaurant;
