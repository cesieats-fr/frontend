import { useSelector } from 'react-redux'
import { io } from 'socket.io-client'
import { RootState } from '../store'
import { useEffect } from 'react';
import { notifySuccess } from '../notification';
import { useSnackbar } from 'notistack';

function Socket() {

    const { enqueueSnackbar } = useSnackbar();
    const isAuthenticated = useSelector((state: RootState) => state.account.isAuthenticated);
    const account = useSelector((state: RootState) => state.account.account);

    useEffect(() => {
        if(isAuthenticated) {
            // notifySuccess(enqueueSnackbar, (String)(account._id))

            const socket = io(import.meta.env.VITE_SOCKET_URL, {
                query: { accountId: account._id }
            });

            socket.on('connect', () => {
                notifySuccess(enqueueSnackbar, `Bienvenue ${account.forname} !`)
            });

            socket.on('test', (data) => {
                notifySuccess(enqueueSnackbar, data)
            });

        }
    }, [isAuthenticated, account, enqueueSnackbar])

    return null
}




export default Socket;