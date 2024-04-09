import React from 'react';
import { NavLink } from 'react-router-dom';
import { createSvgIcon } from '@mui/material';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import ReceiptRoundedIcon from '@mui/icons-material/ReceiptRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import DeliveryDiningRoundedIcon from '@mui/icons-material/DeliveryDiningRounded';
import StorefrontRoundedIcon from '@mui/icons-material/StorefrontRounded';

const CesiEatsBanner = createSvgIcon(
    <svg width="768" height="434" viewBox="0 0 768 434" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.24898 217.67C5.24898 206.11 7.91232 195.74 13.239 186.56C18.679 177.38 25.989 170.24 35.169 165.14C44.4623 159.927 54.6057 157.32 65.599 157.32C78.179 157.32 89.3423 160.437 99.089 166.67C108.949 172.79 116.089 181.517 120.509 192.85H97.219C94.159 186.617 89.909 181.97 84.469 178.91C79.029 175.85 72.739 174.32 65.599 174.32C57.779 174.32 50.809 176.077 44.689 179.59C38.569 183.103 33.7523 188.147 30.239 194.72C26.839 201.293 25.139 208.943 25.139 217.67C25.139 226.397 26.839 234.047 30.239 240.62C33.7523 247.193 38.569 252.293 44.689 255.92C50.809 259.433 57.779 261.19 65.599 261.19C72.739 261.19 79.029 259.66 84.469 256.6C89.909 253.54 94.159 248.893 97.219 242.66H120.509C116.089 253.993 108.949 262.72 99.089 268.84C89.3423 274.96 78.179 278.02 65.599 278.02C54.4923 278.02 44.349 275.47 35.169 270.37C25.989 265.157 18.679 257.96 13.239 248.78C7.91232 239.6 5.24898 229.23 5.24898 217.67ZM229.043 227.87C229.043 231.383 228.817 234.557 228.363 237.39H156.793C157.36 244.87 160.137 250.877 165.123 255.41C170.11 259.943 176.23 262.21 183.483 262.21C193.91 262.21 201.277 257.847 205.583 249.12H226.493C223.66 257.733 218.503 264.817 211.023 270.37C203.657 275.81 194.477 278.53 183.483 278.53C174.53 278.53 166.483 276.547 159.343 272.58C152.317 268.5 146.763 262.833 142.683 255.58C138.717 248.213 136.733 239.713 136.733 230.08C136.733 220.447 138.66 212.003 142.513 204.75C146.48 197.383 151.977 191.717 159.003 187.75C166.143 183.783 174.303 181.8 183.483 181.8C192.323 181.8 200.2 183.727 207.113 187.58C214.027 191.433 219.41 196.873 223.263 203.9C227.117 210.813 229.043 218.803 229.043 227.87ZM208.813 221.75C208.7 214.61 206.15 208.887 201.163 204.58C196.177 200.273 190 198.12 182.633 198.12C175.947 198.12 170.223 200.273 165.463 204.58C160.703 208.773 157.87 214.497 156.963 221.75H208.813ZM282.115 278.53C274.749 278.53 268.119 277.227 262.225 274.62C256.445 271.9 251.855 268.273 248.455 263.74C245.055 259.093 243.242 253.937 243.015 248.27H263.075C263.415 252.237 265.285 255.58 268.685 258.3C272.199 260.907 276.562 262.21 281.775 262.21C287.215 262.21 291.409 261.19 294.355 259.15C297.415 256.997 298.945 254.277 298.945 250.99C298.945 247.477 297.245 244.87 293.845 243.17C290.559 241.47 285.289 239.6 278.035 237.56C271.009 235.633 265.285 233.763 260.865 231.95C256.445 230.137 252.592 227.36 249.305 223.62C246.132 219.88 244.545 214.95 244.545 208.83C244.545 203.843 246.019 199.31 248.965 195.23C251.912 191.037 256.105 187.75 261.545 185.37C267.099 182.99 273.445 181.8 280.585 181.8C291.239 181.8 299.795 184.52 306.255 189.96C312.829 195.287 316.342 202.597 316.795 211.89H297.415C297.075 207.697 295.375 204.353 292.315 201.86C289.255 199.367 285.119 198.12 279.905 198.12C274.805 198.12 270.895 199.083 268.175 201.01C265.455 202.937 264.095 205.487 264.095 208.66C264.095 211.153 265.002 213.25 266.815 214.95C268.629 216.65 270.839 218.01 273.445 219.03C276.052 219.937 279.905 221.127 285.005 222.6C291.805 224.413 297.359 226.283 301.665 228.21C306.085 230.023 309.882 232.743 313.055 236.37C316.229 239.997 317.872 244.813 317.985 250.82C317.985 256.147 316.512 260.907 313.565 265.1C310.619 269.293 306.425 272.58 300.985 274.96C295.659 277.34 289.369 278.53 282.115 278.53ZM348.786 170.92C345.272 170.92 342.326 169.73 339.946 167.35C337.566 164.97 336.376 162.023 336.376 158.51C336.376 154.997 337.566 152.05 339.946 149.67C342.326 147.29 345.272 146.1 348.786 146.1C352.186 146.1 355.076 147.29 357.456 149.67C359.836 152.05 361.026 154.997 361.026 158.51C361.026 162.023 359.836 164.97 357.456 167.35C355.076 169.73 352.186 170.92 348.786 170.92ZM358.306 183.33V277H338.926V183.33H358.306Z" fill="black"/>
        <path d="M432.53 177.55V207.3H472.48V226.17H432.53V257.62H477.58V277H408.73V158.17H477.58V177.55H432.53ZM493.089 229.57C493.089 220.05 494.959 211.607 498.699 204.24C502.552 196.873 507.709 191.207 514.169 187.24C520.742 183.273 528.052 181.29 536.099 181.29C543.125 181.29 549.245 182.707 554.459 185.54C559.785 188.373 564.035 191.943 567.209 196.25V182.82H591.179V277H567.209V263.23C564.149 267.65 559.899 271.333 554.459 274.28C549.132 277.113 542.955 278.53 535.929 278.53C527.995 278.53 520.742 276.49 514.169 272.41C507.709 268.33 502.552 262.607 498.699 255.24C494.959 247.76 493.089 239.203 493.089 229.57ZM567.209 229.91C567.209 224.13 566.075 219.2 563.809 215.12C561.542 210.927 558.482 207.753 554.629 205.6C550.775 203.333 546.639 202.2 542.219 202.2C537.799 202.2 533.719 203.277 529.979 205.43C526.239 207.583 523.179 210.757 520.799 214.95C518.532 219.03 517.399 223.903 517.399 229.57C517.399 235.237 518.532 240.223 520.799 244.53C523.179 248.723 526.239 251.953 529.979 254.22C533.832 256.487 537.912 257.62 542.219 257.62C546.639 257.62 550.775 256.543 554.629 254.39C558.482 252.123 561.542 248.95 563.809 244.87C566.075 240.677 567.209 235.69 567.209 229.91ZM642.133 202.37V247.93C642.133 251.103 642.87 253.427 644.343 254.9C645.93 256.26 648.537 256.94 652.163 256.94H663.213V277H648.253C628.193 277 618.163 267.253 618.163 247.76V202.37H606.943V182.82H618.163V159.53H642.133V182.82H663.213V202.37H642.133ZM716.372 278.53C708.665 278.53 701.752 277.17 695.632 274.45C689.512 271.617 684.638 267.82 681.012 263.06C677.498 258.3 675.572 253.03 675.232 247.25H699.202C699.655 250.877 701.412 253.88 704.472 256.26C707.645 258.64 711.555 259.83 716.202 259.83C720.735 259.83 724.248 258.923 726.742 257.11C729.348 255.297 730.652 252.973 730.652 250.14C730.652 247.08 729.065 244.813 725.892 243.34C722.832 241.753 717.902 240.053 711.102 238.24C704.075 236.54 698.295 234.783 693.762 232.97C689.342 231.157 685.488 228.38 682.202 224.64C679.028 220.9 677.442 215.857 677.442 209.51C677.442 204.297 678.915 199.537 681.862 195.23C684.922 190.923 689.228 187.523 694.782 185.03C700.448 182.537 707.078 181.29 714.672 181.29C725.892 181.29 734.845 184.123 741.532 189.79C748.218 195.343 751.902 202.88 752.582 212.4H729.802C729.462 208.66 727.875 205.713 725.042 203.56C722.322 201.293 718.638 200.16 713.992 200.16C709.685 200.16 706.342 200.953 703.962 202.54C701.695 204.127 700.562 206.337 700.562 209.17C700.562 212.343 702.148 214.78 705.322 216.48C708.495 218.067 713.425 219.71 720.112 221.41C726.912 223.11 732.522 224.867 736.942 226.68C741.362 228.493 745.158 231.327 748.332 235.18C751.618 238.92 753.318 243.907 753.432 250.14C753.432 255.58 751.902 260.453 748.842 264.76C745.895 269.067 741.588 272.467 735.922 274.96C730.368 277.34 723.852 278.53 716.372 278.53Z" fill="#06C167"/>
    </svg>
    , "svg");

