import React, {useEffect, useState} from 'react';
import { Box, Tab, Tabs } from '@mui/material';
import BetterRecruits from './BetterRecruits';
import RelatedEducations from './RelatedEducations';
import GovernmentalBenefits from './GovernmentalBenefits';

function InformationPage({user}) {
    const [selectedTab, setSelectedTab] = useState('better-recruits');
    const [username, setUsername] = useState('');



    useEffect(() => {
        const storedUsername = sessionStorage.getItem('username');
        if (storedUsername) {
            setUsername(storedUsername);
        }
        console.log("Component mounted.");
    }, []);

    console.log(user)


    const handleChange = (event, newValue) => {
        setSelectedTab(newValue);
    };

    return (
        <Box>
            <Tabs
                value={selectedTab}
                onChange={handleChange}
                aria-label="info tabs"
                variant="fullWidth"
                centered
            >
                <Tab label="채용" value="better-recruits" sx={{ fontSize: '1.4rem' }}  />
                <Tab label="교육" value="related-educations" sx={{ fontSize: '1.4rem' }}  />
                <Tab label="혜택" value="governmental-benefits" sx={{ fontSize: '1.4rem' }}  />
            </Tabs>
            {selectedTab === 'better-recruits' && <BetterRecruits user={user}/>}
            {selectedTab === 'related-educations' && <RelatedEducations user={user}/>}
            {selectedTab === 'governmental-benefits' && <GovernmentalBenefits user={user}/>}
        </Box>
    );
}

export default InformationPage;
