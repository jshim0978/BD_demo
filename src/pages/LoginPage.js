import React, { useState, useEffect } from 'react';
import { useNavigate, Link as RouterLink } from 'react-router-dom';
import { Box, TextField, Button, Typography, Link, FormControlLabel, Checkbox, InputAdornment, IconButton } from '@mui/material';
import userProfiles from '../userProfiles';  // Import the user profiles data
import loginImage from '../assets/개인회원.PNG';

import { CheckBox, Image } from '@mui/icons-material';

function LoginPage({ onLogin }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        // Retrieve username from sessionStorage if it exists
        const storedUsername = sessionStorage.getItem('username');
        const storedPassword = sessionStorage.getItem('password');
        if (storedUsername && storedPassword) {
            onLogin(storedUsername, storedPassword);
            navigate('/'); // Navigate to the main page or profile page if already logged in
        }
    }, [navigate, onLogin]);

    const handleLogin = () => {
        const userProfile = userProfiles.find(
            user => user.name === username && user.password === password
        );
        onLogin(username, password);
        sessionStorage.setItem('username', username); // Save username to sessionStorage
        sessionStorage.setItem('password', password); // Save password to sessionStorage
        sessionStorage.setItem('userProfile', JSON.stringify(userProfile));  // Save user profile to sessionStorage

        navigate('/'); // Navigate to the main page or profile page after login
    };

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '60vh',
                padding: 3
            }}
        >
            <Typography variant="h2" sx={{marginTop:'200px'}} gutterBottom>
                M2Z2
            </Typography>
            <Typography variant="h4" gutterBottom>
                생성형 AI 기반 
            </Typography>
            <Typography variant="h4" gutterBottom>
                커리어 관리 비서 서비스
            </Typography>

            <br/>

            <div className="container">
                <img src={loginImage} alt={'imageError'} style={{width:'300px'}}/>
            </div>
            <br/>
            <TextField
                label="아이디"
                variant="outlined"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                sx={{width: '300px', marginBottom: 2}}
            />
            <TextField
                label="비밀번호"
                variant="outlined"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                sx={{width: '300px', marginBottom: 2}}
                endAdornment={
                    <InputAdornment position="end">
                        {/* <IconButton
                            aria-label="toggle password visibility"
                            edge="end"
                        >
                        </IconButton> */}
                    </InputAdornment>
                }
            />
            <FormControlLabel control={<Checkbox />} label="자동 로그인" />
            <Button variant="contained" onClick={handleLogin} sx={{width:'300px', marginBottom: 2}}>
                로그인
            </Button>
            <Typography variant="body2">
                <Link component={RouterLink} to="/register" underline="hover">
                    아이디 찾기
                </Link>
                /
                <Link component={RouterLink} to="/register" underline="hover">
                    비밀번호 찾기
                </Link>
            </Typography>
            <br/>
            <Typography variant="body2">
                계정이 없으시다면 {' '}
                <Link component={RouterLink} to="/register" underline="hover">
                    여기서 계정을 생성해주세요.
                </Link>
            </Typography>

            <br/>
            <br/>
            <br/>
            <br/>
            <Typography variant="h5" gutterBottom>
                고용노동 
            </Typography>
            <Typography variant="h5" gutterBottom>
                공공데이터 활용 공모전
            </Typography>
        </Box>
    );
}

export default LoginPage;
