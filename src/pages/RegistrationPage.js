
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, TextField, Button, Typography, Grid, Paper, MenuItem, FormControl, InputLabel, Select, createTheme, ThemeProvider,FormHelperText, OutlinedInput, InputAdornment } from '@mui/material';
import { styled } from '@mui/system';

// Create a theme instance.
const theme = createTheme({
    palette: {
        primary: {
            main: '#1976d2',
        },
        error: {
            main: '#d32f2f',
        },
    },
    typography: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        h4: {
            fontWeight: 600,
        },
    },
});

const StyledBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '70vh',
    padding: theme.spacing(3),
    background: 'linear-gradient(to right, #f8f8f8, #e8e8e8)',
    '*': {
        boxSizing: 'border-box',
    }
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(4),
    maxWidth: 600,
    margin: `${theme.spacing(2)} auto`,
    borderRadius: 12,
    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.12)',
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
    marginBottom: 16,
    color: theme.palette.text.primary
}));

const StyledTextField = styled(TextField)({
    // border: 'none',
    // outline: 'none',
    // boxShadow: 'none',

});

function RegistrationPage({ onRegister }) {
    const [userInfo, setUserInfo] = useState({
        name: '',
        email: '',
        password: '',
        phone: '',
        address: ''
    });
    const [resume, setResume] = useState(null);
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserInfo(prev => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e) => {
        setResume(e.target.files[0]);
    };

    const validate = () => {
        let tempErrors = {};
        tempErrors.name = userInfo.name ? "" : "이름을 입력하세요.";
        tempErrors.email = (/^[^\s@]+@[^\s@]+\.[^\s@]+$/).test(userInfo.email) ? "" : "유효한 이메일을 입력하세요.";
        tempErrors.password = userInfo.password.length > 5 ? "" : "패스워드는 최소 6자리 이상이어야 합니다.";
        tempErrors.phone = (/^\d{10,11}$/).test(userInfo.phone) ? "" : "유효한 휴대폰 번호를 입력하세요.";
        tempErrors.address = userInfo.address ? "" : "거주지역을 선택하세요.";
        setErrors(tempErrors);
        return Object.values(tempErrors).every(x => x === "");
    };

    const handleRegister = () => {
        if (validate()) {
            const formData = new FormData();
            formData.append('name', userInfo.name);
            formData.append('email', userInfo.email);
            formData.append('password', userInfo.password);
            formData.append('phone', userInfo.phone);
            formData.append('address', userInfo.address);
            if (resume) {
                formData.append('resume', resume);
            }
            onRegister(formData);
            navigate('/'); // Redirect to login page or main page after registration
        }
    };

    return (
        <ThemeProvider theme={theme}>
            <StyledBox>
                <StyledPaper>
                    <StyledTypography variant="h4" gutterBottom>
                        회원가입
                    </StyledTypography>

                    <Grid container spacing={2}>
                        <Grid item xs={12}  >
                            <StyledTextField
                                label="이름"
                                variant="outlined"
                                name="name"
                                value={userInfo.name}
                                onChange={handleInputChange}
                                fullWidth
                                error={!!errors.name}
                                helperText={errors.name}
                            />

                        </Grid>
                        <Grid item xs={12}>
                            <StyledTextField
                                label="이메일"
                                variant="outlined"
                                name="email"
                                value={userInfo.email}
                                onChange={handleInputChange}
                                fullWidth
                                error={!!errors.email}
                                helperText={errors.email}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <StyledTextField
                                label="패스워드"
                                variant="outlined"
                                name="password"
                                type="password"
                                value={userInfo.password}
                                onChange={handleInputChange}
                                fullWidth
                                error={!!errors.password}
                                helperText={errors.password}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <StyledTextField
                                label="휴대폰"
                                variant="outlined"
                                name="phone"
                                value={userInfo.phone}
                                onChange={handleInputChange}
                                fullWidth
                                error={!!errors.phone}
                                helperText={errors.phone}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl fullWidth variant="outlined" error={!!errors.address}>
                                <InputLabel>거주지역</InputLabel>
                                <Select
                                    name="address"
                                    value={userInfo.address}
                                    onChange={handleInputChange}
                                    label="거주지역"
                                >
                                    <MenuItem value=""><em>선택하세요</em></MenuItem>
                                    <MenuItem value="Seoul">서울</MenuItem>
                                    <MenuItem value="Busan">부산</MenuItem>
                                    <MenuItem value="Incheon">인천</MenuItem>
                                    <MenuItem value="Daegu">대구</MenuItem>
                                    <MenuItem value="Gwangju">광주</MenuItem>
                                    <MenuItem value="Daejeon">대전</MenuItem>
                                    <MenuItem value="Ulsan">울산</MenuItem>
                                </Select>
                                {errors.address && <Typography variant="body2" color="error">{errors.address}</Typography>}
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <Button
                                variant="contained"
                                component="label"
                                fullWidth
                                sx={{ marginTop: 2, marginBottom: 2 }}
                            >
                                CV 첨부하기
                                <input
                                    type="file"
                                    hidden
                                    onChange={handleFileChange}
                                />
                            </Button>
                            {resume && (
                                <StyledTypography variant="body2" sx={{ mt: 1 }}>
                                    {resume.name}
                                </StyledTypography>
                            )}
                        </Grid>
                        <Grid item xs={12}>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={handleRegister}
                                fullWidth
                            >
                                가입하기
                            </Button>
                        </Grid>
                    </Grid>
                </StyledPaper>
            </StyledBox>
        </ThemeProvider>
    );
}

export default RegistrationPage;
