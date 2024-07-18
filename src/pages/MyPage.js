import React, { useState } from 'react';
import { Typography, Paper, Box, Grid, Divider, Link, Chip, Avatar, Dialog, DialogTitle, DialogContent } from '@mui/material';
import { Email, Phone, LinkedIn, GitHub } from '@mui/icons-material';
import { styled } from '@mui/system';

const StyledBox = styled(Box)({
    padding: 24,
    backgroundColor: '#f7f7f7',
    margin: 'auto',
    marginTop: '20px',
    marginBottom: '120px',
    maxWidth: '1500px',
    overflowY: 'auto',
    // height: 'calc(100vh - 118px)',
    boxShadow: '0 10px 20px rgba(0,0,0,0.12)',
    borderRadius: 8
});

const StyledPaper = styled(Paper)({
    padding: 16,
    marginBottom: 16,
    borderRadius: 8,
    boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
});

const StyledTypography = styled(Typography)(({ theme }) => ({
    marginBottom: 16,
    color: theme.palette.text.primary
}));

const StyledDivider = styled(Divider)(({ theme }) => ({
    margin: '16px 0',
}));

const StyledChip = styled(Chip)({
    marginRight: 8,
    marginBottom: 8
});

const StyledAvatar = styled(Avatar)({
    width: 80,
    height: 80,
    marginRight: 16
});

const StyledLink = styled(Link)({
    display: 'flex',
    alignItems: 'center',
    color: '#0073b1',
    textDecoration: 'none',
    '&:hover': {
        textDecoration: 'underline'
    },
    marginRight: 16
});

const IconSpan = styled('span')({
    marginLeft: 4,
    fontSize: '1.2rem'
});

function MyPage({ user }) {
    const [open, setOpen] = useState(false);
    const [modalUrl, setModalUrl] = useState('');

    const handleClickOpen = (url) => {
        setModalUrl(url);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setModalUrl('');
    };

    if (!user) return <StyledBox sx={{ p: 3 }}>No User Data Available</StyledBox>;

    return (
        <StyledBox>
            <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                    <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
                        <StyledAvatar src={user.image} />
                        <Box>
                            <StyledTypography variant="h4" component="h1">{user.name}</StyledTypography>
                            <Typography variant="h6" color="text.secondary">{user.title}</Typography>
                        </Box>
                    </Box>
                    <StyledTypography variant="body2">{user.contact.email} <Email fontSize="small" /></StyledTypography>
                    <StyledTypography variant="body2">{user.contact.phone} <Phone fontSize="small" /></StyledTypography>
                    <StyledTypography variant="body2">Living in {user.contact.address} </StyledTypography>
                    {user.socialMedia.linkedIn && (
                        <StyledLink href={user.socialMedia.linkedIn} target="_blank">
                            LinkedIn <LinkedIn fontSize="small" />
                        </StyledLink>
                    )}
                    {user.socialMedia.github && (
                        <StyledLink href={user.socialMedia.github} target="_blank">
                            GitHub <GitHub fontSize="small" />
                        </StyledLink>
                    )}
                </Grid>
                <Grid item xs={12} md={8}>
                    <StyledTypography variant="body1" paragraph>{user.summary}</StyledTypography>
                    <StyledDivider sx={{bgcolor: '#1976d2', borderBottomWidth: 2}}/>
                    <StyledTypography variant="h6">특기</StyledTypography>
                    {user.skills.map((skill, index) => (
                        <StyledChip key={index} label={skill} variant="outlined" />
                    ))}
                    <StyledDivider sx={{bgcolor: '#1976d2', borderBottomWidth: 2}}/>
                    <StyledTypography variant="h6">언어</StyledTypography>
                    {user.languages.map((language, index) => (
                        <StyledChip key={index} label={language} variant="outlined" />
                    ))}
                    <StyledDivider sx={{bgcolor: '#1976d2', borderBottomWidth: 2}}/>
                    <StyledTypography variant="h6">자격증</StyledTypography>
                    {user.certifications.map((certification, index) => (
                        <StyledTypography key={index} variant="body2">{certification}</StyledTypography>
                    ))}
                </Grid>
                
                <Grid item xs={12}>
                <StyledDivider sx={{bgcolor: '#1976d2', borderBottomWidth: 2}}/>
                    <StyledTypography variant="h6">경력사항</StyledTypography>
                    {user.experiences.map((exp, index) => (
                        <StyledPaper key={index}>
                            <StyledTypography variant="h6" component="h3">{exp.role}</StyledTypography>
                            <StyledTypography color="text.secondary">{exp.company} - {exp.period}</StyledTypography>
                            <StyledTypography variant="body2">{exp.details}</StyledTypography>
                        </StyledPaper>
                    ))}
                </Grid>
                <Grid item xs={12}>
                <StyledDivider sx={{bgcolor: '#1976d2', borderBottomWidth: 2}}/>
                    <StyledTypography variant="h6">교육</StyledTypography>
                    {user.education.map((edu, index) => (
                        <StyledPaper key={index}>
                            <StyledTypography variant="h6" component="h3">{edu.degree}</StyledTypography>
                            <StyledTypography color="text.secondary">{edu.school} - {edu.year}</StyledTypography>
                        </StyledPaper>
                    ))}
                </Grid>
                <Grid item xs={12}>
                <StyledDivider sx={{bgcolor: '#1976d2', borderBottomWidth: 2}}/>
                    <StyledTypography variant="h6">프로젝트</StyledTypography>
                    {user.projects.map((project, index) => (
                        <StyledPaper key={index}>
                            <StyledTypography variant="h6" component="h3">{project.title}</StyledTypography>
                            <StyledTypography variant="body2">{project.description}</StyledTypography>
                        </StyledPaper>
                    ))}
                </Grid>
                <Grid item xs={12}>
                <StyledDivider sx={{bgcolor: '#1976d2', borderBottomWidth: 2}}/>
                    <StyledTypography variant="h6">출간물</StyledTypography>
                    {user.publications && user.publications.map((publication, index) => (
                        <StyledPaper key={index}>
                            <StyledTypography variant="h6" component="h3">{publication.title}</StyledTypography>
                            <StyledTypography variant="body2">{publication.publisher} - {publication.year}</StyledTypography>
                        </StyledPaper>
                    ))}
                </Grid>
                <Grid item xs={12}>
                <StyledDivider sx={{bgcolor: '#1976d2', borderBottomWidth: 2}}/>
                    <StyledTypography variant="h6">받고 있는 혜택</StyledTypography>
                    <Grid container spacing={2}>
                        {user.benefits && user.benefits.map((benefit, index) => (
                            <Grid item xs={12} md={4} key={index}>
                                <StyledPaper>
                                    <StyledTypography variant="h6">{benefit.name}</StyledTypography>
                                    <StyledTypography variant="body2">{benefit.description}</StyledTypography>
                                    <StyledLink component="button" onClick={() => handleClickOpen(benefit.url)}>
                                        Learn More
                                    </StyledLink>
                                </StyledPaper>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
            <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
                <DialogTitle>Benefit Information</DialogTitle>
                <DialogContent>
                    <iframe src={modalUrl} width="100%" height="500px" title="Benefit Information" />
                </DialogContent>
            </Dialog>
        </StyledBox>
    );
}

export default MyPage;
