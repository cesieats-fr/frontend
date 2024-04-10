import { Button, Stack, TextField, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import { useState } from 'react';
import { setAccount } from "../../store/reducers/account";
import { IAccount } from 'cesieats-service-types/src/account';
import { redirect } from "react-router-dom";
import { register } from "../../api/services/account";
import { IRegisterProps } from ".";

function DefaultAccount({ accountType }: IRegisterProps) {
    
    const dispatch = useDispatch<AppDispatch>();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [forname, setForname] = useState('');
    const [address, setAddress] = useState('');

    const handleRegister = async () => {
        const { token, account } = await register({ email, password, forname, name, accountType });
        localStorage.setItem('token', token);
        dispatch(setAccount(account));
    }

    return (
        <div className="w-full h-full items-center flex flex-col">
            <Stack direction="column" spacing={8} className="pt-5">
                <Typography className="m-3 text-center">Infos et modifications du compte</Typography>
                <Stack direction="column" spacing={2} justifyContent="space-around">
                    <TextField id="outlined-basic" label="E-mail"       variant="outlined" className="w-full" required margin="dense" value={email}     onChange={(e) => setEmail(e.target.value)}/>
                    <TextField id="outlined-basic" label="Mot de passe" variant="outlined" className="w-full" required margin="dense" value={password}  onChange={(e) => setPassword(e.target.value)} type="password" />
                    <TextField id="outlined-basic" label="Nom"          variant="outlined" className="w-full" required margin="dense" value={name}      onChange={(e) => setName(e.target.value)}/>
                    <TextField id="outlined-basic" label="Prénom"       variant="outlined" className="w-full" required margin="dense" value={forname}   onChange={(e) => setForname(e.target.value)}/>
                    <TextField id="outlined-basic" label="Adresse"      variant="outlined" className="w-full"          margin="dense" value={address}    onChange={(e) => setAddress(e.target.value)}   multiline       rows={4}/>
                    <Stack direction="row" spacing={5} alignItems="center" justifyContent="center">
                        <Button variant="contained" onClick={() => { handleRegister() }}>Créer le compte</Button>
                    </Stack>
                </Stack>
            </Stack>
        </div>
    );
}
export default DefaultAccount;