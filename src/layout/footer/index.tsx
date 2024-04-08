import React from 'react';

import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import ReceiptRoundedIcon from '@mui/icons-material/ReceiptRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';

function Footer(props: any) {
    const [value, setValue] = React.useState('recents');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        if (!!props.test.current) (props.test.current as HTMLDivElement).ownerDocument.body.scrollTop = 0;
        setValue(newValue);
    };

    return (
        <footer>
            <BottomNavigation value={value} onChange={handleChange}>
                <BottomNavigationAction label="Commander" value="Commander" icon={<ShoppingCartRoundedIcon />} />
                <BottomNavigationAction label="Commandes" value="Commandes" icon={<ReceiptRoundedIcon />} />
                <BottomNavigationAction label="Favoris" value="Favoris" icon={<FavoriteRoundedIcon />} />
                <BottomNavigationAction label="Compte" value="Compte" icon={<AccountCircleRoundedIcon />} />
            </BottomNavigation>
        </footer>
    );
}

export default Footer;
