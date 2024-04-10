import { RadioGroup, FormControlLabel, Radio } from "@mui/material";
import { useState } from 'react';
import { EAccountType } from "../../enums";
import RestaurantRegister from './restaurant';
import DefaultRegister from './default';

export interface IRegisterProps {
    accountType: EAccountType;
}

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
    const [accountType, setAccountType] = useState<EAccountType>(EAccountType.CLIENT);

    const getRegisterForm = () => {
        switch(accountType) {
            case EAccountType.RESTAURANT:
                return <RestaurantRegister accountType={accountType} />;
            default:
                return <DefaultRegister accountType={accountType} />;
        }
    }

    return (
        <div className="w-full items-center flex flex-col">
            <div className="w-75 items-center flex flex-col">
                <h1 className="m-2">Créer un compte</h1>
                <div className="w-full items-center flex flex-col">
                    <RadioGroup row aria-labelledby="row-radio-buttons-group-label" name="row-radio-buttons-group" onChange={(e) => setAccountType(parseInt(e.target.value))}>
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
                    { getRegisterForm() }
                </div>
            </div>
        </div>
    );
}

export default Register;