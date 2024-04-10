import React, { useState } from "react";
import {
  ListItemText,
  ListItemIcon,
  ListItemButton,
  ListItem,
  Typography,
  Divider,
  List,
  Toolbar,
  Drawer,
  Box,
} from "@mui/material";
import {
  RestaurantMenu,
  Home,
  RoomService,
  BarChart,
} from "@mui/icons-material";


const drawerWidth = 200;
const icons = [
  <Home />,
  <RestaurantMenu />,
  <RoomService />,
  <BarChart />,
];

export default function MenuDrawer() {
  const [selectedMenu, setSelectedMenu] = useState("Home");

  const handleMenuClick = (menu) => {
    setSelectedMenu(menu);
  };  
  

  return (
    <div className="">
      <Box className="flex">
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            [`& .MuiDrawer-paper`]: {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
        >
          <Toolbar />
          <Box className="">
            <List>
              {["Home", "Menu", "Commandes", "Statistiques"].map(
                (text, index) => (
                  <ListItem key={text} disablePadding>
                    <ListItemButton onClick={() => handleMenuClick(text)}>
                      <ListItemIcon>
                        {icons[index] && icons[index]}
                      </ListItemIcon>
                      <ListItemText primary={text} />
                    </ListItemButton>
                  </ListItem>
                )
              )}
            </List>

            <Divider />
          </Box>
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Typography paragraph>
            {/* Condition pour afficher les informations en fonction de l'élément de menu sélectionné */}
            {selectedMenu === "Home" && (
              <> Bienvenue sur la page d'accueil + NOM RESTAURANT</>
            )}
            {selectedMenu === "Menu" && <>...rererere</>}
            {selectedMenu === "Commandes" && (
              <>Informations pour les commandes...</>
            )}
            {selectedMenu === "Statistiques" && (
              <>Informations pour les statistiques...</>
            )}            
          </Typography>
        </Box>
      </Box>
    </div>
  );
}
