import { EnqueueSnackbar, VariantType } from "notistack";

export const notify = (enqueueSnackbar: EnqueueSnackbar ,msg: string, variant: VariantType) => {
    enqueueSnackbar(msg, {variant});
}  

export const notifySuccess = (enqueueSnackbar: EnqueueSnackbar, msg: string) => {  
    notify(enqueueSnackbar, msg, 'success');
}

export const notifyError = (enqueueSnackbar: EnqueueSnackbar, msg: string) => {
    notify(enqueueSnackbar, msg, 'error');
}

export const notifyWarning = (enqueueSnackbar: EnqueueSnackbar, msg: string) => {
    notify(enqueueSnackbar, msg, 'warning');
}

export const notifyInfo = (enqueueSnackbar: EnqueueSnackbar, msg: string) => {
    notify(enqueueSnackbar, msg, 'info');
}