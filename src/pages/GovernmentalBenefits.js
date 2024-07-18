import React, { useState } from 'react';
import { Box, Typography, Button, CircularProgress, List, ListItem, Divider, Paper } from '@mui/material';
import { SmartToy as AiIcon } from '@mui/icons-material';
import { styled } from '@mui/system';

const StyledBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(2),
    minHeight: '80vh',
    backgroundColor: theme.palette.background.default
}));

const StyledList = styled(List)(({ theme }) => ({
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    overflowY: 'auto',
    // maxHeight: 800,
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(5)
}));

const StyledListItem = styled(ListItem)(({ theme }) => ({
    marginBottom: theme.spacing(2),
    '&:last-child': {
        marginBottom: 0
    }
}));

const StyledButton = styled(Button)(({ theme }) => ({
    marginTop: theme.spacing(2),
    backgroundColor: theme.palette.secondary.main,
    '&:hover': {
        backgroundColor: theme.palette.secondary.dark,
        transform: 'translateY(-2px)',
        boxShadow: '0 4px 20px 0 rgba(0,0,0,0.12)'
    }
}));

function GovernmentalBenefits({user}) {
    const [loading, setLoading] = useState(false);
    const [benefitsDisplayed, setBenefitsDisplayed] = useState();


    const handleGenerateBenefits = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setBenefitsDisplayed(true);
        }, 1500); // Simulate a 1.5-second loading time
    };

    return (
        <StyledBox>
            <Typography variant="h5" gutterBottom component="h1">
                AI 추천 정부 혜택
            </Typography>
            {!benefitsDisplayed && (
                <Box textAlign="center">
                    {/*<Typography variant="h5" gutterBottom>*/}
                    {/*    Discover Governmental Benefits*/}
                    {/*</Typography>*/}
                    <StyledButton
                        onClick={handleGenerateBenefits}
                        disabled={loading}
                        startIcon={loading ? <CircularProgress size={42}/> : <AiIcon style={{ fontSize: 42 }}/>}
                        sx={{width: '200px', height: '50px', fontSize: '1.5rem'}}
                    >
                        {loading ? 'Loading...' : "AI 검색"}
                    </StyledButton>
                </Box>
            )}
            {!loading && benefitsDisplayed && (
                <StyledList>
                    {user.benefitsData.map((benefit, index) => (
                        <StyledListItem key={index} divider>
                            <Paper elevation={1} sx={{width:'100%', padding: 2 }}>
                                <Typography variant="h6">{benefit.title}</Typography>
                                <Typography variant="body1" sx={{ mt: 1 }}>{benefit.description}</Typography>
                                <Typography variant="body2" sx={{ mt: 1 }}>Eligibility: {benefit.eligibility}</Typography>
                                <Typography variant="body2" sx={{ mt: 1 }}>Application Process: {benefit.applicationProcess}</Typography>
                                <Typography variant="body2" sx={{ mt: 1 }}>Application Deadline: {benefit.deadline}</Typography>
                            </Paper>
                        </StyledListItem>
                    ))}
                </StyledList>
            )}
        </StyledBox>
    );
}

export default GovernmentalBenefits;
