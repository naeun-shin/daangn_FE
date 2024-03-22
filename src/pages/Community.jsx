import React from 'react';
import CommunityList from './community/CommunityList';
import { CommunityWrapper } from './CommunityStyles';

const Community = () => {
  return (
    <>
      <CommunityWrapper>
        <CommunityList />
      </CommunityWrapper>
    </>
  );
};

export default Community;
