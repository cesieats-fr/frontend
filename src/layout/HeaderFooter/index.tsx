import Header from "../header";
import Footer from "../footer";
import { Outlet } from 'react-router-dom';
import { useSelector } from "react-redux";
import { RootState } from "../../store";

function HeaderFooter() {
    const account = useSelector((state: RootState) => state.account.account);

    if(Object.keys(account).length === 0){
        return (
            <div className="w-full h-full absolute top-0 left-0 flex flex-col text-darkClassic">
                <Header accountType={1}/>
                <div className='flex-1'>
                    <Outlet />
                </div>
                <Footer />
            </div>
        );
    } else {
        return (
            <div className='flex-1'>
                <Outlet />
            </div>
        );
    }
}

export default HeaderFooter;
