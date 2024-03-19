import React from "react";
import {
  CommunityTitle,
  CommunityContent,
  CommunityImage,
  Container,
  CommunityBox,
  CommunitySubBox,
  CommunityContainer,
  Header,
} from "../CommunityStyles";
import { useNavigate } from "react-router-dom";

const CommunityList = () => {
  const navigate = useNavigate();
  const handleGoToDetailClick = () => {
    navigate("/CommunityDetail");
  };
  return (
    <>
      <Header />
      <Container>
        <CommunityContainer onClick={handleGoToDetailClick}>
          <CommunityBox>
            <div>
              <CommunityTitle>같이 개발하실 분!!!</CommunityTitle>
              <CommunityContent>
                나랑 같이 개발하면 좋을텐데~~언제 모여서 하나~
              </CommunityContent>
            </div>
            <CommunityImage>image</CommunityImage>
          </CommunityBox>
          <CommunitySubBox>
            <CommunitySubBox>
              <div>place동</div> &nbsp;
              <div>date일 전</div> &nbsp;
              <div>조회 count</div>
            </CommunitySubBox>
            <CommunitySubBox>
              <div>좋아요 count</div>
              <div>댓글 count</div>
            </CommunitySubBox>
          </CommunitySubBox>
        </CommunityContainer>
      </Container>
    </>
  );
};

export default CommunityList;
