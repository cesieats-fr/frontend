import { Divider, Stack } from "@mui/material";
import DividedMenuPart from "./menuPart";
import { ReactElement } from "react";

export interface IDividedMenuPart {
  titleComponent: ReactElement;
  component: ReactElement;
}

interface IDividedMenuProps {
  dividedMenuParts: IDividedMenuPart[];
}

function DividedMenu({ dividedMenuParts }: IDividedMenuProps) {

  return (
    <Stack spacing={5} direction="row" divider={<Divider orientation="vertical" flexItem />} className="w-full">
      { dividedMenuParts &&
        dividedMenuParts.map((part, index) => <DividedMenuPart dividedMenuPart={part} numberOfParts={dividedMenuParts.length} key={index} />)
      }
    </Stack>
  );
}

export default DividedMenu;