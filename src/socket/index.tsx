import { useSelector } from 'react-redux'
import { io } from 'socket.io-client'
import { RootState } from '../store'
import { useEffect } from 'react';

function Socket() {

    const isAuthenticated = useSelector((state: RootState) => state.account.isAuthenticated);
    const accountId = useSelector((state: RootState) => state.account.account._id);

    useEffect(() => {
        if(isAuthenticated) {
            console.log('authenticated')
            console.log(accountId);

            const socket = io(import.meta.env.VITE_SOCKET_URL, {
                query: { accountId }
            });

            socket.on('connect', () => {
                console.log('connected to socket.io server')
            });

            socket.on('test', (data) => {
                console.log('data:', data)
            });
        }
    }, [isAuthenticated, accountId])

    return null
}




export default Socket;