import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Switch, FormControlLabel, CircularProgress, MenuItem, Select, InputLabel, FormControl } from '@mui/material';
import { styled } from '@mui/system';

// Styled components for enhanced visuals
const StyledBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(2),
    minHeight: '80vh',
    backgroundColor: theme.palette.background.default
}));

const StyledButton = styled(Button)(({ theme }) => ({
    marginTop: theme.spacing(2),
    backgroundColor: theme.palette.secondary.main,
    '&:hover': {
        backgroundColor: theme.palette.secondary.dark,
        transform: 'translateY(-2px)',
        boxShadow: theme.shadows[4]
    }
}));

const SettingsPage = () => {
    const [loading, setLoading] = useState(false);
    const [username, setUsername] = useState(sessionStorage.getItem('username') || '');
    const [email, setEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [notificationsEnabled, setNotificationsEnabled] = useState(true);
    const [darkMode, setDarkMode] = useState(false);
    const [language, setLanguage] = useState('en');

    const handleSaveSettings = () => {
        setLoading(true);
        setTimeout(() => {
            sessionStorage.setItem('username', username);
            setLoading(false);
            alert('Settings saved successfully!');
        }, 1500); // Simulate a 1.5-second loading time
    };

    return (
        <StyledBox>
            <Typography variant="h4" gutterBottom>
                User Settings
            </Typography>
            <TextField
                label="Username"
                variant="outlined"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                sx={{ width: '300px', marginBottom: 2 }}
            />
            <TextField
                label="Email"
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                sx={{ width: '300px', marginBottom: 2 }}
            />
            <TextField
                label="New Password"
                variant="outlined"
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                sx={{ width: '300px', marginBottom: 2 }}
            />
            <FormControlLabel
                control={
                    <Switch
                        checked={notificationsEnabled}
                        onChange={(e) => setNotificationsEnabled(e.target.checked)}
                        color="primary"
                    />
                }
                label="Enable Notifications"
            />
            <FormControlLabel
                control={
                    <Switch
                        checked={darkMode}
                        onChange={(e) => setDarkMode(e.target.checked)}
                        color="primary"
                    />
                }
                label="Dark Mode"
            />
            <FormControl sx={{ width: '300px', marginBottom: 2 }}>
                <InputLabel>Language</InputLabel>
                <Select
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                    label="Language"
                >
                    <MenuItem value="en">English</MenuItem>
                    <MenuItem value="ko">Korean</MenuItem>
                    <MenuItem value="es">Spanish</MenuItem>
                    <MenuItem value="fr">French</MenuItem>
                </Select>
            </FormControl>
            <StyledButton
                onClick={handleSaveSettings}
                disabled={loading}
                startIcon={loading ? <CircularProgress size={24} /> : null}
            >
                {loading ? 'Saving...' : 'Save Settings'}
            </StyledButton>
        </StyledBox>
    );
};

export default SettingsPage;
