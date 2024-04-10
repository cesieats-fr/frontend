import { NavLink } from 'react-router-dom';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import { ShoppingCartRounded, ReceiptRounded, FavoriteRounded, AccountCircleRounded, SettingsRounded, DeliveryDiningRounded, StorefrontRounded } from '@mui/icons-material';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import CesiEatsBanner from '../../assets/CesiEatsBanner';
import { EAccountType } from '../../enums';

const largeBanner = {
    width: 'auto',
    height: '2em',
};

const large = {
    width: 'auto',
    height: '1.3em',
};

const clientHeader = [
    {
        name: 'Home',
        icon: <CesiEatsBanner fontSize='large' style={largeBanner} />,
        navigation: '/'
    },
    {
        name: 'Commander',
        icon: <ShoppingCartRounded style={large} />,
        navigation: '/order'
    },
    {
        name: 'Commandes',
        icon: <ReceiptRounded style={large} />,
        navigation: '/orders'
    },
    {
        name: 'Favoris',
        icon: <FavoriteRounded style={large} />,
        navigation: '/favorites'
    },
    {
        name: 'Compte',
        icon: <AccountCircleRounded style={large} />,
        navigation: '/account'
    },
    {
        name: 'Paramètres',
        icon: <SettingsRounded style={large} />,
        navigation: '/parameters'
    }
];

const deliveryHeader = [
    {
        name: 'Home',
        icon: <CesiEatsBanner fontSize='large' style={largeBanner} />,
        navigation: '/'
    },
    {
        name: 'Livraison',
        icon: <DeliveryDiningRounded style={large} />,
        navigation: '/delivery'
    },
    {
        name: 'Livraisons',
        icon: <ReceiptRounded style={large} />,
        navigation: '/deliveries'
    },
    {
        name: 'Favoris',
        icon: <FavoriteRounded style={large} />,
        navigation: '/favorites'
    },
    {
        name: 'Compte',
        icon: <AccountCircleRounded style={large} />,
        navigation: '/account'
    },
    {
        name: 'Paramètres',
        icon: <SettingsRounded style={large} />,
        navigation: '/parameters'
    }
];

const restaurantHeader = [
    {
        name: 'Home',
        icon: <CesiEatsBanner fontSize='large' style={largeBanner} />,
        navigation: '/'
    },
    {
        name: 'Restaurant',
        icon: <StorefrontRounded style={large} />,
        navigation: '/restaurant'
    },
    {
        name: 'Favoris',
        icon: <FavoriteRounded style={large} />,
        navigation: '/favorites'
    },
    {
        name: 'Compte',
        icon: <AccountCircleRounded style={large} />,
        navigation: '/account'
    },
    {
        name: 'Paramètres',
        icon: <SettingsRounded style={large} />,
        navigation: '/parameters'
    }
];

function Header() {
    const userType = useSelector((state: RootState) => state.account.account?.accountType);
    
    const getHeader = () => {
        switch(userType){
            case EAccountType.CLIENT:
                return clientHeader;
            case EAccountType.DELIVER:
                return deliveryHeader;
            case EAccountType.RESTAURANT:
                return restaurantHeader;
            default:
                return clientHeader;
        }
    }

    return (
        <BottomNavigation className='bg-blackClassic'>
            {getHeader().map((item, index) => {
                return (
                    <NavLink 
                        to={item.navigation} 
                        key={index}
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "bg-neutralDark" : ""
                        }
                    >
                        <BottomNavigationAction 
                            label={item.name} 
                            icon={item.icon}
                            className='bg-blackClassic'
                        />
                    </NavLink>
                )
            })}
        </BottomNavigation>
    );
}

export default Header;