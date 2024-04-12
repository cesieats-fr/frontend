import { Divider, Stack, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import MenuCard from "../../../components/menu";
import ItemCard from "../../../components/item";
import ItemActions from "./itemActions";
import MenuActions from "./menuActions";

function Restaurant() {
  const menus = useSelector((state: RootState) => state.item.menus);
  const items = useSelector((state: RootState) => state.item.items);

  return (
    <Stack spacing={3} direction="column"  divider={<Divider orientation="horizontal" flexItem />} alignItems="center">
      {menus && menus.length > 0 &&
        <Stack spacing={5} alignItems="center">
          <Typography variant="h6">
            Menus
          </Typography>
          <Stack spacing={3} direction="row" useFlexGap flexWrap="wrap" justifyContent="space-around">
            { menus &&
              menus.map((menu, index) => <MenuCard menu={menu} key={index} actions={<MenuActions menu={menu} key={index} />} />)
            }
          </Stack>
        </Stack>
      }
      
      {items && items.length > 0 &&
        <Stack spacing={5} alignItems="center">
          <Typography variant="h6">
            Articles
          </Typography>
          <Stack spacing={3} direction="row" useFlexGap flexWrap="wrap" justifyContent="space-around">
            { items &&
              items.map((item, index) => <ItemCard item={item} key={index} actions={<ItemActions item={item} key={index} />} />)
            }
          </Stack>
        </Stack>
      }
    </Stack>
  )
}

export default Restaurant;