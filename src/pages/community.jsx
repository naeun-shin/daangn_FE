import React from "react";
import CommunityList from "./community/CommunityList";
import { CommunityWrapper } from "./CommunityStyles";
// import CommunityCreate from "./community/CommunityCreate";
// import { NavLink } from "react-router-dom";

const Community = () => {
  return (
    <>
      <CommunityWrapper>
        <CommunityList />
        {/* 동네생활 글쓰기 버튼 */}
        {/* <NavLink to={<communityCreate />} /> */}
      </CommunityWrapper>
    </>
  );
};

export default Community;
