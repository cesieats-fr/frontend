import { Button, Card, CardActions, CardContent, Typography } from "@mui/material";
import { IRestaurant } from "cesieats-service-types/src/restaurant";

interface IOrderCardProps {
    restaurant: IRestaurant
}

function OrderCard({ restaurant }: IOrderCardProps) {
    return (
        <Card variant="elevation">
            <CardContent>
                <Typography variant="h6" color="text.primary" gutterBottom>
                    { restaurant.name }
                </Typography>
                <Typography variant="body2" color="text.primary" gutterBottom>
                    { restaurant.address }
                </Typography>
                <Typography variant="body2" color="text.primary" gutterBottom>
                    { restaurant.description }
                </Typography>
                <Typography variant="body2" color="text.primary" gutterBottom>
                    Ouvert de { restaurant.openingTime }h à { restaurant.closingTime }h
                </Typography>
            </CardContent>
            <CardActions>
                <Button variant="contained">Commander</Button>
            </CardActions>
        </Card>
    );
}

export default OrderCard;