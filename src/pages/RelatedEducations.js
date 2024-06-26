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
            title: "웹 애플리케이션 고급 소프트웨어 개발",
            institution: "Tech Innovators Academy",
            location: "온라인",
            duration: "6개월",
            description: "경험 많은 개발자를 위해 설계된 고급 과정으로, React, Node.js 및 Docker와 같은 최신 프레임워크와 기술을 사용하여 웹 애플리케이션 개발에 대한 이해를 심화시킵니다.",
            prerequisites: "최소 3년의 프로그래밍 경험",
            deadline: "2024년 12월 31일"
        },
        {
            title: "프로젝트 관리 전문가 (PMP)® 자격증 과정",
            institution: "Global Management Institute",
            location: "서울, 대한민국",
            duration: "4개월",
            description: "PMP 시험 준비를 위한 종합 교육으로, 글로벌 프로젝트 관리 산업에서 요구하는 새로운 트렌드, 최신 실무 및 핵심 역량을 다룹니다.",
            prerequisites: "학사 학위 및 4500시간의 프로젝트 리딩 경험",
            deadline: "2024년 9월 15일"
        },
        {
            title: "그래픽 디자인 디플로마",
            institution: "Creative Arts School",
            location: "부산, 대한민국",
            duration: "1년",
            description: "매력적인 시각적 커뮤니케이션을 만들기 위한 그래픽 디자인의 예술적 및 기술적 기술을 개발합니다. 이 프로그램은 타이포그래피와 색채 이론부터 디지털 디자인 기술까지 모든 것을 다룹니다.",
            prerequisites: "고등학교 졸업",
            deadline: "2024년 3월 1일"
        },
        {
            title: "데이터 과학 석사 과정",
            institution: "University of Data Insights",
            location: "온라인",
            duration: "2년",
            description: "이 석사 과정은 빅 데이터 문제를 해결하고 머신러닝 및 예측 분석을 사용하여 데이터를 실행 가능한 인사이트로 변환하는 데 필요한 기술을 갖추도록 합니다.",
            prerequisites: "관련 분야 학사 학위",
            deadline: "2024년 11월 20일"
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
                    {/*<Typography variant="h5" gutterBottom>*/}
                    {/*    Discover Educational Programs*/}
                    {/*</Typography>*/}
                    <StyledButton
                        onClick={handleGeneratePrograms}
                        disabled={loading}
                        startIcon={loading ? <CircularProgress size={24}/> : <AiIcon/>}
                    >
                        {loading ? 'Loading...' : "AI 검색"}
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
