import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { login } from '../../store/reducers/identity';
import { AppDispatch } from '../../store';
import { Button } from '@mui/material';

function Home() {
    const dispatch = useDispatch<AppDispatch>();
    const identity = useSelector((state: any) => state.identity);

    useEffect(() => {
        console.log(identity);
    }, [identity]);

    return (
        <div>
            HOME mattmerde
            <Button variant="contained" href="/login">Se connecter</Button>
        </div>
    );
}

export default Home;