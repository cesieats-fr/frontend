import { Button, Snackbar } from '@mui/material'
import { useState } from 'react'

interface ICopyToClipboardButtonProps {
    text: string;
}

function CopyToClipboardButton({text}: ICopyToClipboardButtonProps) {
    const [open, setOpen] = useState(false)
    const handleClick = () => {
        setOpen(true);
        navigator.clipboard.writeText(text);
    }
    
    return (
        <>
            <Button onClick={handleClick} variant='outlined'>{ text }</Button>
            <Snackbar
                open={open}
                onClose={() => setOpen(false)}
                autoHideDuration={2000}
                message="Copied to clipboard"
            />
        </>
    )
}

export default CopyToClipboardButton

