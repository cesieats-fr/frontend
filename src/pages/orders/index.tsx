import { Button, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useState } from 'react';
import { login } from "../../api/services/account";
import { setAccount } from "../../store/reducers/account";
import { NavLink, redirect } from "react-router-dom";
import { RootState } from "../../store";
import { getAllOrders } from "../../api/services/order";

function Orders() {
    const dispatch = useDispatch();
    const account = useSelector((state: RootState) => state.account.account);
    //Nécessite l'id du compte
    const resultListeOrders = async () => {    
        const {status, data} = await getAllOrders(1, undefined, undefined);

        if(status === 200) {
            return(
                <div className="w-full items-center flex flex-col">
                </div>
            );
        }else {
            return(
                <h2 className="m-2">Vous n'avez pas de commandes</h2>
            );
        }
    };
    return (
        <div className="w-full items-center flex flex-col">
        <h1 className="m-2">Historiques des commandes</h1>
            {}
        </div>
    );
}

export default Orders;
