import { IOrder } from "cesieats-service-types/src/order";
import * as React from "react";
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

const Restaurant: React.FC<IDeleveryProps> = ({ order }) => {
  return (
    <div className="justify-center flex flex-wrap gap-4 flex-col">
      <Chip
        label={
          <span>
            <span>10,0</span>
            <span className="text-primaryLighter font-bold">$</span>
          </span>
        }
        variant="outlined"
        style={{ backgroundColor: "black", color: "white"  }}
      />
      <div className="flex flex-wrap justify-center gap-4">
        <div >
          <Card sx={{ minWidth: 275, border: "2px solid black" }}>
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
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
            <CardActions className="flex justify-center">
              <Button variant="contained" className="" size="small">
                Accepter la livraison
              </Button>
            </CardActions>
          </Card>
        </div>
        <br />
        <div>
          <Card sx={{ minWidth: 275, border: "2px solid black" }}>
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
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
            <CardActions className="flex justify-center">
              <Button variant="contained" className="" size="small">
                Accepter la livraison
              </Button>
            </CardActions>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Restaurant;
