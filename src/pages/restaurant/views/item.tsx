import Button from "@mui/material/Button";
import { Grid, Stack } from "@mui/material";
import { IItem } from "cesieats-service-types/src/item";
import MenuCard from "../../../components/menu";

interface IItemsViewProps {
    itemList: IItem[];
}

function ItemsView({ itemList }: IItemsViewProps) {

    return (
        <Stack>
            <Button sx={{width:300, marginBottom:2}} variant="contained">Ajouter un menu</Button>
            <Grid container spacing={2}>
                { itemList && itemList.map((item, index) => {
                    return (
                        <MenuCard menu={item} key={index} />
                    );
                })}
            </Grid>
        </Stack>
    );
}

export default ItemsView;
