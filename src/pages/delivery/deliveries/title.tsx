import { Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";

function DeliveriesTitle() {
  const restaurantSelected = useSelector((state: RootState) => state.restaurant.restaurantSelected);

  return (
    <Typography variant="h5">
      Livraisons { restaurantSelected &&  restaurantSelected.name }
    </Typography>
  )
}

export default DeliveriesTitle;