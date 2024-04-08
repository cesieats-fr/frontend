import React from 'react';

// import Avatar from '@mui/material/Avatar';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import ReceiptRoundedIcon from '@mui/icons-material/ReceiptRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import { pink } from '@mui/material/colors';

function Header(props: any) {
    const [value, setValue] = React.useState('recents');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        if (!!props.test.current) (props.test.current as HTMLDivElement).ownerDocument.body.scrollTop = 0;
        setValue(newValue);
    };

    return (
        <header>
            <BottomNavigation value={value} onChange={handleChange}>
                <BottomNavigationAction label="Commander" value="Commander" href='/Order' icon={<ShoppingCartRoundedIcon />} />
                <BottomNavigationAction label="Commandes" value="Commandes" href='/Orders' icon={<ReceiptRoundedIcon />} />
                <BottomNavigationAction label="Favoris" value="Favoris" href='/Favorite' icon={<FavoriteRoundedIcon />} />
                <BottomNavigationAction label="Compte" value="Compte" href='/Account' icon={<AccountCircleRoundedIcon />} />
                <BottomNavigationAction label="Paramètres" value="Paramètres" href='/Parameters' icon={<SettingsRoundedIcon />} sx={{color: pink[500]}}/>
            </BottomNavigation>
        </header>
    );
}

export default Header;
