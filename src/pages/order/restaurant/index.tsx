import { Divider, Stack, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";

function Restaurant() {
  const menus = useSelector((state: RootState) => state.item.menus);
  const items = useSelector((state: RootState) => state.item.items);

  return (
    <Stack spacing={3} direction="column"  divider={<Divider orientation="horizontal" flexItem />} alignItems="center">
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
  )
}

export default Restaurant;