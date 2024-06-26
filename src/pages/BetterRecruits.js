import React, { useState } from 'react';
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
    maxHeight: 800,
    overflowY: 'auto'
});

const StyledListItem = styled(ListItem)(({ theme }) => ({
    marginBottom: theme.spacing(2),
    padding: theme.spacing(2),
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[1]
}));

const StyledChip = styled(Chip)(({ theme }) => ({
    marginRight: theme.spacing(0.5),
    marginTop: theme.spacing(0.5)
}));

function BetterRecruits() {
    const [loading, setLoading] = useState(false);
    const [jobsDisplayed, setJobsDisplayed] = useState(false);

    const jobOpenings = [
        {
            title: "Frontend Developer",
            company: "Tech Innovations Inc",
            location: "Seoul, South Korea",
            description: "Join our team to create cutting-edge frontend solutions using the latest web technologies. We’re looking for someone who is passionate about building seamless user experiences.",
            requirements: [
                "Proficient in React.js, HTML, CSS, JavaScript",
                "Experience with responsive design",
                "Familiar with version control tools like Git",
                "At least 2 years of professional experience"
            ],
            benefits: ["Health insurance", "Paid time off", "Work from home flexibility", "Annual bonuses"]
        },
        {
            title: "Project Manager",
            company: "Global Projects Ltd",
            location: "Busan, South Korea",
            description: "Manage large-scale projects from conception to completion. Your leadership will drive the team to meet deadlines and exceed expectations.",
            requirements: [
                "Strong understanding of Agile and Waterfall methodologies",
                "Excellent communication and leadership skills",
                "Ability to manage multiple projects simultaneously",
                "Minimum 5 years of project management experience"
            ],
            benefits: ["Company car", "Health insurance", "Performance bonuses", "Child care facilities"]
        },
        {
            title: "UX/UI Designer",
            company: "Creative Solutions",
            location: "Incheon, South Korea",
            description: "Design interfaces that solve user problems as intuitively as possible. You will be expected to deliver user-friendly, aesthetically pleasing designs.",
            requirements: [
                "Proficient in tools such as Sketch, Adobe XD, Figma",
                "Understanding of user behavior and interaction design",
                "Experience in creating wireframes, prototypes, storyboards",
                "At least 3 years of experience in UX/UI design"
            ],
            benefits: ["Remote work options", "Flexible hours", "Health benefits", "Employee wellness programs"]
        },
        {
            title: "Data Scientist",
            company: "Data Insights",
            location: "Seoul, South Korea",
            description: "Contribute to a data-driven approach to solve complex challenges. Use statistical analysis to derive insights and inform company strategy.",
            requirements: [
                "Strong expertise in Python and R",
                "Familiarity with SQL and NoSQL databases",
                "Proven experience in machine learning and predictive modeling",
                "Master’s degree in Data Science or related field preferred"
            ],
            benefits: ["Stock options", "Conference allowances", "Competitive health benefits", "Flexible work policies"]
        }
    ];

    const handleRecommendJobs = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setJobsDisplayed(true);
        }, 1500); // Simulate a 1.5-second loading time
    };

    return (
        <StyledBox>
            <Typography variant="h4" gutterBottom>
                Discover Job Openings Powered by AI
            </Typography>
            {!jobsDisplayed && (
                <StyledButton
                    onClick={handleRecommendJobs}
                    disabled={loading}
                    startIcon={loading ? <CircularProgress size={24}/> : <AiIcon/>}
                >
                    {loading ? 'Loading...' : "Recommend Job Openings with AI"}
                </StyledButton>
            )}
            {!loading && jobsDisplayed && (
                <StyledList>
                    {jobOpenings.map((job, index) => (
                        <StyledListItem key={index} divider>
                            <Paper elevation={2} sx={{ padding: 2 }}>
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
