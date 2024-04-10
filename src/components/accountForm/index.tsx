import { EAccountType } from "../../enums";
import DefaultAccountForm from "./default";
import { IAccount } from "cesieats-service-types/src/account";
import { IRestaurant } from "cesieats-service-types/src/restaurant";
import RestaurantAccountForm from "./restaurant";

interface IAccountFormProps {
    accountType: EAccountType;
    account?: IAccount;
    restaurant?: IRestaurant;
    handleAccount: (account: IAccount) => void;
    handleRestaurant: (restaurant: IRestaurant) => void;
}

function AccountForm({ accountType, account, restaurant, handleAccount, handleRestaurant }: IAccountFormProps) {

    function handleAccountFormSubmission(account: IAccount) {
        // Faites quelque chose avec les données du formulaire
        console.log("Email:", account.email);
        // ...
    }

    function handleRestaurantFormSubmission(restaurant: IRestaurant) {
        // Faites quelque chose avec les données du formulaire
        console.log("Email:", restaurant.name);
        // ...
    }

    switch(accountType) {
        case EAccountType.RESTAURANT:
            return <RestaurantAccountForm account={account} restaurant={restaurant} handleAccount={(account) => handleAccountFormSubmission(account)} handleRestaurant={(restaurant) => handleRestaurantFormSubmission(restaurant)} />;
        default:
            return <DefaultAccountForm account={account} handleAccount={handleAccount} />;
    }
}

export default AccountForm;