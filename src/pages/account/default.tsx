import { Button, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { useEffect, useState } from 'react';
import { deleteAccount } from "../../api/services/account";
import { editAccount, removeAccount } from "../../store/reducers/account";
import { IAccount } from 'cesieats-service-types/src/account';
import { redirect } from "react-router-dom";
import CopyToClipboardButton from "../../components/common/copyToClipboardButton"
const type = ['Client','Livreur','Restaurant',"Service Commercial"];

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
            <div className="w-75 h-full items-center flex flex-col">
                <h1 className="m-5">Infos et modifications du compte</h1>
                <div className="w-full items-center flex flex-col">
                    Type de compte : {type[account.accountType]}
                </div>
                <div className="w-full h-full items-center flex flex-col">
                    <TextField label="E-mail"       variant="outlined" className="w-full" required margin="dense" value={email}     onChange={(e) => setEmail(e.target.value)} InputProps={{ readOnly: true }} />
                    <TextField label="Mot de passe" variant="outlined" className="w-full" required margin="dense" value={password}  onChange={(e) => setPassword(e.target.value)} type="password" />
                    <TextField label="Nom"          variant="outlined" className="w-full" required margin="dense" value={name}      onChange={(e) => setName(e.target.value)}/>
                    <TextField label="Prénom"       variant="outlined" className="w-full" required margin="dense" value={forname}   onChange={(e) => setForname(e.target.value)}/>
                    <TextField label="Adresse"      variant="outlined" className="w-full" required margin="dense" value={address}    onChange={(e) => setAddress(e.target.value)}   multiline       rows={4}/>
                    <CopyToClipboardButton text={account.codeSponsor!} />
                    <div className="w-full flex flex-row justify-around pt-5">
                        <Button variant="contained" onClick={() => { handleEditAccount() }}>Valider les modifications</Button>
                        <Button variant="contained" onClick={() => { handleDeleteAccount() }}>Supprimer le compte</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default DefaultAccount;