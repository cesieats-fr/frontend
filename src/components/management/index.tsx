import {
  Button,
  Card,
  CardContent,
  Dialog,
  DialogTitle,
  IconButton,
  Stack,  
  TextField,  
  Typography,
} from "@mui/material";
import { IAccount } from "cesieats-service-types/src/account";

import { Edit, Delete } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { editAccountByID, removeAccount } from "../../store/reducers/account";
import { AppDispatch } from "../../store";
import { useEffect, useState } from "react";
import { deleteAccount, deleteAccountById } from "../../api/services/account";



interface IAccountCardProps {
  account: IAccount;
}

function ClientAccountCard({ account }: IAccountCardProps) {
  const dispatch = useDispatch<AppDispatch>();
  const accountType = ["CLIENT", "DELIVER", "RESTAURANT", "SALESDEPARTEMENT"];

  const [open, setOpen] = useState(false);

  const handleEditClientAccount = () => {
    setOpen(true);    
  };
  
  useEffect(() => {
    setEmail(account.email); 
    setName(account.name);
    setForname(account.forname);
    setAddress(account.address || '');
}, [account]);

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [forname, setForname] = useState('');
  const [address, setAddress] = useState('');


  const handleValidate = () => {   
        const acc : IAccount = {
            _id: account._id,
            email,
            name,
            forname,
            address,
            accountType: account.accountType,
            password: account.password
        }
        dispatch(editAccountByID(acc));
     
    setOpen(false);
  };

  
  const handleDeleteClientAccount = async () => {
    await deleteAccountById(account._id!);
    dispatch(removeAccount());
   
}
  return (
    <Stack>
      <Card variant="elevation">
        <CardContent>
          <Typography variant="h6" color="text.primary" gutterBottom>
            {account.email}
          </Typography>
          <Typography variant="body2" color="text.primary" gutterBottom>
            {account.name}
          </Typography>
          <Typography variant="body2" color="text.primary" gutterBottom>
            {account.forname}
          </Typography>
          <Typography variant="body2" color="text.primary" gutterBottom>
            {account.address}
          </Typography>
          <Typography variant="body2" color="text.primary" gutterBottom>
            {accountType[account.accountType]}
          </Typography>
          <Stack spacing={2} direction="row">
            <IconButton color="primary" onClick={handleEditClientAccount}>
              <Edit />
            </IconButton>
            <IconButton color="error" onClick={handleDeleteClientAccount}>
              <Delete />
            </IconButton>
          </Stack>
        </CardContent>
      </Card>

      <Dialog onClose={handleEditClientAccount} open={open}>
        <DialogTitle>Modifier un client</DialogTitle>
        <TextField label="E-mail"       variant="outlined" className="w-full" required margin="dense" value={email}     onChange={(e) => setEmail(e.target.value)} />
                    <TextField label="Nom"          variant="outlined" className="w-full" required margin="dense" value={name}      onChange={(e) => setName(e.target.value)}/>
                    <TextField label="Prénom"       variant="outlined" className="w-full" required margin="dense" value={forname}   onChange={(e) => setForname(e.target.value)}/>
                    <TextField label="Adresse"      variant="outlined" className="w-full"          margin="dense" value={address}    onChange={(e) => setAddress(e.target.value)}   multiline       rows={4}/>
                
      <Button onClick={handleValidate}>Valider les modifications</Button>
      </Dialog>
    </Stack>
  );
}

export default ClientAccountCard;
