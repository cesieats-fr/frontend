import { useLocation } from 'react-router-dom';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import { ShoppingCartRounded, ReceiptRounded, AccountCircleRounded, SettingsRounded, DeliveryDiningRounded, StorefrontRounded, Login,Logout } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { EAccountType } from '../../enums';
import { Link } from 'react-router-dom';
import { removeAccount } from '../../store/reducers/account';
import CesiEatsBanner from '../../assets/CesiEatsBanner';

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
        name: '',
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
        name: 'Compte',
        icon: <AccountCircleRounded style={large} />,
        navigation: '/account'
    },
    {
        name: 'Paramètres',
        icon: <SettingsRounded style={large} />,
        navigation: '/parameters'
    },
    {
        name: 'Se déconnecter',
        icon: <Logout style={large} />,
        navigation: '/login'
    },
];

const deliveryHeader = [
    {
        name: '',
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
        name: 'Compte',
        icon: <AccountCircleRounded style={large} />,
        navigation: '/account'
    },
    {
        name: 'Paramètres',
        icon: <SettingsRounded style={large} />,
        navigation: '/parameters'
    },
    {
        name: 'Se déconnecter',
        icon: <Logout style={large} />,
        navigation: '/login'
    },
];

const restaurantHeader = [
    {
        name: '',
        icon: <CesiEatsBanner fontSize='large' style={largeBanner} />,
        navigation: '/'
    },
    {
        name: 'Restaurant',
        icon: <StorefrontRounded style={large} />,
        navigation: '/restaurant'
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
    },
    {
        name: 'Se déconnecter',
        icon: <Logout style={large} />,
        navigation: '/login'
    },
];

const errorHeader = [
    {
        name: '',
        icon: <CesiEatsBanner fontSize='large' style={largeBanner} />,
        navigation: '/'
    },
    {
        name: 'Se connecter',
        icon: <Login style={large} />,
        navigation: '/login'
    },
];

function Header() {
    const userType = useSelector((state: RootState) => state.account.account?.accountType);
    
    const disconnectUser = () => {
        const dispatch = useDispatch();
        dispatch(removeAccount());
    }

    const test = (event:any) => {
        console.log(event)
    }

    const getHeader = () => {
        switch(userType){
            case EAccountType.CLIENT:
                return clientHeader;
            case EAccountType.DELIVER:
                return deliveryHeader;
            case EAccountType.RESTAURANT:
                return restaurantHeader;
            default:
                return errorHeader;
        }
    }

    return (
        <BottomNavigation value={useLocation().pathname}>
            {getHeader().map((item, index) => {
                return (
                    <BottomNavigationAction 
                        component={Link}
                        to={item.navigation}
                        label={item.name} 
                        icon={item.icon}
                        value={item.navigation}
                        key={item.name}
                        //onMouseOver={this.setState}
                        onClick={() => {if(item.navigation === '/login') disconnectUser()}}
                    />
                )
            })}
        </BottomNavigation>
    );
}

export default Header;