const largeBanner = {
    width: 'auto',
    height: '2em',
};

const largeIcon = {
    width: 'auto',
    height: '1.3em',
};

const BottomNavigationStyle = {
    color: '#0D1B2A',
    '&.Mui-selected': {
        color: '#06c167',
    }
}

const userHeader = (props: any) => {
    const [view, setView] = React.useState('recents');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setView(newValue);
    };

    return (
        <BottomNavigation value={view} onChange={handleChange}  className="bg-gray-200">
            <NavLink to='/'><BottomNavigationAction value="Home" icon={<CesiEatsBanner fontSize='large' style={largeBanner}/>} /></NavLink>
            <NavLink to='/Order'><BottomNavigationAction label="Commander" value="Commander" icon={<ShoppingCartRoundedIcon style={largeIcon}/>} sx={BottomNavigationStyle} /></NavLink>
            <NavLink to='/Orders'><BottomNavigationAction label="Commandes" value="Commandes" icon={<ReceiptRoundedIcon style={largeIcon} />} sx={BottomNavigationStyle} /></NavLink>
            <NavLink to='/Favorites'><BottomNavigationAction label="Favoris" value="Favoris" icon={<FavoriteRoundedIcon style={largeIcon} />} sx={BottomNavigationStyle} /></NavLink>
            <NavLink to='/Account'><BottomNavigationAction label="Compte" value="Compte" icon={<AccountCircleRoundedIcon style={largeIcon} />} sx={BottomNavigationStyle} /></NavLink>
            <NavLink to='/Parameters'><BottomNavigationAction label="Paramètres" value="Paramètres" icon={<SettingsRoundedIcon style={largeIcon} />} sx={BottomNavigationStyle} /></NavLink>
        </BottomNavigation>
    );
}

