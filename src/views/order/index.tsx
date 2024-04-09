import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

function OrderView() {
  return (
    <div>
      <Typography
        className="p-4 background-color-grey-100 border-b-2 border-black color-black-100" 
        sx={{ fontSize: 14 }}
        color="text.primary"
        gutterBottom
      >
        Livrer à l'adresse : Adresse dans le compte du pélo
      </Typography>

      <div className="flex flex-wrap justify-center gap-4">
        <Card className="border-2 min-w-[275px]">
          <CardContent>
            <Typography color="text.primary" gutterBottom>
              Photo Restaurant
            </Typography>
            <Typography sx={{ fontSize: 12 }} color="text.primary" gutterBottom>
              NOM RESTAUT
            </Typography>
            <Typography sx={{ fontSize: 12 }} color="text.primary" gutterBottom>
              TEMPS LIVRAISON RESTAU
            </Typography>
          </CardContent>
        </Card>
        <Card className="border-2 min-w-[275px]">
          <CardContent>
            <Typography color="text.primary" gutterBottom>
              Photo Restaurant
            </Typography>
            <Typography sx={{ fontSize: 12 }} color="text.primary" gutterBottom>
              NOM RESTAUT
            </Typography>
            <Typography sx={{ fontSize: 12 }} color="text.primary" gutterBottom>
              TEMPS LIVRAISON RESTAU
            </Typography>
          </CardContent>
        </Card>
        <Card className="border-2 min-w-[275px]">
          <CardContent>
            <Typography color="text.primary" gutterBottom>
              Photo Restaurant
            </Typography>
            <Typography sx={{ fontSize: 12 }} color="text.primary" gutterBottom>
              NOM RESTAUT
            </Typography>
            <Typography sx={{ fontSize: 12 }} color="text.primary" gutterBottom>
              TEMPS LIVRAISON RESTAU
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default OrderView;
