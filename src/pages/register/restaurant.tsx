import { Button, Divider, Stack, TextField, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import { useState } from 'react';
import { setAccount } from "../../store/reducers/account";
import { IAccount } from 'cesieats-service-types/src/account';
import { redirect } from "react-router-dom";
import { register } from "../../api/services/account";
import { IRegisterProps } from ".";

function RestaurantAccount({ accountType }: IRegisterProps) {
    
    const dispatch = useDispatch<AppDispatch>();

    // Account
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [forname, setForname] = useState('');
    const [address, setAddress] = useState('');

    // Restaurant
    const [restaurantName, setRestaurantName] = useState('');
    const [restaurantDescription, setRestaurantDescription] = useState('');
    const [restaurantAddress, setRestaurantAddress] = useState('');
    const [restaurantOpeningTime, setRestaurantOpeningTime] = useState('');
    const [restaurantClosingTime, setRestaurantClosingTime] = useState('');
    const [restaurantDeliveryPrice, setRestaurantDeliveryPrice] = useState(0);
    const [restaurantTelephone, setRestaurantTelephone] = useState('');

    const handleRegister = async () => {
        const { token, account } = await register({ email, password, forname, name, accountType });
        localStorage.setItem('token', token);
        dispatch(setAccount(account));
    }

    return (
        <div className="w-full items-center flex flex-col">
            <Stack direction="column" spacing={8} className="pt-5">
                <Typography className="m-3 text-center">Infos et modifications du restaurant</Typography>
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
                <Stack direction="row" spacing={5} alignItems="center" justifyContent="center">
                    <Button variant="contained" onClick={() => { handleRegister() }}>Créer le compte</Button>
                </Stack>
            </Stack>
        </div>
    );
}
export default RestaurantAccount;