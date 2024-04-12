import { Divider, Stack, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import ItemActions from "./itemActions";
import MenuActions from "./menuActions";
import MenuCard from "../../../components/menu";
import ItemCard from "../../../components/item";

function Cart() {
  const orderCart = useSelector((state: RootState) => state.order.orderCart);

  return (
    <Stack spacing={3} direction="column"  divider={<Divider orientation="horizontal" flexItem />} alignItems="center">
      {orderCart.menus && orderCart.menus.length > 0 &&
        <Stack>
          <Typography variant="body1">
            Menus
          </Typography>
          <Stack spacing={3} direction="row" useFlexGap flexWrap="wrap" justifyContent="space-around">
            { orderCart.menus &&
              orderCart.menus.map((menu, index) => <MenuCard menu={menu.menu} key={index} actions={<MenuActions menu={menu} key={index} />} />)
            }
          </Stack>
        </Stack>
      }
      
      {orderCart.items && orderCart.items.length > 0 &&
        <Stack>
          <Typography variant="body1">
            Articles
          </Typography>
          <Stack spacing={3} direction="row" useFlexGap flexWrap="wrap" justifyContent="space-around">
            { orderCart.items &&
              orderCart.items.map((item, index) => <ItemCard item={item.item} key={index} actions={<ItemActions item={item} key={index} />} />)
            }
          </Stack>
        </Stack>
      }
    </Stack>
  )
}

export default Cart;