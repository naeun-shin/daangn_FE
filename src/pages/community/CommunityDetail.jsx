import React from "react";
import {
  Header,
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
  CommunityDetailImage,
  CommunityDetailLikeBox,
  CommunityDetailLikeAndSave,
  CommunityCountBox,
  CommunityLike,
  Footer,
  FooterLeft,
} from "../CommunityStyles";
import { useNavigate } from "react-router-dom";
import { Break } from "../../styles/commonStyles";
import TEST1 from "../../images/TEST1.jpg";
import TEST3 from "../../images/TEST3.png";
import { FaRegEye } from "react-icons/fa";
import { GoThumbsup } from "react-icons/go";
import { AiOutlinePicture } from "react-icons/ai";
import { BiMap } from "react-icons/bi";
import { HiPaperAirplane } from "react-icons/hi2";

const CommunityDetail = () => {
  const navigate = useNavigate();
  const handleGoBackClick = () => {
    navigate(-1);
  };
  
  return (
    <>
      <Header>
        <button onClick={handleGoBackClick}> 뒤로가기 </button>
      </Header>
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
            <CommunityDetailImage src={TEST1} />
            <CommunityDetailImage src={TEST3} />
            <CommunityCountBox>
              <FaRegEye /> &nbsp; 555명이 봤어요
            </CommunityCountBox>
            <CommunityDetailLikeBox>
              <CommunityDetailLikeAndSave>
                <GoThumbsup />
                공감하기
              </CommunityDetailLikeAndSave>
              <CommunityDetailLikeAndSave>저장</CommunityDetailLikeAndSave>
            </CommunityDetailLikeBox>
          </CommunityDetailContent>
        </div>
      </Container>
      {/* 댓글  = 컴포넌트 분리 필요*/}
      <Break />
      <Container>
        <CommunityDetailCommentHeader>
          <div>댓글 2</div>
          <div>등록순 최신순</div>
        </CommunityDetailCommentHeader>
        {/* 하나의 개별 댓글들 */}
        {/* 전체 댓글 박스 */}
        <CommunityDetailFirstCommentBox>
          <CommunityDetailBox>
            <UserImage />
            <CommumnityDetailHeaderSub>
              <UserName>유저이름</UserName>
              <CommunityDetailCnt>동네 이름 • 날짜</CommunityDetailCnt>
            </CommumnityDetailHeaderSub>
          </CommunityDetailBox>
          <CommunityDetailFirstComment>
            <CommunityDetailContent>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
            </CommunityDetailContent>
            <CommunityLike>
              <div>
                <GoThumbsup /> 좋아요
              </div>
              &nbsp;
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
              </CommunityDetailContent>
              <CommunityLike>
                <div>
                  <GoThumbsup /> 좋아요
                </div>
              </CommunityLike>
            </CommunityDetailFirstComment>
          </CommunityDetailSecondCommentBox>
          {/* 전체 댓글 박스 */}
        </CommunityDetailFirstCommentBox>
      </Container>
      <Break />
      {/* 댓글 달기 */}
      <Container>
        <Footer>
          <FooterLeft>
            <AiOutlinePicture size={22} color="gray" />
            &nbsp; &nbsp;
            <BiMap size={22} color="gray" />
          </FooterLeft>
          <input placeholder="댓글을 입력해주세요."></input>
          <div>
            <HiPaperAirplane color="gray" />
          </div>
        </Footer>
      </Container>
    </>
  );
};

export default CommunityDetail;
