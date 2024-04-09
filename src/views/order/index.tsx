import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import CardMedia from "@mui/material/CardMedia";

function OrderView() {
  return (
    <>
      <div>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 12 }}
              color="text.primary"
              gutterBottom>Livrer à l'adresse</Typography>
               <Typography
              sx={{ fontSize: 10 }}
              color="text.primary"
              gutterBottom>Adresse dans le compte du pélo</Typography>
          </CardContent>

          <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: 400,
          }}
        >
          {/* <IconButton sx={{ p: "10px" }} aria-label="menu">
            <MenuIcon />
          </IconButton> */}
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Rechercher dans l'aide Cesi Eats"
            inputProps={{ "aria-label": "Rechercher dans l'aide Cesi Eats" }}
          />
          <IconButton type="button" sx={{ p: "10px"}} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Paper>
        </Card>

       
      </div>
    </>
  );
}

export default OrderView;
