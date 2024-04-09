import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { login } from '../../store/reducers/identity';
import { AppDispatch } from '../../store';

function Home() {
    const dispatch = useDispatch<AppDispatch>();
    const identity = useSelector((state: any) => state.identity);

    useEffect(() => {
        console.log(identity);
    }, [identity]);

    const handleLogin = () => {
        console.log('dispatch !')
        dispatch(login({ email: 'keanuharrell@hotmail.fr' , password: 'azerty123' }));
    }

    return (
        <div>
            HOME
            <button onClick={handleLogin}>Login</button>
        </div>
    );
}

export default Home;