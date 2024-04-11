// import { Button, Card, CardActions, CardContent, Typography } from "@mui/material";
// import { useDispatch } from "react-redux";
// import { AppDispatch } from "../../store";
// // import { setRestaurantSelected } from "../../store/reducers/restaurant";
// // import { getItemsByRestaurantId, getMenusByRestaurantId } from "../../store/reducers/item";
// import { IOrder } from "cesieats-service-types/src/order";

// interface IOrderCardProps {
//     order: IOrder
// }

// function OrderCardRestaurant({ order }: IOrderCardProps) {
//     const dispatch = useDispatch<AppDispatch>();

//     // const handleClickOrder = () => {
//     //     dispatch(setRestaurantSelected(restaurant));
//     //     dispatch(getItemsByRestaurantId(restaurant._id!));
//     //     dispatch(getMenusByRestaurantId(restaurant._id!));
//     // }

//     return (
//         <Card variant="elevation">
//             <CardContent>
//                 {/* <Typography variant="h6" color="text.primary" gutterBottom>
//                     { restaurant.name }
//                 </Typography>
//                 <Typography variant="body2" color="text.primary" gutterBottom>
//                     { restaurant.address }
//                 </Typography>
//                 <Typography variant="body2" color="text.primary" gutterBottom>
//                     { restaurant.description }
//                 </Typography>
//                 <Typography variant="body2" color="text.primary" gutterBottom>
//                     Ouvert de { restaurant.openingTime }h à { restaurant.closingTime }h
//                 </Typography> */}
//             </CardContent>
//             <CardActions>
//                 {/* <Button variant="contained" onClick={() => handleClickOrder()}>Accepter la commande</Button> */}
//             </CardActions>
//         </Card>
//     );
// }

// export default OrderCardRestaurant;