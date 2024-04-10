import { Button, Stack, TextField, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { useEffect, useState } from 'react';
import { deleteAccount } from "../../api/services/account";
import { editAccount, removeAccount } from "../../store/reducers/account";
import { IAccount } from 'cesieats-service-types/src/account';
import { redirect } from "react-router-dom";

function DefaultAccount() {
    const dispatch = useDispatch<AppDispatch>();
    const account = useSelector((state: RootState) => state.account.account);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [forname, setForname] = useState('');
    const [address, setAddress] = useState('');

    useEffect(() => {
        setEmail(account.email);
        setPassword(account.password);
        setName(account.name);
        setForname(account.forname);
        setAddress(account.address || '');
    }, [account]);

    const handleEditAccount = async () => {
        const acc : IAccount = {
            email: account.email,
            password,
            name,
            forname,
            address,
            accountType: account.accountType
        }
        dispatch(editAccount(acc));
    }
    const handleDeleteAccount = async () => {
        await deleteAccount();
        dispatch(removeAccount());
        redirect('/');
    }
    return (
        <div className="w-full h-full items-center flex flex-col">
            <Stack direction="column" spacing={4}>
                <Typography className="m-3 text-center">Infos et modifications du compte</Typography>
                <Stack direction="column" spacing={2} justifyContent="space-around">
                    <TextField label="E-mail"       variant="outlined" className="w-full" required margin="dense" value={email}     onChange={(e) => setEmail(e.target.value)}/>
                    <TextField label="Mot de passe" variant="outlined" className="w-full" required margin="dense" value={password}  onChange={(e) => setPassword(e.target.value)} type="password" />
                    <TextField label="Nom"          variant="outlined" className="w-full" required margin="dense" value={name}      onChange={(e) => setName(e.target.value)}/>
                    <TextField label="Prénom"       variant="outlined" className="w-full" required margin="dense" value={forname}   onChange={(e) => setForname(e.target.value)}/>
                    <TextField label="Adresse"      variant="outlined" className="w-full"          margin="dense" value={address}    onChange={(e) => setAddress(e.target.value)}   multiline       rows={4}/>
                </Stack>
                <Stack direction="row" spacing={5} alignItems="center" justifyContent="space-between">
                    <Button variant="contained" onClick={() => { handleEditAccount() }}>Valider les modifications</Button>
                    <Button variant="contained" onClick={() => { handleDeleteAccount() }}>Supprimer le compte</Button>                    
                </Stack>
            </Stack>
        </div>
    );
}
export default DefaultAccount;