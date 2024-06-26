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
            title: "프론트엔드 개발자",
            company: "Tech Innovations Inc",
            location: "서울, 대한민국",
            description: "최신 웹 기술을 사용하여 최첨단 프론트엔드 솔루션을 개발하는 팀에 합류하세요. 우리는 원활한 사용자 경험을 구축하는 데 열정을 가진 사람을 찾고 있습니다.",
            requirements: [
                "React.js, HTML, CSS, JavaScript에 능숙",
                "반응형 디자인 경험",
                "Git과 같은 버전 관리 도구에 익숙",
                "최소 2년의 전문 경력"
            ],
            benefits: ["건강 보험", "유급 휴가", "재택 근무 가능", "연간 보너스"]
        },
        {
            title: "프로젝트 매니저",
            company: "Global Projects Ltd",
            location: "부산, 대한민국",
            description: "대규모 프로젝트를 구상부터 완료까지 관리합니다. 당신의 리더십은 팀이 기한을 준수하고 기대를 초과 달성할 수 있도록 이끌 것입니다.",
            requirements: [
                "Agile 및 Waterfall 방법론에 대한 강한 이해",
                "탁월한 의사 소통 및 리더십 능력",
                "여러 프로젝트를 동시에 관리할 수 있는 능력",
                "최소 5년의 프로젝트 관리 경험"
            ],
            benefits: ["회사 차량", "건강 보험", "성과 보너스", "어린이 돌봄 시설"]
        },
        {
            title: "UX/UI 디자이너",
            company: "Creative Solutions",
            location: "인천, 대한민국",
            description: "사용자 문제를 직관적으로 해결하는 인터페이스를 디자인합니다. 사용자가 친숙하고 미적으로 만족할 수 있는 디자인을 제공하는 것이 기대됩니다.",
            requirements: [
                "Sketch, Adobe XD, Figma 등의 도구에 능숙",
                "사용자 행동 및 상호작용 디자인에 대한 이해",
                "와이어프레임, 프로토타입, 스토리보드 작성 경험",
                "최소 3년의 UX/UI 디자인 경험"
            ],
            benefits: ["원격 근무 옵션", "유연한 근무 시간", "건강 혜택", "직원 웰빙 프로그램"]
        },
        {
            title: "데이터 사이언티스트",
            company: "Data Insights",
            location: "서울, 대한민국",
            description: "복잡한 문제를 해결하기 위한 데이터 중심 접근 방식을 기여합니다. 통계 분석을 사용하여 통찰을 도출하고 회사 전략에 정보를 제공합니다.",
            requirements: [
                "Python 및 R에 대한 강한 전문성",
                "SQL 및 NoSQL 데이터베이스에 익숙",
                "기계 학습 및 예측 모델링 경험",
                "데이터 과학 또는 관련 분야의 석사 학위 우대"
            ],
            benefits: ["주식 옵션", "회의 수당", "경쟁력 있는 건강 혜택", "유연한 근무 정책"]
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
            <Typography variant="h4" gutterBottom component="h1">
                AI 추천 채용 정보
            </Typography>
            {/*<Typography variant="h4" gutterBottom>*/}
            {/*    Discover Job Openings Powered by AI*/}
            {/*</Typography>*/}
            {!jobsDisplayed && (
                <StyledButton
                    onClick={handleRecommendJobs}
                    disabled={loading}
                    startIcon={loading ? <CircularProgress size={24}/> : <AiIcon/>}
                >
                    {loading ? 'Loading...' : "AI 검색"}
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
