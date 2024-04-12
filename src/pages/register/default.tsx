import { Button, Stack, TextField, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import { useState } from "react";
import { setAccount } from "../../store/reducers/account";
import { register } from "../../api/services/account";
import { IRegisterProps } from ".";

function DefaultAccount({ accountType }: IRegisterProps) {
  const dispatch = useDispatch<AppDispatch>();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [forname, setForname] = useState("");
  const [address, setAddress] = useState("");

  //Gestion des champs obligatoire
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [nameError, setNameError] = useState("");
  const [fornameError, setFornameError] = useState("");
  const [addressError, setAddressError] = useState("");

  const handleRegister = async () => {
    // Validation de l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError("Veuillez entrer une adresse e-mail valide");
      return; // Sortir de la fonction si l'email est invalide
    }

    if (!name.trim()) {
        setNameError("Veuillez entrer un nom.");
      } else {
        setNameError("");
      }
  
      if (!password.trim()) {
        setPasswordError("Veuillez entrer un mot de passe.");
      } else {
        setPasswordError("");
      }
  
      if (!forname.trim()) {
        setFornameError("Veuillez entrer un prénom.");
      } else {
        setFornameError("");
      }

      if (!addressError.trim()) {
        setAddressError("Veuillez entrer une addresse.");
      } else {
        setAddressError("");
      }

    const response = await register({
      email,
      password,
      forname,
      name,
      accountType,
      address,
    });

    if (response.status === 200) {
      const { token, account } = response.data;
      localStorage.setItem("token", token);
      dispatch(setAccount(account));
    } else {
      alert(response.data);
    }
  };

  return (
    <div className="w-full h-full items-center flex flex-col">
      <Stack direction="column" spacing={4} className="pt-5">
        <Typography className="m-3 text-center">
          Infos et modifications du compte
        </Typography>
        <Stack direction="column" spacing={2} justifyContent="space-around">
          <TextField
            label="E-mail"
            variant="outlined"
            className="w-full"
            required
            margin="dense"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
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
            error={!!passwordError}
            helperText={passwordError}
          />
          <TextField
            label="Nom"
            variant="outlined"
            className="w-full"
            required
            margin="dense"
            value={name}
            onChange={(e) => setName(e.target.value)}
            error={!!nameError}
            helperText={nameError}
          />
          <TextField
            label="Prénom"
            variant="outlined"
            className="w-full"
            required
            margin="dense"
            value={forname}
            onChange={(e) => setForname(e.target.value)}
            error={!!fornameError}
            helperText={fornameError}
          />
          <TextField
            label="Adresse"
            variant="outlined"
            className="w-full"
            required
            margin="dense"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            multiline
            rows={4}
            error={!!addressError}
            helperText={addressError}
          />
        </Stack>
        <Stack direction="row" alignItems="center" justifyContent="center">
          <Button
            variant="contained"
            onClick={() => {
              handleRegister();
            }}
          >
            Créer le compte
          </Button>
        </Stack>
      </Stack>
    </div>
  );
}
export default DefaultAccount;
