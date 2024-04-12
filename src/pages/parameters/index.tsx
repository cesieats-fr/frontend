import { FormControl, InputLabel, MenuItem, Select, Stack, TextField } from "@mui/material";
import { useState } from "react";
import { setLocalStorageItem, getLocalStorageItem } from "../../localStorage";

function Parameters() {
    const [notificationDuration, setNotificationTime] = useState((Number)(getLocalStorageItem('notificationDuration')) / 1000 || 3);
    const [notificationNumber, setNotificationNumber] = useState(getLocalStorageItem('notificationNumber') || 3);
    const [notificationPosition, setNotificationPosition] = useState(getLocalStorageItem('notificationPosition') || 1);
    const fieldWidth = {width: 250};

    const handleNotificationTimechange = (nb: number) => {
        const duration = Math.round(nb);
        if(duration > 0) {
            setNotificationTime(duration);
            setLocalStorageItem('notificationDuration', duration * 1000);
        }
    }

    const handleNotificationNumberchange = (nb: number) => {
        const number = Math.round(nb);
        if(number > 0) {
            setNotificationNumber(number);
            setLocalStorageItem('notificationNumber', number);
        }
    }

    const handleNotificationPositionchange = (value: any) => {
        setNotificationPosition(value.target.value);
        setLocalStorageItem('notificationPosition', value.target.value);
    }

    return (
        <div>
            <Stack direction="column" alignItems="center" justifyContent="center" spacing={3}>
                <TextField
                    label="durée des notifications (en secondes)"
                    variant="outlined"
                    margin="dense"
                    value={notificationDuration}
                    onChange={(e) =>
                        handleNotificationTimechange(parseInt(e.target.value))
                    }
                    type="number"
                    sx={fieldWidth}
                />
                <TextField
                    label="Nombre maximum de notifications"
                    variant="outlined"
                    margin="dense"
                    value={notificationNumber}
                    onChange={(e) =>
                        handleNotificationNumberchange(parseInt(e.target.value))
                    }
                    type="number"
                    sx={fieldWidth}
                />
                <FormControl>
                    <InputLabel id="positionLabel">Position des notifications</InputLabel>
                    <Select labelId="positionLabel"
                        value={notificationPosition}
                        variant="outlined"
                        onChange={handleNotificationPositionchange}
                        label="Position des notifications"
                        sx={fieldWidth}
                    >
                        <MenuItem value={1}>Haut-Droite</MenuItem>
                        <MenuItem value={2}>Haut-Gauche</MenuItem>
                        <MenuItem value={3}>Bas-Droite</MenuItem>
                        <MenuItem value={4}>Bas-Gauche</MenuItem>
                    </Select>
                </FormControl>
            </Stack>
        </div>
    );
} 

export default Parameters;