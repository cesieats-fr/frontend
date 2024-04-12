import { Button, Stack, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store";
import { useMemo } from "react";
import { addOrderReducer, emptyCart } from "../../../store/reducers/order";
import { addOrder, addOrderItems, addOrderMenus } from "../../../api/services/order";
import { IOrder, IOrderItems, IOrderMenus } from "cesieats-service-types/src/order";

function CartTitle() {
  const dispatch = useDispatch<AppDispatch>();

  const orderCart = useSelector((state: RootState) => state.order.orderCart);
  const account = useSelector((state: RootState) => state.account.account);
  const isOrderCartNotEmpty = useMemo(() => (
    orderCart && orderCart.items && orderCart.items.length > 0 || orderCart.menus && orderCart.menus.length > 0
  ), [orderCart])

  const handleAddOrder = async () => {
    const response = await addOrder(orderCart.restaurant._id!, orderCart.price, orderCart.restaurant.name, orderCart.restaurant.address, orderCart.restaurant.telephone, orderCart.restaurant.idAccount!, account.address!, account.name);
    const order: IOrder = response.data;
    dispatch(addOrderReducer(order));
    const idOrder = order._id!;
    const orderItems: IOrderItems[] = orderCart.items.map((item) => { return { idItem: item.item._id!, idOrder, amount: item.amount } });
    const orderMenus: IOrderMenus[] = orderCart.menus.map((menu) => { return { idMenu: menu.menu._id!, idOrder, amount: menu.amount } });
    addOrderItems(orderItems);
    addOrderMenus(orderMenus);
    console.log(orderItems);
    console.log(orderMenus);
  }

  const handleDeleteCart = () => {
    dispatch(emptyCart());
  }

  return (
    <Stack direction="row" justifyContent={isOrderCartNotEmpty ? "space-between" : "center"} width="100%">
      <Typography variant="h5">
        Panier {isOrderCartNotEmpty && `: ${orderCart.price}€`}
      </Typography>
      
      { orderCart && isOrderCartNotEmpty &&
      <Stack direction="row" spacing={5}>
        <Button variant="contained" onClick={handleAddOrder}>
          Valider
        </Button>
        <Button variant="outlined" onClick={handleDeleteCart} color="error">
          Vider le panier
        </Button>
      </Stack>
      }
    </Stack>
  )
}

export default CartTitle;