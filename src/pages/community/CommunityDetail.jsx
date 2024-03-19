import React from "react";
import {
  CommunityDetailBox,
  CommumnityDetailHeaderSub,
  UserImage,
  UserName,
  Container,
  GoBack,
  CommunityDetailCnt,
  CommunityDetailTitle,
  CommunityDetailContent,
  CommunityDetailCommentHeader,
  CommunityDetailFirstCommentBox,
  CommunityDetailFirstComment,
  CommunityDetailSecondCommentBox,
  CommunityLike,
} from "../CommunityStyles";
import { useNavigate } from "react-router-dom";
import { Break } from "../../styles/commonStyles";

const CommunityDetail = () => {
  const navigate = useNavigate();
  const handleGoBackClick = () => {
    navigate(-1);
  };
  return (
    <>
      <GoBack onClick={handleGoBackClick}> 뒤로가기 </GoBack>
      <Container>
        {/* 상단 */}
        <CommunityDetailBox>
          <UserImage />
          <CommumnityDetailHeaderSub>
            <UserName>유저이름</UserName>
            <CommunityDetailCnt>인증 횟수 • 날짜</CommunityDetailCnt>
          </CommumnityDetailHeaderSub>
        </CommunityDetailBox>
        {/* 컨텐츠 */}
        <div>
          <CommunityDetailTitle>Lorem ipsum dolor sit ame</CommunityDetailTitle>
          <CommunityDetailContent>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
            <div>images</div>
            <div>555명이 봤어요</div>
          </CommunityDetailContent>
        </div>
      </Container>
      {/* 댓글  = 컴포넌트 분리 필요*/}
      <Break />
      <Container>
        <CommunityDetailCommentHeader>
          <div>댓글 : 2</div>
          <div>등록순 최신순</div>
        </CommunityDetailCommentHeader>
        {/* 하나의 개별 댓글들 */}
        {/* 전체 댓글 박스 */}
        <CommunityDetailFirstCommentBox>
          <CommunityDetailBox>
            <UserImage />
            <CommumnityDetailHeaderSub>
              <UserName>유저이름</UserName>
              <CommunityDetailCnt>인증 횟수 • 날짜</CommunityDetailCnt>
            </CommumnityDetailHeaderSub>
          </CommunityDetailBox>
          <CommunityDetailFirstComment>
            <CommunityDetailContent>
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
            </CommunityDetailContent>
            <CommunityLike>
              <div>좋아요</div> &nbsp;
              <div>답글 1</div>
            </CommunityLike>
          </CommunityDetailFirstComment>
          {/* 대댓글 */}
          <CommunityDetailSecondCommentBox>
            <CommunityDetailBox>
              <UserImage />
              <CommumnityDetailHeaderSub>
                <UserName>유저이름</UserName>
                <CommunityDetailCnt>인증 횟수 • 날짜</CommunityDetailCnt>
              </CommumnityDetailHeaderSub>
            </CommunityDetailBox>
            <CommunityDetailFirstComment>
              <CommunityDetailContent>
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
              </CommunityDetailContent>
              <CommunityLike>
                <div>좋아요</div>
              </CommunityLike>
            </CommunityDetailFirstComment>
          </CommunityDetailSecondCommentBox>
          {/* 전체 댓글 박스 */}
        </CommunityDetailFirstCommentBox>
      </Container>
    </>
  );
};

export default CommunityDetail;
