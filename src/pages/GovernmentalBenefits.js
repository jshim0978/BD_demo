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
    maxHeight: 800,
    marginTop: theme.spacing(2)
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

function GovernmentalBenefits() {
    const [loading, setLoading] = useState(false);
    const [benefitsDisplayed, setBenefitsDisplayed] = useState(false);

    const benefitsData = [
        {
            title: "Startup Growth Booster Program",
            description: "Provides mentoring, funding, and resources to support startup companies aiming to expand their business operations. This program includes workshops, one-on-one mentorship, and financial grants up to $50,000.",
            eligibility: "Startups registered for less than five years.",
            applicationProcess: "Submit an online application with a detailed business plan.",
            deadline: "December 31, 2024"
        },
        {
            title: "Youth Job Creation Support",
            description: "Aims to create more job opportunities for young adults through partnerships with various industries and businesses. The program offers wage subsidies for employers and training programs for job seekers.",
            eligibility: "Youth aged 18-30 who are currently unemployed.",
            applicationProcess: "Register through the Youth Employment Portal and attend an orientation session.",
            deadline: "September 15, 2024"
        },
        {
            title: "Small Business Technology Grant",
            description: "Offers financial assistance for small businesses to adopt new technologies and improve their operational efficiency. Grants can cover up to 75% of technology upgrade costs, with a maximum of $20,000.",
            eligibility: "Small businesses with fewer than 50 employees.",
            applicationProcess: "Complete an online application and provide a detailed project plan.",
            deadline: "March 1, 2024"
        },
        {
            title: "Green Energy Incentive",
            description: "Encourages businesses to reduce their carbon footprint by providing subsidies for adopting green energy solutions. Eligible projects include solar panel installations, wind turbines, and energy-efficient upgrades.",
            eligibility: "Businesses implementing or utilizing renewable energy sources.",
            applicationProcess: "Submit a proposal outlining the green energy project and its expected impact.",
            deadline: "November 20, 2024"
        }
        // Additional benefits data...
    ];

    const handleGenerateBenefits = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setBenefitsDisplayed(true);
        }, 1500); // Simulate a 1.5-second loading time
    };

    return (
        <StyledBox>
            <Typography variant="h4" gutterBottom component="h1">
                AI 추천 정부 혜택
            </Typography>
            {!benefitsDisplayed && (
                <Box textAlign="center">
                    <Typography variant="h5" gutterBottom>
                        Discover Governmental Benefits
                    </Typography>
                    <StyledButton
                        onClick={handleGenerateBenefits}
                        disabled={loading}
                        startIcon={loading ? <CircularProgress size={24}/> : <AiIcon/>}
                    >
                        {loading ? 'Loading...' : "Generate with AI"}
                    </StyledButton>
                </Box>
            )}
            {!loading && benefitsDisplayed && (
                <StyledList>
                    {benefitsData.map((benefit, index) => (
                        <StyledListItem key={index} divider>
                            <Paper elevation={1} sx={{ padding: 2 }}>
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
