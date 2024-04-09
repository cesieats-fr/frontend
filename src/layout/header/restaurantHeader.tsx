import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { NavLink } from "react-router-dom";
import StorefrontRoundedIcon from '@mui/icons-material/StorefrontRounded';

function RestaurantHeader(props: any){
    return (
        <BottomNavigation value={props.view} onChange={props.handleChange}  className="bg-gray-200">
            <NavLink to='/'><BottomNavigationAction value="Home" icon={props.iconCesiEatsBanner} /></NavLink>
            <NavLink to='/restaurant'><BottomNavigationAction label="Restaurant" value="Restaurant" icon={<StorefrontRoundedIcon style={props.styleIcon}/>} sx={props.styleBottom} /></NavLink>
            <NavLink to='/account'><BottomNavigationAction label="Compte" value="Compte" icon={props.iconAccount} sx={props.styleBottom} /></NavLink>
            <NavLink to='/parameters'><BottomNavigationAction label="Paramètres" value="Paramètres" icon={props.iconParameters} sx={props.styleBottom} /></NavLink>
            <NavLink to='/login'><BottomNavigationAction label="logout" value="logout" icon={props.iconLogout} sx={props.styleBottom} /></NavLink>
        </BottomNavigation>
    );
}

export default RestaurantHeader;