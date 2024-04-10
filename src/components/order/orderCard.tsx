import { Card, CardContent, Typography } from "@mui/material";
import { IRestaurant } from "cesieats-service-types/src/restaurant";

interface IOrderCardProps {
    restaurant: IRestaurant
}

function OrderCard({ restaurant }: IOrderCardProps) {
    return (
        <Card className="border-2 min-w-[275px]">
                {/* <CardContent>
                    <Typography color="text.primary" gutterBottom>
                        Photo Restaurant
                    </Typography>
                </CardContent> */}
                <CardContent>
                    <Typography variant="body2" color="text.primary" gutterBottom>
                        { restaurant.name }
                    </Typography>
                </CardContent>
                <CardContent>
                    <Typography variant="body2" color="text.primary" gutterBottom>
                        { restaurant.address }
                    </Typography>
                </CardContent>
                <CardContent>
                    <Typography variant="body2" color="text.primary" gutterBottom>
                        { restaurant.description }
                    </Typography>
                </CardContent>
                <CardContent>
                    <Typography variant="body2" color="text.primary" gutterBottom>
                        Ouvert de { restaurant.openingTime }h à { restaurant.closingTime }h
                    </Typography>
                </CardContent>
        </Card>
    );
}

export default OrderCard;