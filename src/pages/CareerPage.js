import React, { useEffect, useState } from 'react';
import ReactFlow, { ReactFlowProvider, MiniMap, Controls, Background } from 'react-flow-renderer';
import { Box, Typography, Button, CircularProgress, Card, CardContent, Paper, List, ListItem } from '@mui/material';
import { SmartToy as AiIcon } from '@mui/icons-material';
import { styled } from '@mui/system';
import 'react-flow-renderer/dist/style.css';  // Styles for the nodes and edges
import 'react-flow-renderer/dist/theme-default.css';  // Default theme

// Styled components for enhanced visuals
const StyledBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '100px',
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

const nodeStyles = {
    background: '#FFF',
    color: '#333',
    border: '1px solid #ddd',
    borderRadius: '5px',
    padding: '10px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
};

const NODES = [
    { id: '1', data: { label: 'Liberal Arts Major' }, position: { x: 50, y: 50 }, type: 'input', style: { ...nodeStyles, background: '#FFCDD2' } },
    { id: '2', data: { label: 'Learn Basic Programming' }, position: { x: 250, y: 50 }, style: { ...nodeStyles, background: '#F8BBD0' } },
    { id: '3', data: { label: 'Web Developer' }, position: { x: 450, y: 50 }, style: { ...nodeStyles, background: '#E1BEE7' } },
    { id: '4', data: { label: 'Software Engineer' }, position: { x: 450, y: 200 }, style: { ...nodeStyles, background: '#D1C4E9' } },
    { id: '5', data: { label: 'Data Analyst' }, position: { x: 250, y: 200 }, style: { ...nodeStyles, background: '#C5CAE9' } },
    { id: '6', data: { label: 'Technical Writer' }, position: { x: 650, y: 50 }, style: { ...nodeStyles, background: '#BBDEFB' } },
    { id: '7', data: { label: 'IT Support Specialist' }, position: { x: 250, y: 350 }, style: { ...nodeStyles, background: '#B3E5FC' } },
    { id: '8', data: { label: 'Advanced Programming' }, position: { x: 250, y: 125 }, style: { ...nodeStyles, background: '#B2EBF2' } },
    { id: '9', data: { label: 'Senior Web Developer' }, position: { x: 650, y: 125 }, style: { ...nodeStyles, background: '#B2DFDB' } },
    { id: '10', data: { label: 'System Architect' }, position: { x: 650, y: 200 }, style: { ...nodeStyles, background: '#C8E6C9' } },
    { id: '11', data: { label: 'Project Manager' }, position: { x: 450, y: 350 }, style: { ...nodeStyles, background: '#DCEDC8' } },
    { id: '12', data: { label: 'UI/UX Designer' }, position: { x: 850, y: 50 }, style: { ...nodeStyles, background: '#F0F4C3' } },
];

const EDGES = [
    { id: 'e1-2', source: '1', target: '2', animated: true, type: 'smoothstep', style: { stroke: '#FF8A80' } },
    { id: 'e2-3', source: '2', target: '3', animated: true, type: 'smoothstep', style: { stroke: '#FF80AB' } },
    { id: 'e2-4', source: '2', target: '4', animated: true, type: 'smoothstep', style: { stroke: '#EA80FC' } },
    { id: 'e2-5', source: '2', target: '5', animated: true, type: 'smoothstep', style: { stroke: '#B388FF' } },
    { id: 'e2-6', source: '2', target: '6', animated: true, type: 'smoothstep', style: { stroke: '#8C9EFF' } },
    { id: 'e2-7', source: '2', target: '7', animated: true, type: 'smoothstep', style: { stroke: '#80D8FF' } },
    { id: 'e2-8', source: '2', target: '8', animated: true, type: 'smoothstep', style: { stroke: '#84FFFF' } },
    { id: 'e8-9', source: '8', target: '9', animated: true, type: 'smoothstep', style: { stroke: '#A7FFEB' } },
    { id: 'e9-10', source: '9', target: '10', animated: true, type: 'smoothstep', style: { stroke: '#B9F6CA' } },
    { id: 'e4-10', source: '4', target: '10', animated: true, type: 'smoothstep', style: { stroke: '#CCFF90' } },
    { id: 'e4-11', source: '4', target: '11', animated: true, type: 'smoothstep', style: { stroke: '#F4FF81' } },
    { id: 'e3-9', source: '3', target: '9', animated: true, type: 'smoothstep', style: { stroke: '#FFFF8D' } },
    { id: 'e6-12', source: '6', target: '12', animated: true, type: 'smoothstep', style: { stroke: '#FFE57F' } },
];

