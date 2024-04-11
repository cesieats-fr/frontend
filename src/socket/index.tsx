import { useSelector } from 'react-redux'
import { io } from 'socket.io-client'
import { RootState } from '../store'
import { useEffect } from 'react';
import { notifySuccess } from '../components/notification';
import { useSnackbar } from 'notistack';

function Socket() {
    
    const { enqueueSnackbar } = useSnackbar();
    const isAuthenticated = useSelector((state: RootState) => state.account.isAuthenticated);
    const accountId = useSelector((state: RootState) => state.account.account._id);

    useEffect(() => {
        if(isAuthenticated) {
            console.log('authenticated')
            console.log(accountId);
            notifySuccess(enqueueSnackbar, (String)(accountId))

            const socket = io(import.meta.env.VITE_SOCKET_URL, {
                query: { accountId }
            });

            socket.on('connect', () => {
                console.log('connected to socket.io server')
                notifySuccess(enqueueSnackbar, "connected to socket.io server")
            });

            socket.on('test', (data) => {
                console.log('data:', data)
                notifySuccess(enqueueSnackbar, "test")

            });

        }
    }, [isAuthenticated, accountId])

    return null
}




export default Socket;