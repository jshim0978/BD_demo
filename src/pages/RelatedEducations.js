import React, { useState } from 'react';
import { Box, Typography, Button, CircularProgress, List, ListItem, Divider, Paper } from '@mui/material';
import { SmartToy as AiIcon } from '@mui/icons-material';
import { styled } from '@mui/system';

const StyledBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',  // Changed to 100% for full height utilization
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

const StyledList = styled(List)({
    width: '100%',
    maxHeight: 800,  // Consider using 'vh' for responsive design
    overflowY: 'auto'
});

const StyledListItem = styled(ListItem)(({ theme }) => ({
    marginBottom: theme.spacing(2),
    padding: theme.spacing(2),
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[1]  // subtle shadow for depth
}));

function RelatedEducations() {
    const [loading, setLoading] = useState(false);
    const [programsDisplayed, setProgramsDisplayed] = useState(false);

    const educationPrograms = [
        {
            title: "Advanced Software Development in Web Applications",
            institution: "Tech Innovators Academy",
            location: "Online",
            duration: "6 months",
            description: "An advanced course designed for experienced developers to deepen their understanding of web application development using modern frameworks and technologies such as React, Node.js, and Docker.",
            prerequisites: "Minimum 3 years of programming experience",
            deadline: "December 31, 2024"
        },
        {
            title: "Project Management Professional (PMP)® Certification Training",
            institution: "Global Management Institute",
            location: "Seoul, South Korea",
            duration: "4 months",
            description: "Prepare for the PMP exam with our comprehensive training that covers new trends, emerging practices, and core competencies required by the global project management industry.",
            prerequisites: "Bachelor’s degree and 4500 hours leading projects",
            deadline: "September 15, 2024"
        },
        {
            title: "Diploma in Graphic Design",
            institution: "Creative Arts School",
            location: "Busan, South Korea",
            duration: "1 year",
            description: "Develop your artistic and technical skills in graphic design to create captivating visual communications. This program covers everything from typography and color theory to digital design techniques.",
            prerequisites: "High school diploma",
            deadline: "March 1, 2024"
        },
        {
            title: "Master’s in Data Science",
            institution: "University of Data Insights",
            location: "Online",
            duration: "2 years",
            description: "This master's program will equip you with the necessary skills to tackle big data challenges and transform data into actionable insights using machine learning and predictive analytics.",
            prerequisites: "Bachelor's degree in related field",
            deadline: "November 20, 2024"
        }
    ];


    const handleGeneratePrograms = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setProgramsDisplayed(true);
        }, 1500); // Simulate a 1.5-second loading time
    };

    return (
        <StyledBox>
            <Typography variant="h4" gutterBottom component="h1">
                AI 추천 교육
            </Typography>
            {!programsDisplayed && (
                <Box textAlign="center">
                    <Typography variant="h5" gutterBottom>
                        Discover Educational Programs
                    </Typography>
                    <StyledButton
                        onClick={handleGeneratePrograms}
                        disabled={loading}
                        startIcon={loading ? <CircularProgress size={24}/> : <AiIcon/>}
                    >
                        {loading ? 'Loading...' : "Generate with AI"}
                    </StyledButton>
                </Box>
            )}
            {!loading && programsDisplayed && (
                <StyledList>
                    {educationPrograms.map((program, index) => (
                        <StyledListItem key={index} divider>
                            <Paper elevation={2} sx={{ padding: 2 }}>
                                <Typography variant="h6">{program.title} - {program.institution}</Typography>
                                <Typography variant="subtitle1" color="text.secondary">
                                    {`${program.location} - ${program.duration}`}
                                </Typography>
                                <Typography variant="body1">{program.description}</Typography>
                                <Typography variant="body2">Prerequisites: {program.prerequisites}</Typography>
                                <Typography variant="body2">Application Deadline: {program.deadline}</Typography>
                            </Paper>
                        </StyledListItem>
                    ))}
                </StyledList>
            )}
        </StyledBox>
    );
}

export default RelatedEducations;
