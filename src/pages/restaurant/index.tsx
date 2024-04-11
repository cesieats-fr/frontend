import React, { useState } from "react";
import {
  ListItemText,
  ListItemIcon,
  ListItemButton,
  ListItem,
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
import MenusView from "./views/menus";
import ItemsView from "./views/item";
import StatsView from "./views/stats";
import OrdersView from "./views/orders";
import HomeView from "./views/home";
import { IItem, IMenu } from "cesieats-service-types/src/item";

const drawerWidth = 240;

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
];

const itemList: IItem[] = [
  {
    title: "Nuggets",
    description: "yummy",
    price: 20,
    idRestaurant: 'test'
  },
  {
    title: "Frites",
    description: "yummy",
    price: 20,
    idRestaurant: 'test'
  },
  {
    title: "Giga Mac",
    description: "yummy",
    price: 20,
    idRestaurant: 'test'
  },
  {
    title: "Tolgaval",
    description: "yummy",
    price: 20,
    idRestaurant: 'test'
  },
  {
    title: "Glaces",
    description: "yummy",
    price: 20,
    idRestaurant: 'test'
  },
  {
    title: "San pe",
    description: "yummy",
    price: 20,
    idRestaurant: 'test'
  }
];

const listItems = [
  {
    text: "Home",
    icon: <Home />,
    component: <HomeView />,
  },
  {
    text: "Items",
    icon: <RestaurantMenu />,
    component: <ItemsView itemList={itemList} />,
  },
  {
    text: "Menus",
    icon: <RestaurantMenu />,
    component: <MenusView menuList={menuList} />,
  },
  {
    text: "Commandes",
    icon: <RoomService />,
    component: <OrdersView />,
  },
  {
    text: "Statistiques",
    icon: <BarChart />,
    component: <StatsView />,
  },
];

export default function MenuDrawer() {
  const [selectedMenu, setSelectedMenu] = useState("Home");

  const handleMenuClick = (menu: React.SetStateAction<string>) => {
    setSelectedMenu(menu);
  };
  return (
    <div className="flex">
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
            {
              listItems && listItems.map(
                (lI, index) => (
                  <ListItem key={index} disablePadding>
                    <ListItemButton onClick={() => handleMenuClick(lI.text)}>
                      <ListItemIcon>{lI.icon}</ListItemIcon>
                      <ListItemText primary={lI.text} />
                    </ListItemButton>
                  </ListItem>
                )
              )
            }
          </List>
          <Divider />
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
          {
            listItems && listItems.find((lI) => lI.text === selectedMenu)?.component
          }
      </Box>
    </div>
  );
}
