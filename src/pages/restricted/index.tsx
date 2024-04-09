import React from 'react';
import { Typography } from '@mui/material';

const RestrictedPage: React.FC = () => {
    return (
        <div>
            <Typography variant="h4" component="h1">
                Accès restreint
            </Typography>
            <Typography variant="body1">
                Désolé, mais vous ne pouvez pas accéder à cette page.
            </Typography>
        </div>
    );
};

export default RestrictedPage;