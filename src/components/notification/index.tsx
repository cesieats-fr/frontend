import { VariantType } from "notistack";

export const notify = (enqueueSnackbar: Function ,msg: string, variant: VariantType) => {
    enqueueSnackbar(msg, {variant});
}  

export const notifySuccess = (enqueueSnackbar: Function, msg: string) => {  
    notify(enqueueSnackbar, msg, 'success');
}

export const notifyError = (enqueueSnackbar: Function, msg: string) => {
    notify(enqueueSnackbar, msg, 'error');
}

export const notifyWarning = (enqueueSnackbar: Function, msg: string) => {
    notify(enqueueSnackbar, msg, 'warning');
}