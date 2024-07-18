import React, { useEffect, useState } from 'react';
import ReactFlow, { ReactFlowProvider, Controls, Background } from 'react-flow-renderer';
import { Box, Typography, Button, CircularProgress, Paper, List, ListItem } from '@mui/material';
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
    backgroundColor: theme.palette.secondary.light,
    '&:hover': {
        backgroundColor: theme.palette.secondary.dark,
        transform: 'translateY(-2px)',
        boxShadow: theme.shadows[4]
    }
}));

const StyledList = styled(List)({
    width: '100%',
    overflowY: 'auto'
});

const StyledListItem = styled(ListItem)(({ theme }) => ({
    marginBottom: theme.spacing(2),
    padding: theme.spacing(2),
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[1],
    width: '100%'
}));

function CareerPage({ user }) {
    const [username, setUsername] = useState('');
    const [showChart, setShowChart] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const storedUsername = sessionStorage.getItem('username');
        if (storedUsername) {
            setUsername(storedUsername);
        }
        console.log("Component mounted.");
    }, []);

    console.log(user)

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
            <StyledButton
                onClick={handleGenerateClick}
                disabled={loading}
                startIcon={loading ? <CircularProgress size={42}/> : <AiIcon style={{ fontSize: 42 }}/>}
                sx={{width: '400px', height: '80px', fontSize: '1.5rem'}}
            >
                {loading ? 'Loading...' : "AI 커리어 패스 생성"}
            </StyledButton>
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
                            nodes={user.NODES}
                            edges={user.EDGES}
                            nodesDraggable={true}
                            nodesConnectable={true}
                            paneMoveable={true}
                            onLoad={rfInstance => rfInstance.fitView()}  // Fits the elements into the view
                        >
                            <Controls />
                            <Background color="#aaa" gap={16} />
                        </ReactFlow>
                    </div>
                    <Box sx={{ mt: 4, width:'60%' }}>
                        <Typography variant="h6" gutterBottom>
                            커리어 패스 상세 설명
                        </Typography>
                        <StyledList>
                            {Object.entries(user.CAREER_PATH_DETAILS).map(([key, value]) => (
                                <StyledListItem key={key} divider>
                                    <Paper elevation={2} sx={{ width:'100%', padding: 2 }}>
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
                            {user.RECOMMENDED_PATH.join(" ➡️ ")}
                        </Typography>
                    </Box>
                </ReactFlowProvider>
            )}
        </StyledBox>
    );
}

export default CareerPage;
