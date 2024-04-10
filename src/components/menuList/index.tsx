import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CardMedia, Grid, Stack } from "@mui/material";
import { IMenu } from "cesieats-service-types/src/item";
import MenuCard from "../menu";

interface IMenuListProps {
  menuList: IMenu[];
}

function MenuList({ menuList }: IMenuListProps) {

  return (
    <Stack>
        <Button sx={{width:300, marginBottom:2}} variant="contained">Ajouter un menu</Button>
        <Grid container spacing={2}>
            { menuList && menuList.map((menu, index) => {
                return (
                    <Grid item xs={4}>
                        <MenuCard menu={menu} key={index} />
                    </Grid>
                    );
                })
            }
        </Grid>
    </Stack>
    
  );
}

export default MenuList;
