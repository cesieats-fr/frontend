import { Stack, TextField } from "@mui/material";
import { IAccount } from "cesieats-service-types/src/account";
import { useState } from "react";

interface IDefaultAccountFormProps {
    account?: IAccount;
    handleAccount: (account: IAccount) => void;
}

function DefaultAccountForm({account}: IDefaultAccountFormProps) {

    // Account
    const [email, setEmail] = useState(account?.email);
    const [password, setPassword] = useState(account?.password);
    const [name, setName] = useState(account?.name);
    const [forname, setForname] = useState(account?.forname);
    const [address, setAddress] = useState(account?.address);


    return (
        <Stack direction="column" spacing={2} justifyContent="space-around">
            <TextField label="E-mail" variant="outlined" required margin="dense" value={email}     onChange={(e) => setEmail(e.target.value)}/>
            <TextField label="Mot de passe" variant="outlined" required margin="dense" value={password}  onChange={(e) => setPassword(e.target.value)} type="password" />
            <TextField label="Nom" variant="outlined" required margin="dense" value={name}      onChange={(e) => setName(e.target.value)}/>
            <TextField label="Prénom" variant="outlined" required margin="dense" value={forname}   onChange={(e) => setForname(e.target.value)}/>
            <TextField label="Adresse" variant="outlined" margin="dense" value={address}    onChange={(e) => setAddress(e.target.value)}   multiline       rows={4}/>
        </Stack>
    )
}

export default DefaultAccountForm;