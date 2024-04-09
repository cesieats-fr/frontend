import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { NavLink } from "react-router-dom";
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import ReceiptRoundedIcon from '@mui/icons-material/ReceiptRounded';

function UserHeader(props: any){
    return (
        <BottomNavigation value={props.view} onChange={props.handleChange}  className="bg-gray-200">
            <NavLink to='/'><BottomNavigationAction value="Home" icon={props.iconCesiEatsBanner} /></NavLink>
            <NavLink to='/order'><BottomNavigationAction label="Commander" value="Commander" icon={<ShoppingCartRoundedIcon style={props.styleIcon}/>} sx={props.styleBottom} /></NavLink>
            <NavLink to='/orders'><BottomNavigationAction label="Commandes" value="Commandes" icon={<ReceiptRoundedIcon style={props.styleIcon} />} sx={props.styleBottom} /></NavLink>
            <NavLink to='/account'><BottomNavigationAction label="Compte" value="Compte" icon={props.iconAccount} sx={props.styleBottom} /></NavLink>
            <NavLink to='/parameters'><BottomNavigationAction label="Paramètres" value="Paramètres" icon={props.iconParameters} sx={props.styleBottom} /></NavLink>
            <NavLink to='/login'><BottomNavigationAction label="logout" value="logout" icon={props.iconLogout} sx={props.styleBottom} /></NavLink>
        </BottomNavigation>
    );
}

export default UserHeader;