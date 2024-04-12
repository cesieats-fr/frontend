import { Button, TextField, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { login } from "../../api/services/account";
import { setAccount } from "../../store/reducers/account";
import { NavLink } from "react-router-dom";
import { RootState } from "../../store";
import { notifyError } from "../../notification";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";


function Login() {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { enqueueSnackbar } = useSnackbar();
  const isAuthenticated = useSelector(
    (state: RootState) => state.account.isAuthenticated
  );
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleLogin = async () => {
    // Validation de l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError("Veuillez entrer une adresse e-mail valide");
      return; // Sortir de la fonction si l'email est invalide
    }

    login(email, password).then( (res) => {
      if (res.status === 200) {
        localStorage.setItem("token", res.data.token);
        dispatch(setAccount(res.data.account));
        navigate("/");
      } else if (res.status === 404) {
        notifyError(enqueueSnackbar, "Email ou mot de passe incorrect");
      } else {
        notifyError(enqueueSnackbar, "Connexion impossible!");
      }
    }).catch( (res) => {
      if (res.response.status === 404) {
        notifyError(enqueueSnackbar, "Email ou mot de passe incorrect");
      } else {
        notifyError(enqueueSnackbar, "Connexion impossible!");
      }
    });

    
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
                error={!!emailError}
                helperText={emailError}
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
