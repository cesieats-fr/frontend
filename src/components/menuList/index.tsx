import { Grid, Stack } from "@mui/material";
import MenuCard from "../menu";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

function MenuList() {
  const menus = useSelector((state: RootState) => state.item.menus);

  return (
    <Stack>
        <Grid container spacing={2}>
            { menus && menus.map((menu, index) => {
              return (
                  <MenuCard menu={menu} key={index} />
                );
              })
            }
        </Grid>
    </Stack>


  );
}

export default MenuList;
