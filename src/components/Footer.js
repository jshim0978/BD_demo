import React, { useState } from 'react';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useNavigate } from 'react-router-dom';

function Footer() {
    const [value, setValue] = useState(0);
    const navigate = useNavigate();

    const handleChange = (event, newValue) => {
        setValue(newValue);
        // Navigate based on the index of the navigation item
        switch (newValue) {
            case 0:
                navigate('/recents'); // navigate to /recents
                break;
            case 1:
                navigate('/favorites'); // navigate to /favorites
                break;
            case 2:
                navigate('/nearby'); // navigate to /nearby
                break;
            default:
                break;
        }
    };

    return (
        <BottomNavigation
            value={value}
            onChange={handleChange}
            showLabels
            style={{ width: '100%', position: 'fixed', bottom: 0 }}
        >
            <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
            <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
            <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
        </BottomNavigation>
    );
}

export default Footer;
