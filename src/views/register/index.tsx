import { Button, TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { useState, useEffect } from 'react';
import { register } from "../../api/services/account";
import { setAccount } from "../../store/reducers/account";

function Register() {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [forname, setForname] = useState('');

    const handleRegister = async () => {
        const { token, account } = await register(email, password, forname, name);
        console.log(token);
        console.log(account);
        localStorage.setItem('token', token);
        dispatch(setAccount(account));
        
    }
    return (
        <div className="w-full items-center flex flex-col">
            <div className="w-75 items-center flex flex-col">
                <h1 className="m-2">Créer un compte</h1>
                <div className="w-full items-center flex flex-col">
                    <TextField id="outlined-basic" label="E-mail"       variant="outlined" className="w-full" required margin="dense" value={email}     onChange={(e) => setEmail(e.target.value)}/>
                    <TextField id="outlined-basic" label="Mot de passe" variant="outlined" className="w-full" required margin="dense" value={password}  onChange={(e) => setPassword(e.target.value)} type="password" />
                    <TextField id="outlined-basic" label="Nom"          variant="outlined" className="w-full" required margin="dense" value={name}      onChange={(e) => setName(e.target.value)}/>
                    <TextField id="outlined-basic" label="Prénom"       variant="outlined" className="w-full" required margin="dense" value={forname}   onChange={(e) => setForname(e.target.value)}/>
                    <Button variant="contained" onClick={() => { handleRegister() }}>Valider</Button>
                </div>
            </div>
        </div>
    );
}

export default Register;