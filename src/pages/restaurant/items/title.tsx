import { Button, Stack, Typography } from "@mui/material";
import { AddItemDialog } from "../../../components/addItem";
import { useState } from "react";

function ItemsTitle() {
  const [open, setOpen] = useState(false);
  
  return (
    <Stack direction="row" justifyContent="space-between" className="w-full">
      <Typography variant="h5">
        Articles
      </Typography>
      <Button sx={{width:300, marginBottom:2}} variant="contained" onClick={() => setOpen(true)}>Ajouter un article</Button>
      <AddItemDialog onClose={() => setOpen(false)} open={open}/>
    </Stack>
  );
}

export default ItemsTitle;