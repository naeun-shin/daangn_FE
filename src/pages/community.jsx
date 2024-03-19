import React from "react";
import CommunityList from "./community/CommunityList";
// import CommunityCreate from "./community/CommunityCreate";
// import { NavLink } from "react-router-dom";

const Community = () => {
  return (
    <>
      <CommunityList />
      {/* 동네생활 글쓰기 버튼 */}
      {/* <NavLink to={<communityCreate />} /> */}
    </>
  );
};

export default Community;
