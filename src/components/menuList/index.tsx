import { Grid, Stack } from "@mui/material";
import MenuCard from "../menu";
import { deleteMenu, getMenusByRestaurantId } from "../../store/reducers/item";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";

export interface IMenuListProps {
  idRestaurant: string;
}

function MenuList({ idRestaurant }: IMenuListProps) {
  const dispatch = useDispatch<AppDispatch>();

  const menus = useSelector((state: RootState) => state.item.items);

  useEffect(() => {
    dispatch(getMenusByRestaurantId(idRestaurant));
  }, [dispatch, menus, idRestaurant]);

  const onDelete = (idMenu: string) => {
    deleteMenu(idMenu);
  }

  return (
    <Stack>
        <Grid container spacing={2}>
            { menus && menus.map((menu, index) => {
                return (
                    <Grid item xs={4}>
                        <MenuCard menu={menu} key={index} onDelete={onDelete} />
                    </Grid>
                    );
                })
            }
        </Grid>
    </Stack>


  );
}

export default MenuList;
