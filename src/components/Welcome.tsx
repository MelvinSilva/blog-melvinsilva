import React from 'react';
import Typography from '@mui/material/Typography';

const Welcome = () => {
    return (
        <div>
            <Typography textAlign="center">
                <h1>Bienvenue sur le blog de <i>melvinsilva.tech</i></h1>
                <p>Ce blog est consacré à la tech de manière général, le développement web et la sécurité. Il a pour but de vous tenir informés des dernières tendances dans ces domaines mais aussi de sujet important déja existant. Bonne lecture ;)</p>
            </Typography>

        </div>
    );
};

export default Welcome;