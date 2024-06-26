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
            title: "스타트업 성장 부스터 프로그램",
            description: "스타트업 기업이 사업 운영을 확장할 수 있도록 멘토링, 자금 및 자원을 제공합니다. 이 프로그램에는 워크숍, 일대일 멘토링, 최대 $50,000의 재정 보조금이 포함됩니다.",
            eligibility: "설립된 지 5년 미만의 스타트업.",
            applicationProcess: "자세한 사업 계획서를 포함한 온라인 신청서를 제출하십시오.",
            deadline: "2024년 12월 31일"
        },
        {
            title: "청년 일자리 창출 지원",
            description: "다양한 산업 및 비즈니스와의 협력을 통해 청년들에게 더 많은 일자리 기회를 창출하는 것을 목표로 합니다. 이 프로그램은 고용주에게 임금 보조금과 구직자에게 훈련 프로그램을 제공합니다.",
            eligibility: "현재 실직 상태인 18-30세의 청년.",
            applicationProcess: "청년 고용 포털을 통해 등록하고 오리엔테이션 세션에 참석하십시오.",
            deadline: "2024년 9월 15일"
        },
        {
            title: "소규모 비즈니스 기술 보조금",
            description: "소규모 비즈니스가 새로운 기술을 채택하고 운영 효율성을 개선할 수 있도록 재정 지원을 제공합니다. 보조금은 기술 업그레이드 비용의 최대 75%를 지원하며, 최대 $20,000까지 지원됩니다.",
            eligibility: "직원 수가 50명 미만인 소규모 비즈니스.",
            applicationProcess: "온라인 신청서를 작성하고 자세한 프로젝트 계획서를 제출하십시오.",
            deadline: "2024년 3월 1일"
        },
        {
            title: "녹색 에너지 인센티브",
            description: "기업이 탄소 배출량을 줄이도록 장려하기 위해 녹색 에너지 솔루션을 채택하는 데 보조금을 제공합니다. 해당 프로젝트에는 태양광 패널 설치, 풍력 터빈, 에너지 효율적인 업그레이드 등이 포함됩니다.",
            eligibility: "재생 가능 에너지원을 구현하거나 사용하는 기업.",
            applicationProcess: "녹색 에너지 프로젝트 및 예상 효과를 설명하는 제안서를 제출하십시오.",
            deadline: "2024년 11월 20일"
        }
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
                    {/*<Typography variant="h5" gutterBottom>*/}
                    {/*    Discover Governmental Benefits*/}
                    {/*</Typography>*/}
                    <StyledButton
                        onClick={handleGenerateBenefits}
                        disabled={loading}
                        startIcon={loading ? <CircularProgress size={24}/> : <AiIcon/>}
                    >
                        {loading ? 'Loading...' : "AI 검색"}
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
