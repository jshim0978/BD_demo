import React, { useState } from 'react';
import { Box, Tab, Tabs } from '@mui/material';
import BetterRecruits from './BetterRecruits';
import RelatedEducations from './RelatedEducations';
import GovernmentalBenefits from './GovernmentalBenefits';

function InformationPage() {
    const [selectedTab, setSelectedTab] = useState('better-recruits');

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
            {selectedTab === 'better-recruits' && <BetterRecruits />}
            {selectedTab === 'related-educations' && <RelatedEducations />}
            {selectedTab === 'governmental-benefits' && <GovernmentalBenefits />}
        </Box>
    );
}

export default InformationPage;
