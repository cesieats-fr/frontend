import { Grid, Stack } from "@mui/material";
import { deleteItem, getItemsByRestaurantId } from "../../store/reducers/item";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import ItemCard from "../item";

export interface IItemListProps {
  idRestaurant: string;
}

function ItemList({ idRestaurant }: IItemListProps) {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getItemsByRestaurantId(idRestaurant));
  }, [dispatch, idRestaurant]);

  const items = useSelector((state: RootState) => state.item.items);



  const onDelete = (idItem: string) => {
    deleteItem(idItem);
  }

  return (
    <Stack>
        <Grid container spacing={2}>
            { items && items.map((item, index) => {
                return (
                    <Grid item xs={4}>
                        <ItemCard item={item} key={index} onDelete={onDelete} />
                    </Grid>
                    );
                })
            }
        </Grid>
    </Stack>


  );
}

export default ItemList;
