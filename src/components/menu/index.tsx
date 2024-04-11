import { Card, CardContent, Typography, Grid } from "@mui/material";
import { IMenu } from "cesieats-service-types/src/item";
import { ReactElement } from "react";

interface IMenuProps {
  menu: IMenu;
  actions: ReactElement
}

function MenuCard({ menu, actions }: IMenuProps) {
  
  return (
    <Grid item xs={4} className="min-w-64">
      <Card>
        <CardContent>
          <Typography gutterBottom>
            { menu.title }
          </Typography>
          <Typography color="text.secondary">
          { menu.description }
          </Typography>

        <Typography>{ menu.price.toString() + "€"}</Typography>
      </CardContent>
      { actions }
    </Card>
    </Grid>
  );
}

export default MenuCard;
