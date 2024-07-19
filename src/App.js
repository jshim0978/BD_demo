import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import {
    AppBar,
    Toolbar,
    Typography,
    Paper,
    BottomNavigation,
    BottomNavigationAction,
    ThemeProvider,
    createTheme
} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import InfoIcon from '@mui/icons-material/Info';
import WorkIcon from '@mui/icons-material/Work';
import SettingsIcon from '@mui/icons-material/Settings';
import ChatIcon from '@mui/icons-material/ChatBubble';

import './App.css';
import MyPage from './pages/MyPage';
import InformationPage from './pages/InformationPage';
import CareerPage from './pages/CareerPage';
import SettingsPage from './pages/SettingsPage';
import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';
import ChatPage from './pages/ChatPage';

import userProfiles from "./userProfiles";
import m2z2 from './assets/m2z2.png';

// Create a theme instance
const theme = createTheme({
    palette: {
        primary: {
            main: '#1976d2',
        },
        secondary: {
            main: '#ffc400',
        },
    },
    typography: {
        fontFamily: 'NanumSquareRoundB, sans-serif',
        h5: {
            fontWeight: 600,
        },
    },
});

function App() {
    const [value, setValue] = useState("/");
    const [currentUser, setCurrentUser] = useState(null);

    const handleLogin = (username, password) => {
        const user = userProfiles.find(u => u.name.toLowerCase() === username.toLowerCase());
        if (user && user.password === password) {
            setCurrentUser(user);
        } else {
            alert('Invalid username or password');
        }
    };

    const handleRegister = (newUser) => {
        console.log('Registered new user:', newUser);
        // Normally you'd update a backend or state here
    };

    return (
        <ThemeProvider theme={theme}>
            <Router>
                <div>
                    <AppBar position="static">
                        <Toolbar style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <img src={m2z2} alt="Logo" style={{ height: '40px', marginRight: '10px' }} />
                            <Typography variant="h5" color="inherit">
                                빅데이터 공모전 데모
                            </Typography>
                        </Toolbar>
                    </AppBar>
                    <Routes>
                        {currentUser ? (
                            <Route path="/" element={<MyPage user={currentUser} />} />
                        ) : (
                            <Route path="*" element={<LoginPage onLogin={handleLogin} />} />
                        )}
                        <Route path="/register" element={<RegistrationPage onRegister={handleRegister} />} />
                        <Route path="/information" element={<InformationPage user={currentUser} />} />
                        <Route path="/career" element={<CareerPage user={currentUser} />} />
                        <Route path="/chat" element={<ChatPage user={currentUser} />} />
                        <Route path="/settings" element={<SettingsPage user={currentUser} />} />
                    </Routes>
                    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
                        <BottomNavigation
                            value={value}
                            onChange={(event, newValue) => setValue(newValue)}
                            showLabels
                        >
                            <BottomNavigationAction label="My Page" value="/" icon={<PersonIcon />} component={Link} to="/" />
                            <BottomNavigationAction label="Information" value="/information" icon={<InfoIcon />} component={Link} to="/information" />
                            <BottomNavigationAction label="Career" value="/career" icon={<WorkIcon />} component={Link} to="/career" />
                            <BottomNavigationAction label="Chat" value="/chat" icon={<ChatIcon />} component={Link} to="/chat" />
                            <BottomNavigationAction label="Settings" value="/settings" icon={<SettingsIcon />} component={Link} to="/settings" />
                        </BottomNavigation>
                    </Paper>
                </div>
            </Router>
        </ThemeProvider>
    );
}

export default App;
