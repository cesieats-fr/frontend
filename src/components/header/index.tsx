import { useLocation } from "react-router-dom";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import {
  ShoppingCartRounded,
  ReceiptRounded,
  AccountCircleRounded,  
  DeliveryDiningRounded,
  StorefrontRounded,
  Login,
  Logout,
  ManageAccounts,
} from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { EAccountType } from "../../enums";
import { Link } from "react-router-dom";
import { removeAccount } from "../../store/reducers/account";
import { useState } from "react";
import CesiEatsBanner from "../../assets/CesiEatsBanner";


const largeBanner = {
  width: "auto",
  height: "2em",
};

const large = {
  width: "auto",
  height: "1.3em",
};

const clientHeader = [
  {
    name: "",
    icon: <CesiEatsBanner fontSize="large" style={largeBanner} />,
    navigation: "/",
  },
  {
    name: "Commander",
    icon: <ShoppingCartRounded style={large} />,
    navigation: "/order",
  },
  {
    name: "Commandes",
    icon: <ReceiptRounded style={large} />,
    navigation: "/orders",
  },
  {
    name: "Compte",
    icon: <AccountCircleRounded style={large} />,
    navigation: "/account",
  },
  {
    name: "Se déconnecter",
    icon: <Logout style={large} />,
    navigation: "/login",
  },
];

const deliveryHeader = [
  {
    name: "",
    icon: <CesiEatsBanner fontSize="large" style={largeBanner} />,
    navigation: "/",
  },
  {
    name: "Livraison",
    icon: <DeliveryDiningRounded style={large} />,
    navigation: "/delivery",
  },
  {
    name: "Historiques",
    icon: <ReceiptRounded style={large} />,
    navigation: "/deliveries",
  },
  {
    name: "Compte",
    icon: <AccountCircleRounded style={large} />,
    navigation: "/account",
  },
  {
    name: "Se déconnecter",
    icon: <Logout style={large} />,
    navigation: "/login",
  },
];

const restaurantHeader = [
  {
    name: "",
    icon: <CesiEatsBanner fontSize="large" style={largeBanner} />,
    navigation: "/",
  },
  {
    name: "Restaurant",
    icon: <StorefrontRounded style={large} />,
    navigation: "/restaurant",
  },
  {
    name: "Commandes",
    icon: <ReceiptRounded style={large} />,
    navigation: "/restaurantOrders"
  },
  {
    name: "Compte",
    icon: <AccountCircleRounded style={large} />,
    navigation: "/account",
  },
  {
    name: "Se déconnecter",
    icon: <Logout style={large} />,
    navigation: "/login",
  },
];

const disconnectedHeader = [
  {
    name: "",
    icon: <CesiEatsBanner fontSize="large" style={largeBanner} />,
    navigation: "/",
  },
  {
    name: "Se connecter",
    icon: <Login style={large} />,
    navigation: "/login",
  },
];

const salesDepartementHeader = [
  {
    name: "",
    icon: <CesiEatsBanner fontSize="large" style={largeBanner} />,
    navigation: "/",
  },
  {
    name: "Gestion clients",
    icon: <ManageAccounts  style={large} />,
    navigation: "/management",
  },
  {
    name: "Compte",
    icon: <AccountCircleRounded style={large} />,
    navigation: "/account",
  },
  {
    name: "Se déconnecter",
    icon: <Logout style={large} />,
    navigation: "/login",
  },
  
];


function Header() {
  const userType = useSelector(
    (state: RootState) => state.account.account?.accountType
  );
  const dispatch = useDispatch<AppDispatch>();

  const [navHover, setNavHover] = useState("");

  const getHeader = () => {
    switch (userType) {
      case EAccountType.CLIENT:
        return clientHeader;
      case EAccountType.DELIVER:
        return deliveryHeader;
      case EAccountType.RESTAURANT:
        return restaurantHeader;
      case EAccountType.SALESDEPARTEMENT:
        return salesDepartementHeader;
      default:
        return disconnectedHeader;
    }
  };

  return (
    <BottomNavigation value={useLocation().pathname}>
      {getHeader().map((item, index) => {
        return (
          <BottomNavigationAction
            component={Link}
            showLabel={navHover === item.navigation}
            to={item.navigation}
            label={item.name}
            icon={item.icon}
            value={item.navigation}
            key={index}
            onClick={() => {
              if (item.navigation === "/login") dispatch(removeAccount());
            }}
            onMouseEnter={() => setNavHover(item.navigation)}
            onMouseLeave={() => setNavHover("")}
          />
        );
      })}
    </BottomNavigation>
  );
}

export default Header;
