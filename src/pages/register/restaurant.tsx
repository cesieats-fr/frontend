import { Button, Divider, Stack, TextField, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import { useState } from "react";
import { setAccount } from "../../store/reducers/account";
import { register } from "../../api/services/account";
import { addRestaurant } from "../../store/reducers/restaurant";
import { IRegisterProps } from ".";
import { IRestaurant } from "cesieats-service-types/src/restaurant";
import { useNavigate } from "react-router-dom";

function RestaurantAccount({ accountType }: IRegisterProps) {
  const dispatch = useDispatch<AppDispatch>();

  const navigate = useNavigate();

  // Account
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [forname, setForname] = useState("");
  const [address, setAddress] = useState("");

  // Restaurant
  const [restaurantName, setRestaurantName] = useState("");
  const [restaurantDescription, setRestaurantDescription] = useState("");
  const [restaurantAddress, setRestaurantAddress] = useState("");
  const [restaurantOpeningTime, setRestaurantOpeningTime] = useState("");
  const [restaurantClosingTime, setRestaurantClosingTime] = useState("");
  const [restaurantDeliveryPrice, setRestaurantDeliveryPrice] = useState(0);
  const [restaurantTelephone, setRestaurantTelephone] = useState("");

  //Gestion des champs obligatoire
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [nameError, setNameError] = useState("");
  const [fornameError, setFornameError] = useState("");
  const [RestuarantNameError, setRestuarantNameError] = useState("");
  const [DescriptionRestaurantError, setDescriptionError] = useState("");
  const [houverteError, setHouvertureError] = useState("");
  const [hFermetureError, setHfermtureError] = useState("");
  const [PriceError, setPriceError] = useState("");
  const [TelephoneRestaurantError, setTelephoneError] = useState("");
  const [addressError, setAddressError] = useState("");


  const handleRegister = async () => {
    // Vérification des champs obligatoires
    // if (!email || !password || !name || !forname) {
    //   alert("Veuillez remplir tous les champs obligatoires.");
    //   return;
    // }

    // Validation de l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError("Veuillez entrer une adresse e-mail valide");
    } else {
      setEmailError("");
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
    
    if (!RestuarantNameError.trim()) {
      setRestuarantNameError("Veuillez entrer un nom de restaurant.");
    } else {
      setRestuarantNameError("");
    }

    if (!DescriptionRestaurantError.trim()) {
      setDescriptionError("Veuillez entrer une description.");
    } else {
      setDescriptionError("");
    }

    if (!houverteError.trim()) {
      setHouvertureError("Veuillez entrer une heure d'ouverture.");
    } else {
      setHouvertureError("");
    }

    if (!hFermetureError.trim()) {
      setHfermtureError("Veuillez entrer une heure de fermeture.");
    } else {
      setHfermtureError("");
    }

    if (!PriceError.trim()) {
      setPriceError("Veuillez entrer un prix de livraison.");
    } else {
      setPriceError("");
    }

    if (!TelephoneRestaurantError.trim()) {
      setTelephoneError("Veuillez entrer un numéro de téléphone.");
    } else {
      setTelephoneError("");
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

      const restaurant: IRestaurant = {
        name: restaurantName,
        description: restaurantDescription,
        address: restaurantAddress,
        openingTime: restaurantOpeningTime,
        closingTime: restaurantClosingTime,
        deliveryPrice: restaurantDeliveryPrice,
        telephone: restaurantTelephone,
      };

      dispatch(addRestaurant(restaurant));
      navigate('/');
    } else {
      alert(response.data);
    }
  };

  return (
    <div className="w-full items-center flex flex-col">
      <Stack direction="column" spacing={4} className="pt-5">
        <Typography className="m-3 text-center">
          Infos et modifications du restaurant
        </Typography>
        <Stack
          direction="row"
          divider={<Divider orientation="vertical" flexItem />}
          spacing={10}
          justifyContent="space-around"
        >
          <Stack direction="column" spacing={2} justifyContent="space-around">
            <TextField
              label="E-mail"
              variant="outlined"
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
              margin="dense"
              required
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              multiline
              rows={4}
              error={!!addressError}
              helperText={addressError}
            />
          </Stack>
          <Stack direction="column" spacing={2} justifyContent="space-around">
            <TextField
              label="Nom restaurant"
              variant="outlined"
              required
              margin="dense"
              value={restaurantName}
              onChange={(e) => setRestaurantName(e.target.value)}
              error={!!RestuarantNameError}
              helperText={RestuarantNameError}
            />
            <TextField
              label="Description restaurant"
              variant="outlined"
              required
              margin="dense"
              value={restaurantDescription}
              onChange={(e) => setRestaurantDescription(e.target.value)}
              error={!!DescriptionRestaurantError}
              helperText={DescriptionRestaurantError}
            />
            <TextField
              label="Adresse restaurant"
              variant="outlined"
              margin="dense"
              value={restaurantAddress}
              onChange={(e) => setRestaurantAddress(e.target.value)}
              multiline
              rows={4}
            />
            <TextField
              label="Heure d'ouverture"
              variant="outlined"
              required
              margin="dense"
              value={restaurantOpeningTime}
              onChange={(e) => setRestaurantOpeningTime(e.target.value)}
              error={!!houverteError}
              helperText={houverteError}
            />
            <TextField
              label="Heure de fermeture"
              variant="outlined"
              required
              margin="dense"
              value={restaurantClosingTime}
              onChange={(e) => setRestaurantClosingTime(e.target.value)}
              error={!!hFermetureError}
              helperText={hFermetureError}
            />
            <TextField
              label="Prix de livraison"
              variant="outlined"
              required
              margin="dense"
              value={restaurantDeliveryPrice}
              onChange={(e) =>
                setRestaurantDeliveryPrice(parseInt(e.target.value))
              }
              type="number"
              error={!!PriceError}
              helperText={PriceError}
            />
            <TextField
              label="Téléphone"
              variant="outlined"
              required
              margin="dense"
              value={restaurantTelephone}
              onChange={(e) => setRestaurantTelephone(e.target.value)}
              error={!!TelephoneRestaurantError}
              helperText={TelephoneRestaurantError}
            />
          </Stack>
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
export default RestaurantAccount;
