import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { login } from '../../store/reducers/identity';
import { AppDispatch } from '../../store';
import { Button } from '@mui/material';
import { NavLink } from 'react-router-dom';

function Home() {
    const dispatch = useDispatch<AppDispatch>();
    const account = useSelector((state: any) => state.account.account);
    console.log(account);
    useEffect(() => {
        console.log(account);
    }, [account]);

    return (
        <div>
            HOME mattmerde
            <NavLink to={'/login'}>
                <Button variant="contained">Se connecter</Button>
            </NavLink>
        </div>
    );
}

export default Home;