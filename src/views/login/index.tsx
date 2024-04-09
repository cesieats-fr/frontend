import { Button, TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { useState } from 'react';
import { login } from "../../api/services/account";
import { setAccount } from "../../store/reducers/account";

function Login() {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleLogin = async () => {
        const { token, account } = await login(email, password);
        localStorage.setItem('token', token);
        dispatch(setAccount(account));
        
    }
    return (
        <div className="w-full items-center flex flex-col">
            <div className="w-75 items-center flex flex-col">
                <h1 className="m-2">Connexion</h1>
                <div className="w-full items-center flex flex-col">
                    <TextField id="outlined-basic" label="E-mail"       variant="outlined" className="w-full" required margin="dense" value={email}     onChange={(e) => setEmail(e.target.value)}/>
                    <TextField id="outlined-basic" label="Mot de passe" variant="outlined" className="w-full" required margin="dense" value={password}  onChange={(e) => setPassword(e.target.value)} type="password" />
                    <Button variant="contained" onClick={() => { handleLogin() }}>Valider</Button>
                </div>
            </div>
            <div className="w-75 items-center flex flex-col">
                <h1 className="m-2">Pas encore inscrit?</h1>
                <div className="w-full items-center flex flex-col">
                    <Button variant="contained" href="/register">S'inscrire</Button>
                </div>
            </div>
        </div>
    );
}

export default Login;