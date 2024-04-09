import { Button, TextField, RadioGroup, FormControlLabel, Radio } from "@mui/material";
import { useDispatch } from "react-redux";
import { useState } from 'react';
import { register } from "../../api/services/account";
import { setAccount } from "../../store/reducers/account";
import { EAccountType } from "../../enums";

const accountTypes = [
    {
        name: "Client",
        type: EAccountType.CLIENT
    },
    {
        name: "Restaurant",
        type: EAccountType.RESTAURANT
    },
    {
        name: "Livreur",
        type: EAccountType.DELIVER
    }
]
function Register() {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [forname, setForname] = useState('');
    const [accountType, setAccountType] = useState<EAccountType>(EAccountType.CLIENT);

    const handleRegister = async () => {
        const { token, account } = await register({ email, password, forname, name, accountType });
        localStorage.setItem('token', token);
        dispatch(setAccount(account));
    }
    return (
        <div className="w-full items-center flex flex-col">
            <div className="w-75 items-center flex flex-col">
                <h1 className="m-2">Créer un compte</h1>
                <div className="w-full items-center flex flex-col">
                    <RadioGroup row aria-labelledby="row-radio-buttons-group-label" name="row-radio-buttons-group" onChange={(e) => setAccountType(parseInt(e.target.value))}>
                        {/* <FormControlLabel value={EAccountType.CLIENT} control={<Radio />} label="Client" />
                        <FormControlLabel value={EAccountType.CLIENT} control={<Radio />} label="Restaurant" />
                        <FormControlLabel value={EAccountType.CLIENT} control={<Radio />} label="Livreur" /> */}
                        {accountTypes && accountTypes.map((aT, index) => (
                            <FormControlLabel
                                key={index}
                                checked={accountType == aT.type}
                                value={aT.type}
                                control={<Radio />}
                                label={aT.name}
                                
                            />
                        ))}
                    </RadioGroup>
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