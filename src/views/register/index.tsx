import { Button, TextField } from "@mui/material";

function Register() {
    return (
        <div className="w-full items-center flex flex-col">
            <div className="w-75 items-center flex flex-col">
                <h1 className="m-2">Créer un compte</h1>
                <div className="w-full items-center flex flex-col">
                    <TextField id="outlined-basic" label="E-mail" variant="outlined" className="w-full" required margin="dense"/>
                    <TextField id="outlined-basic" label="Mot de passe" variant="outlined" className="w-full" required margin="dense"/>
                    <TextField id="outlined-basic" label="Nom" variant="outlined" className="w-full" required margin="dense"/>
                    <TextField id="outlined-basic" label="Prénom" variant="outlined" className="w-full" required margin="dense"/>
                    <Button variant="contained" onClick={() => { alert('ça clique'); }}>Valider</Button>
                </div>
            </div>
        </div>
    );
}

export default Register;