import { Button, Stack, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import { useMemo } from "react";

function CartTitle() {
  const orderCart = useSelector((state: RootState) => state.orderCart.orderCart);
  const isOrderCartNotEmpty = useMemo(() => (
    orderCart && orderCart.items && orderCart.items.length > 0 || orderCart.menus && orderCart.menus.length > 0
  ), [orderCart])

  return (
    <Stack direction="row" justifyContent="space-between">
      <Typography variant="h5">
        Panier
      </Typography>
      { orderCart && isOrderCartNotEmpty &&
        <Button variant="contained">
          Vider le panier
        </Button>
      }
    </Stack>
  )
}

export default CartTitle;