import { Button, TextField, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { login } from "../../api/services/account";
import { setAccount } from "../../store/reducers/account";
import { NavLink, redirect } from "react-router-dom";
import { RootState } from "../../store";

function Login() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(
    (state: RootState) => state.account.isAuthenticated
  );
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = async () => {
    const { status, data } = await login(email, password);
    if (status === 200) {
      localStorage.setItem("token", data.token);
      dispatch(setAccount(data.account));
      redirect("/");
    } else if (status === 404) {
      alert("Email ou mot de passe incorrect");
    } else {
      alert("Connexion impossible!");
    }
  };

  const getPage = () => {
    if (isAuthenticated) {
      return (
        <div className="w-full items-center flex flex-col">
          <h1 className="m-2">Vous êtes déjà connecté.e</h1>
          <NavLink to={"/"}>
            <Button variant="contained">Retour à la page d'accueil</Button>
          </NavLink>
        </div>
      );
    } else {
      return (
        <div className="w-full items-center flex flex-col">
          <div className="w-75 items-center flex flex-col">
            <Typography className="m-2">Connexion</Typography>
            <div className="w-full items-center flex flex-col">
              <TextField
                label="E-mail"
                variant="outlined"
                className="w-full"
                required
                margin="dense"                
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                label="Mot de passe"
                variant="outlined"
                className="w-full"
                required
                margin="dense"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
              />

              <Button
                variant="contained"
                onClick={() => {
                  handleLogin();
                }}
              >
                Valider
              </Button>
              
            </div>
          </div>
          <div className="w-75 items-center flex flex-col">
            <Typography className="m-2">Pas encore inscrit?</Typography>
            <div className="w-full items-center flex flex-col">
              <NavLink to={"/register"}>
                <Button variant="contained">S'inscrire</Button>
              </NavLink>
            </div>
          </div>
        </div>
      );
    }
  };

  return getPage();
}

export default Login;
