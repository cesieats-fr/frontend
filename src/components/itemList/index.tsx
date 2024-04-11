import { Grid } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import ItemCard from "../item";
import ItemListActions from "./actions";

function ItemList() {
  const items = useSelector((state: RootState) => state.item.items);

  return (
    <Grid container spacing={2}>
      { items && items.map((item, index) => {
        return (
            <ItemCard item={item} key={index} actions={<ItemListActions item={item} />} />
          );
        })
      }
    </Grid>
  );
}

export default ItemList;
