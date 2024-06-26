import React, { useState, useEffect } from 'react';
import { useNavigate, Link as RouterLink } from 'react-router-dom';
import { Box, TextField, Button, Typography, Link } from '@mui/material';

function LoginPage({ onLogin }) {
    const [username, setUsername] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        // Retrieve username from sessionStorage if it exists
        const storedUsername = sessionStorage.getItem('username');
        if (storedUsername) {
            setUsername(storedUsername);
            onLogin(storedUsername);
            navigate('/'); // Navigate to the main page or profile page if already logged in
        }
    }, [navigate, onLogin]);

    const handleLogin = () => {
        onLogin(username);
        sessionStorage.setItem('username', username); // Save username to sessionStorage
        navigate('/'); // Navigate to the main page or profile page after login
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
                Login
            </Typography>
            <TextField
                // label="Username"
                variant="outlined"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                sx={{ width: '300px', marginBottom: 2 }}
            />
            <Button variant="contained" onClick={handleLogin} sx={{ marginBottom: 2 }}>
                Log In
            </Button>
            <Typography variant="body2">
                Don't have an account?{' '}
                <Link component={RouterLink} to="/register" underline="hover">
                    Register here
                </Link>
            </Typography>
        </Box>
    );
}

export default LoginPage;
