import { Divider, Stack } from "@mui/material";
import { IDividedMenuPart } from "../";

interface IDividedMenuPartProps {
  dividedMenuPart: IDividedMenuPart;
  numberOfParts: number;
}

function DividedMenuPart({ dividedMenuPart, numberOfParts }: IDividedMenuPartProps) {
  return (
    <Stack 
      spacing={3} 
      alignItems="center" 
      direction="column" 
      width={`${100/numberOfParts}%`}  
      divider={<Divider orientation="horizontal" flexItem />}
    >
      { dividedMenuPart.titleComponent }
      { dividedMenuPart.component }
    </Stack>
  );
}

export default DividedMenuPart;