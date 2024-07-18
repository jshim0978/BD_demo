import React, {useEffect, useState} from 'react';
import { Box, Typography, List, ListItem, Divider, Chip, Button, CircularProgress, Paper } from '@mui/material';
import { SmartToy as AiIcon } from '@mui/icons-material';
import { styled } from '@mui/system';

// Styled components for enhanced visuals
const StyledBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(2),
    height: '100%',  // Changed to 100% for full height utilization
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
    // maxHeight: 800,
    overflowY: 'auto'
});

const StyledListItem = styled(ListItem)(({ theme }) => ({
    marginBottom: theme.spacing(2),
    padding: theme.spacing(2),
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[1],
    width: '100%',
}));

const StyledChip = styled(Chip)(({ theme }) => ({
    marginRight: theme.spacing(0.5),
    marginTop: theme.spacing(0.5)
}));

function BetterRecruits({user} ) {
    const [username, setUsername] = useState('');
    const [loading, setLoading] = useState(false);
    const [jobsDisplayed, setJobsDisplayed] = useState(false);
    console.log(user)


    const handleRecommendJobs = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setJobsDisplayed(true);
        }, 1500); // Simulate a 1.5-second loading time
    };

    return (
        <StyledBox>
            <Typography variant="h5" gutterBottom component="h1">
                AI 추천 채용 정보
            </Typography>
            {/*<Typography variant="h4" gutterBottom>*/}
            {/*    Discover Job Openings Powered by AI*/}
            {/*</Typography>*/}
            {!jobsDisplayed && (
                <StyledButton
                    onClick={handleRecommendJobs}
                    disabled={loading}
                    startIcon={loading ? <CircularProgress size={42}/> : <AiIcon style={{ fontSize: 42 }}/>}
                    sx={{width: '200px', height: '50px', fontSize: '1.5rem'}}
                >
                    {loading ? 'Loading...' : "AI 검색"}
                </StyledButton>
            )}
            {!loading && jobsDisplayed && (
                <StyledList>
                    {user.jobOpenings.map((job, index) => (
                        <StyledListItem key={index} divider>
                            <Paper elevation={3} sx={{width:'100%', padding: 2 }}>
                                <Typography variant="h6">{job.title} - {job.company}</Typography>
                                <Typography variant="subtitle1" color="text.secondary">{job.location}</Typography>
                                <Typography variant="body1">{job.description}</Typography>
                                <Typography variant="body2">Requirements:</Typography>
                                {job.requirements.map((req, idx) => (
                                    <StyledChip key={idx} label={req} variant="outlined"/>
                                ))}
                                <Typography variant="body2" sx={{ mt: 2 }}>Benefits:</Typography>
                                {job.benefits.map((ben, idx) => (
                                    <StyledChip key={idx} label={ben} variant="outlined" color="primary"/>
                                ))}
                            </Paper>
                        </StyledListItem>
                    ))}
                </StyledList>
            )}
        </StyledBox>
    );
}

export default BetterRecruits;
