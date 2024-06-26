import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, TextField, Button, Typography } from '@mui/material';

function RegistrationPage({ onRegister }) {
    const [userInfo, setUserInfo] = useState({
        name: '',
        email: '',
        password: ''
    });
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserInfo(prev => ({ ...prev, [name]: value }));
    };

    const handleRegister = () => {
        onRegister(userInfo);
        navigate('/'); // Redirect to login page or main page after registration
    };

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',
                padding: 3
            }}
        >
            <Typography variant="h4" gutterBottom>
                Register New Account
            </Typography>
            <TextField
                label="Name"
                variant="outlined"
                name="name"
                value={userInfo.name}
                onChange={handleInputChange}
                sx={{ width: '300px', mb: 2 }}
            />
            <TextField
                label="Email"
                variant="outlined"
                name="email"
                value={userInfo.email}
                onChange={handleInputChange}
                sx={{ width: '300px', mb: 2 }}
            />
            <TextField
                label="Password"
                variant="outlined"
                name="password"
                type="password"
                value={userInfo.password}
                onChange={handleInputChange}
                sx={{ width: '300px', mb: 2 }}
            />
            <Button variant="contained" color="primary" onClick={handleRegister}>
                Register
            </Button>
        </Box>
    );
}

export default RegistrationPage;
