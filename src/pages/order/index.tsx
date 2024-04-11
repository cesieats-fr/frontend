import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import OrderCard from "../../components/order/orderCard";
import { useEffect, useMemo } from "react";
import { getAllRestaurants } from "../../store/reducers/restaurant";
import { Button, Divider, Stack } from "@mui/material";

function OrderPage() {
  const dispatch = useDispatch<AppDispatch>();

  const account = useSelector((state: RootState) => state.account.account);
  const restaurants = useSelector((state: RootState) => state.restaurant.restaurants);
  const restaurantSelected = useSelector((state: RootState) => state.restaurant.restaurantSelected);
  const items = useSelector((state: RootState) => state.item.items);
  const menus = useSelector((state: RootState) => state.item.menus);
  const orderCart = useSelector((state: RootState) => state.orderCart.orderCart);

  const isOrderCartNotEmpty = useMemo(() => (
    orderCart && orderCart.items && orderCart.items.length > 0 || orderCart.menus && orderCart.menus.length > 0
  ), [orderCart])

  useEffect(() => {
    dispatch(getAllRestaurants())
  }, [dispatch]);

  useEffect(() => {
    console.log(items, menus);
  }, [items, menus]);

  return (
    <Stack spacing={5} direction="column" divider={<Divider orientation="horizontal" flexItem />} alignItems="center" >
      <Typography
        variant="body1"
        color="text.primary"
        gutterBottom
      >
        Livrer à l'adresse : { account.address }
      </Typography>

      <Stack spacing={5} direction="row" divider={<Divider orientation="vertical" flexItem />} className="w-full">

        {/* Liste des restaurants */}
        <Stack spacing={3} alignItems="center" direction="column" className="w-1/3"  divider={<Divider orientation="vertical" flexItem />}>
          <Typography variant="h5">
            Restaurants
          </Typography>
          <Stack spacing={3} direction="row" useFlexGap flexWrap="wrap" justifyContent="space-around">
            { restaurants && 
              restaurants.map((restaurant, index) => <OrderCard restaurant={restaurant} key={index} />)
            }
          </Stack>
        </Stack>
        
        {/* Restaurant */}
        <Stack className="w-1/3" spacing={3} direction="column"  divider={<Divider orientation="horizontal" flexItem />} alignItems="center">
          <Typography variant="h5">
            Restaurant { restaurantSelected &&  restaurantSelected.name }
          </Typography>
          {menus && menus.length > 0 &&
            <Stack>
              <Typography variant="body1">
                Menus
              </Typography>
              <Stack spacing={3} direction="row" useFlexGap flexWrap="wrap" justifyContent="space-around">
                { menus &&
                  menus.map((menu, index) => <div key={index}>{menu.title}</div>)
                }
              </Stack>
            </Stack>
          }
          
          {items && items.length > 0 &&
            <Stack>
              <Typography variant="body1">
                Articles
              </Typography>
              <Stack spacing={3} direction="row" useFlexGap flexWrap="wrap" justifyContent="space-around">
                { items &&
                  items.map((item, index) => <div key={index}>{item.title}</div>)
                }
              </Stack>
            </Stack>
          }

        </Stack>

        {/* Panier */}
        <Stack className="w-1/3" spacing={3} direction="column"  divider={<Divider orientation="horizontal" flexItem />} alignItems={isOrderCartNotEmpty ? "space-around" : "center"}>
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
          
        </Stack>
      </Stack>
    </Stack>
  );
}

export default OrderPage;
