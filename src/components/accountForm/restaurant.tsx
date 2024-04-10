import { Divider, Stack, TextField } from "@mui/material";
import { IAccount } from "cesieats-service-types/src/account";
import { IRestaurant } from "cesieats-service-types/src/restaurant";
import { useState } from "react";

interface IRestaurantAccountFormProps {
    account?: IAccount;
    restaurant?: IRestaurant;
    handleAccount: (account: IAccount) => void;
    handleRestaurant: (restaurant: IRestaurant) => void;
}

function RestaurantAccountForm({account, restaurant}: IRestaurantAccountFormProps) {

    // Account
    const [email, setEmail] = useState(account?.email);
    const [password, setPassword] = useState(account?.password);
    const [name, setName] = useState(account?.name);
    const [forname, setForname] = useState(account?.forname);
    const [address, setAddress] = useState(account?.address);

    // Restaurant
    const [restaurantName, setRestaurantName] = useState(restaurant?.name);
    const [restaurantDescription, setRestaurantDescription] = useState(restaurant?.description);
    const [restaurantAddress, setRestaurantAddress] = useState(restaurant?.address);
    const [restaurantOpeningTime, setRestaurantOpeningTime] = useState(restaurant?.openingTime);
    const [restaurantClosingTime, setRestaurantClosingTime] = useState(restaurant?.closingTime);
    const [restaurantDeliveryPrice, setRestaurantDeliveryPrice] = useState(restaurant?.deliveryPrice);
    const [restaurantTelephone, setRestaurantTelephone] = useState(restaurant?.telephone);

    return (
        <Stack direction="row" divider={<Divider orientation="vertical" flexItem />} spacing={10} justifyContent="space-around">
            <Stack direction="column" spacing={2} justifyContent="space-around">
                <TextField label="E-mail" variant="outlined" required margin="dense" value={email}     onChange={(e) => setEmail(e.target.value)}/>
                <TextField label="Mot de passe" variant="outlined" required margin="dense" value={password}  onChange={(e) => setPassword(e.target.value)} type="password" />
                <TextField label="Nom" variant="outlined" required margin="dense" value={name}      onChange={(e) => setName(e.target.value)}/>
                <TextField label="Prénom" variant="outlined" required margin="dense" value={forname}   onChange={(e) => setForname(e.target.value)}/>
                <TextField label="Adresse" variant="outlined" margin="dense" value={address}    onChange={(e) => setAddress(e.target.value)}   multiline       rows={4}/>
            </Stack>    
            <Stack direction="column" spacing={2} justifyContent="space-around">
                <TextField label="Nom restaurant"       variant="outlined"  required margin="dense" value={restaurantName}     onChange={(e) => setRestaurantName(e.target.value)}/>
                <TextField label="Description restaurant" variant="outlined"  required margin="dense" value={restaurantDescription}  onChange={(e) => setRestaurantDescription(e.target.value)} type="password" />
                <TextField label="Adresse restaurant"      variant="outlined"           margin="dense" value={restaurantAddress}    onChange={(e) => setRestaurantAddress(e.target.value)}   multiline       rows={4}/>
                <TextField label="Heure d'ouverture"          variant="outlined"  required margin="dense" value={restaurantOpeningTime}      onChange={(e) => setRestaurantOpeningTime(e.target.value)}/>
                <TextField label="Heure de fermeture"       variant="outlined"  required margin="dense" value={restaurantClosingTime}   onChange={(e) => setRestaurantClosingTime(e.target.value)}/>
                <TextField label="Prix de livraison"       variant="outlined" required margin="dense" value={restaurantDeliveryPrice}   onChange={(e) => setRestaurantDeliveryPrice(parseInt(e.target.value))} type="number"/>
                <TextField label="Téléphone"       variant="outlined"  required margin="dense" value={restaurantTelephone}   onChange={(e) => setRestaurantTelephone(e.target.value)}/>
            </Stack>
        </Stack>
    )
}

export default RestaurantAccountForm;