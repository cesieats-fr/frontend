import { Button, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { useState } from 'react';
import { edit } from "../../api/services/account";
import { setAccount } from "../../store/reducers/account";
import { IAccount } from 'cesieats-service-types/src/account';

const type = ['Client','Restaurant','Livreur'];
function Account() {
    
    const dispatch = useDispatch<AppDispatch>();
    const account = useSelector((state: RootState) => state.account.account);
    console.log(account);
    const [email, setEmail] = useState(account.email);
    const [password, setPassword] = useState(account.password);
    const [name, setName] = useState(account.name);
    const [forname, setForname] = useState(account.forname);
    const [address, setAddress] = useState(account.address);

    const handleEditAccount = async () => {
        const acc : IAccount = {
            email: email,
            password: password,
            name: name,
            forname: forname,
            address: address,
            accountType: account.accountType
        } 
        await edit(acc);
        dispatch(setAccount(acc));
        
    }
    return (
        <div className="w-full items-center flex flex-col">
            <div className="w-75 items-center flex flex-col">
                <h1 className="m-5">Infos et modifications du compte</h1>
                <div className="w-full items-center flex flex-col">
                  Type de compte : {type[account.accountType]}
                </div>
                <div className="w-full items-center flex flex-col">
                  <TextField id="outlined-basic" label="E-mail"       variant="outlined" className="w-full" required margin="dense" value={email}     onChange={(e) => setEmail(e.target.value)}/>
                  <TextField id="outlined-basic" label="Mot de passe" variant="outlined" className="w-full" required margin="dense" value={password}  onChange={(e) => setPassword(e.target.value)} type="password" />
                  <TextField id="outlined-basic" label="Nom"          variant="outlined" className="w-full" required margin="dense" value={name}      onChange={(e) => setName(e.target.value)}/>
                  <TextField id="outlined-basic" label="Prénom"       variant="outlined" className="w-full" required margin="dense" value={forname}   onChange={(e) => setForname(e.target.value)}/>
                  <TextField id="outlined-basic" label="Adresse"      variant="outlined" className="w-full"          margin="dense" value={address}    onChange={(e) => setAddress(e.target.value)}   multiline       rows={4}/>
                  <Button variant="contained" onClick={() => { handleEditAccount() }}>Valider les modifications</Button>
                </div>
            </div>
        </div>
    );
}
export default Account;