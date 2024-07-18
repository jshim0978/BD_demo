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
    // maxHeight: 800,  // Consider using 'vh' for responsive design
    overflowY: 'auto'
});

const StyledListItem = styled(ListItem)(({ theme }) => ({
    marginBottom: theme.spacing(2),
    padding: theme.spacing(2),
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[1]  // subtle shadow for depth
}));

function RelatedEducations({user}) {
    const [loading, setLoading] = useState(false);
    const [programsDisplayed, setProgramsDisplayed] = useState(false);



    const handleGeneratePrograms = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setProgramsDisplayed(true);
        }, 1500); // Simulate a 1.5-second loading time
    };

    return (
        <StyledBox>
            <Typography variant="h5" gutterBottom component="h1">
                AI 추천 교육
            </Typography>
            {!programsDisplayed && (
                <Box textAlign="center">
                    {/*<Typography variant="h5" gutterBottom>*/}
                    {/*    Discover Educational Programs*/}
                    {/*</Typography>*/}
                    <StyledButton
                        onClick={handleGeneratePrograms}
                        disabled={loading}
                        startIcon={loading ? <CircularProgress size={42}/> : <AiIcon style={{ fontSize: 42 }}/>}
                        sx={{width: '200px', height: '50px', fontSize: '1.5rem'}}
                    >
                        {loading ? 'Loading...' : "AI 검색"}
                    </StyledButton>
                </Box>
            )}
            {!loading && programsDisplayed && (
                <StyledList>
                    {user.educationPrograms.map((program, index) => (
                        <StyledListItem key={index} divider>
                            <Paper elevation={2} sx={{width:'100%', padding: 2 }}>
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
