import React, { useState } from "react";
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
import { useNavigate, useParams } from "react-router-dom";
import { Break } from "../../styles/commonStyles";
import { FaRegEye } from "react-icons/fa";
import { GoThumbsup } from "react-icons/go";
import { AiOutlinePicture } from "react-icons/ai";
import { BiMap } from "react-icons/bi";
import { HiPaperAirplane } from "react-icons/hi2";
import { useQuery } from "@tanstack/react-query";
import { getCommunityDetail } from "../../apis/communityAxios";

const CommunityDetail = () => {
  const navigate = useNavigate();

  const { id } = useParams();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["community", id],
    queryFn: async () => {
      const response = await getCommunityDetail(id);
      return response;
    },
  });

  if (isLoading) {
    return <div> is Loading ...</div>;
  } else if (isError) {
    return <div> is Error </div>;
  }

  const detailList = data.data.data;
  const detailImage = detailList.communityImageList;

  const handleGoBackClick = () => {
    navigate(-1);
  };

  return (
    <>
      <Header>
        <button onClick={handleGoBackClick}> 뒤로가기 </button>
      </Header>
      <Container>
        <CommunityDetailBox>
          <UserImage />
          <CommumnityDetailHeaderSub>
            <UserName>{detailList.nickname}</UserName>
            <CommunityDetailCnt>
              인증 횟수 • {detailList.createdAt}
            </CommunityDetailCnt>
          </CommumnityDetailHeaderSub>
        </CommunityDetailBox>
        <div>
          <CommunityDetailTitle>{detailList.title}</CommunityDetailTitle>
          <CommunityDetailContent>
            <div>{detailList.contents}</div>
            {}

            {detailImage.map((image, index) => (
              <div key={index}>
                {!image ? null : (
                  <CommunityDetailImage
                    src={image.url}
                    alt={`Image ${index}`}
                  />
                )}
              </div>
            ))}
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
      <Break />
      <Container>
        <CommunityDetailCommentHeader>
          <div>댓글 2</div>
          <div>등록순 최신순</div>
        </CommunityDetailCommentHeader>

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
        </CommunityDetailFirstCommentBox>
      </Container>
      <Break />

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
