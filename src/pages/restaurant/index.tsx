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
import MenuList from "../../components/menuList";
import { IMenu } from "cesieats-service-types/src/item";

const drawerWidth = 240;
const icons = [<Home />, <RestaurantMenu />, <RoomService />, <BarChart />];

export default function MenuDrawer() {
  const [selectedMenu, setSelectedMenu] = useState("Home");

  const handleMenuClick = (menu: React.SetStateAction<string>) => {
    setSelectedMenu(menu);
  };

  const menuList: IMenu[] = [
    {
      title: "Menu bigmac",
      description: "yummy",
      price: 20,
      idRestaurant: 'test'
    },
    {
      title: "Menu bigmac",
      description: "yummy",
      price: 20,
      idRestaurant: 'test'
    },
    {
      title: "Menu bigmac",
      description: "yummy",
      price: 20,
      idRestaurant: 'test'
    },
    {
      title: "Menu bigmac",
      description: "yummy",
      price: 20,
      idRestaurant: 'test'
    },
    {
      title: "Menu bigmac",
      description: "yummy",
      price: 20,
      idRestaurant: 'test'
    },
    {
      title: "Menu bigmac",
      description: "yummy",
      price: 20,
      idRestaurant: 'test'
    }
  ] ;
  return (
    <Box className="flex">
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
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
                    <ListItemIcon>{icons[index] && icons[index]}</ListItemIcon>
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
        <Toolbar />
        <Typography paragraph>
          {/* Condition pour afficher les informations en fonction de l'élément de menu sélectionné */}
          {selectedMenu === "Home" && <>Bienvenue sur la page d'accueil</>}
          {selectedMenu === "Menu" && <MenuList menuList={menuList}/>}
          {selectedMenu === "Commandes" && (
            <>Informations pour les commandes...</>
          )}
          {selectedMenu === "Statistiques" && (
            <>Informations pour les statistiques...</>
          )}
        </Typography>
      </Box>
    </Box>
  );
}
