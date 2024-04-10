import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { EAccountType } from "../../enums";
import RestaurantAccount from "./restaurant";
import DefaultAccount from "./default";

function Account() {
    
    const accountType = useSelector((state: RootState) => state.account.account?.accountType);

    switch(accountType) {
        case EAccountType.CLIENT:
            return <RestaurantAccount />;
        default:
            return <DefaultAccount />;
    }
}
export default Account;