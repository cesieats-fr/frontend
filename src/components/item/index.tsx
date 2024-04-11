import { Card, CardContent, Typography, Grid } from "@mui/material";
import { ReactElement } from "react";
import { IItem } from "cesieats-service-types/src/item";


interface IItemProps {
  item: IItem;
  actions: ReactElement;
}

function ItemCard({ item, actions }: IItemProps) {

  return (
    <Grid item xs={4} className="min-w-64">
      <Card>
        <CardContent>
          <Typography gutterBottom>
            { item.title }
          </Typography>
          <Typography color="text.secondary">
          { item.description }
          </Typography>
        <Typography>{ item.price.toString() + "€"}</Typography>
      </CardContent>
      { actions }
    </Card>
    </Grid>
  );
}

export default ItemCard;
