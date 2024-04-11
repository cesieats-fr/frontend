import { Button, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { AddMenuDialog } from "../../../components/addMenu";

function MenusTitle() {
  const [open, setOpen] = useState(false);
  
  return (
    <Stack direction="row" justifyContent="space-between" className="w-full">
      <Typography variant="h5">
        Menus
      </Typography>
      <Button sx={{width:300, marginBottom:2}} variant="contained" onClick={() => setOpen(true)}>Ajouter un menu</Button>
      <AddMenuDialog onClose={() => setOpen(false)} open={open} />
    </Stack>
  );
}

export default MenusTitle;