const CAREER_PATH_DETAILS = {
    "Liberal Arts Major": "폭넓은 지식 기반을 쌓는 단계.",
    "Learn Basic Programming": "Python, JavaScript, 또는 Java와 같은 기본 프로그래밍 기술을 습득하는 단계.",
    "Web Developer": "웹사이트의 프론트엔드 또는 백엔드 개발에 집중하는 단계.",
    "Software Engineer": "소프트웨어 애플리케이션을 설계, 개발 및 유지 관리하는 단계.",
    "Data Analyst": "데이터를 분석하여 정보에 기반한 비즈니스 결정을 내리는 단계.",
    "Technical Writer": "매뉴얼, 가이드 및 기타 문서를 작성하는 단계.",
    "IT Support Specialist": "기술 지원 및 문제 해결을 제공하는 단계.",
    "Advanced Programming": "복잡한 프로그래밍 개념에 대해 더 깊은 지식을 쌓는 단계.",
    "Senior Web Developer": "고급 기술로 웹 개발 프로젝트를 이끄는 단계.",
    "System Architect": "복잡한 IT 시스템을 설계하고 감독하는 단계.",
    "Project Manager": "프로젝트, 일정 및 팀을 효과적으로 관리하는 단계.",
    "UI/UX Designer": "애플리케이션의 사용자 인터페이스와 경험을 설계하는 단계."
};


const RECOMMENDED_PATH = [
    "Liberal Arts Major",
    "Learn Basic Programming",
    "Web Developer",
    "Senior Web Developer",
    "System Architect"
];

function CareerPage() {
    const [username, setUsername] = useState('');
    const [showChart, setShowChart] = useState(false);
    const [loading, setLoading] = useState(false);
    const [nodes, setNodes] = useState(NODES);
    const [edges, setEdges] = useState(EDGES);

    useEffect(() => {
        const storedUsername = sessionStorage.getItem('username');
        if (storedUsername) {
            setUsername(storedUsername);
        }
        console.log("Component mounted.");
    }, []);

    const handleGenerateClick = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setShowChart(true);
        }, 1500); // Simulate a 1.5-second loading time
    };

    return (
        <StyledBox>
            <Typography variant="h4" gutterBottom>
                {username}님의 커리어 패스 탐색
            </Typography>
            {/*<Typography variant="h6" gutterBottom>*/}
            {/*    IT 개발에 진출하려는 경우, 다음과 같은 잠재적인 경력 경로가 있습니다:*/}
            {/*</Typography>*/}
            <StyledButton
                onClick={handleGenerateClick}
                disabled={loading}
                startIcon={loading ? <CircularProgress size={24} /> : <AiIcon />}
            >
                {loading ? 'Loading...' : "AI 커리어 패스 생성"}
            </StyledButton>
            {/*{loading && (*/}
            {/*    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>*/}
            {/*        <CircularProgress size={80} />*/}
            {/*    </Box>*/}
            {/*)}*/}
            {showChart && (
                <ReactFlowProvider>
                    <div style={{
                        height: '500px',
                        width: '100%',
                        backgroundColor: '#fafafa',
                        border: '1px solid #ddd',
                        borderRadius: '8px',
                        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                        padding: '16px',
                        marginTop: '16px',
                        boxSizing: 'border-box'
                    }}>
                        <ReactFlow
                            nodes={nodes}
                            edges={edges}
                            nodesDraggable={true}
                            nodesConnectable={true}
                            paneMoveable={true}
                            onLoad={rfInstance => rfInstance.fitView()}  // Fits the elements into the view
                        >
                            <MiniMap
                                nodeColor={(node) => {
                                    switch (node.type) {
                                        case 'input': return '#FFCC00';
                                        default: return '#00FFCC';
                                    }
                                }}
                                nodeStrokeColor={(node) => {
                                    switch (node.type) {
                                        case 'input': return '#FF6600';
                                        default: return '#0066FF';
                                    }
                                }}
                                nodeBorderRadius={2}
                            />
                            <Controls />
                            <Background color="#aaa" gap={16} />
                        </ReactFlow>
                    </div>
                    <Box sx={{ mt: 4 }}>
                        <Typography variant="h6" gutterBottom>
                            커리어 패스 상세 설명
                        </Typography>
                        <StyledList>
                            {Object.entries(CAREER_PATH_DETAILS).map(([key, value]) => (
                                <StyledListItem key={key} divider>
                                    <Paper elevation={2} sx={{ padding: 2 }}>
                                        <Typography variant="subtitle1" fontWeight="bold">{key}</Typography>
                                        <Typography variant="body2">{value}</Typography>
                                    </Paper>
                                </StyledListItem>
                            ))}
                        </StyledList>
                        <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
                            AI 추천 커리어 패스
                        </Typography>
                        <Typography variant="body1">
                            {RECOMMENDED_PATH.join(" ➡️ ")}
                        </Typography>
                    </Box>
                </ReactFlowProvider>
            )}
        </StyledBox>
    );
}

export default CareerPage;
