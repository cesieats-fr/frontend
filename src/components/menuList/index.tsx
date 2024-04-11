import { Grid } from "@mui/material";
import MenuCard from "../menu";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import MenuListActions from "./actions";

function MenuList() {
  const menus = useSelector((state: RootState) => state.item.menus);

  return (
    <Grid container spacing={2}>
      { menus && menus.map((menu, index) => {
        return (
            <MenuCard menu={menu} key={index} actions={<MenuListActions menu={menu} />} />
          );
        })
      }
    </Grid>
  );
}

export default MenuList;
