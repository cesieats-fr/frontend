import Button from "@mui/material/Button";
import { Grid, Stack } from "@mui/material";
import { IMenu } from "cesieats-service-types/src/item";
import MenuCard from "../../../components/menu";

interface IMenuListProps {
  menuList: IMenu[];
}

function MenusView({ menuList }: IMenuListProps) {

  return (
    <Stack>
        <Button sx={{width:300, marginBottom:2}} variant="contained">Ajouter un menu</Button>
        <Grid container spacing={2}>
            { menuList && menuList.map((menu, index) => {
                return (
                    <MenuCard menu={menu} key={index} />
                  );
                })
            }
        </Grid>
    </Stack>
    
  );
}

export default MenusView;