const deliveryHeader = (props: any) => {
    const [view, setView] = React.useState('recents');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setView(newValue);
    };

    return (
        <BottomNavigation value={view} onChange={handleChange}  className="bg-gray-200">
            <NavLink to='/'><BottomNavigationAction value="Home" icon={<CesiEatsBanner fontSize='large' style={largeBanner}/>} /></NavLink>
            <NavLink to='/Delivery'><BottomNavigationAction label="Livraison" value="Livraison" icon={<DeliveryDiningRoundedIcon style={largeIcon}/>} sx={BottomNavigationStyle} /></NavLink>
            <NavLink to='/Deliveries'><BottomNavigationAction label="Livraisons" value="Livraisons" icon={<ReceiptRoundedIcon style={largeIcon} />} sx={BottomNavigationStyle} /></NavLink>
            <NavLink to='/Favorites'><BottomNavigationAction label="Favoris" value="Favoris" icon={<FavoriteRoundedIcon style={largeIcon} />} sx={BottomNavigationStyle} /></NavLink>
            <NavLink to='/Account'><BottomNavigationAction label="Compte" value="Compte" icon={<AccountCircleRoundedIcon style={largeIcon} />} sx={BottomNavigationStyle} /></NavLink>
            <NavLink to='/Parameters'><BottomNavigationAction label="Paramètres" value="Paramètres" icon={<SettingsRoundedIcon style={largeIcon} />} sx={BottomNavigationStyle} /></NavLink>
        </BottomNavigation>
    );
}

const restaurantHeader = (props: any) => {
    const [view, setView] = React.useState('recents');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        if (!!props.test.current) (props.test.current as HTMLDivElement).ownerDocument.body.scrollTop = 0;
        setView(newValue);
    };

    return (
        <BottomNavigation value={view} onChange={handleChange}  className="bg-gray-200">
            <NavLink to='/'><BottomNavigationAction value="Home" icon={<CesiEatsBanner fontSize='large' style={largeBanner}/>} /></NavLink>
            <NavLink to='/Restaurant'><BottomNavigationAction label="Restaurant" value="Restaurant" icon={<StorefrontRoundedIcon style={largeIcon}/>} sx={BottomNavigationStyle} /></NavLink>
            <NavLink to='/Favorites'><BottomNavigationAction label="Favoris" value="Favoris" icon={<FavoriteRoundedIcon style={largeIcon} />} sx={BottomNavigationStyle} /></NavLink>
            <NavLink to='/Account'><BottomNavigationAction label="Compte" value="Compte" icon={<AccountCircleRoundedIcon style={largeIcon} />} sx={BottomNavigationStyle} /></NavLink>
            <NavLink to='/Parameters'><BottomNavigationAction label="Paramètres" value="Paramètres" icon={<SettingsRoundedIcon style={largeIcon} />} sx={BottomNavigationStyle} /></NavLink>
        </BottomNavigation>
    );
}

function Header(props: any) {
    let userType = 0; // get the user type 
    
    switch(userType){
        case 0: // USER ?
            return userHeader(props);
        case 1: // DELIVERY ?
            return deliveryHeader(props);
        case 2: // RESTAURANT ?
            return restaurantHeader(props);
        default: // ERROR
            return userHeader(props);
    }
}

export default Header;