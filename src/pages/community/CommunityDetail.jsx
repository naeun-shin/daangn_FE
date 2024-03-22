import React, { useState } from 'react';
import {
  Header,
  CommunityDetailBox,
  CommumnityDetailHeaderSub,
  UserImage,
  UserName,
  Container,
  HeaderRight,
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
  ModalContainer,
  ModalContent,
} from '../CommunityStyles';
import {
  useNavigate,
  useParams,
} from 'react-router-dom';
import {
  Break,
  LightBreak,
} from '../../pages/styles/commonStyles';
import { FaRegEye } from 'react-icons/fa';
import { GoThumbsup } from 'react-icons/go';
import { AiOutlinePicture } from 'react-icons/ai';
import { BiMap } from 'react-icons/bi';
import { HiPaperAirplane } from 'react-icons/hi2';
import {
  useMutation,
  useQuery,
} from '@tanstack/react-query';
import {
  deleteCommunity,
  getCommunityDetail,
} from '../../apis/communityAxios';
import { CiMenuKebab } from 'react-icons/ci';
import { PiExport } from 'react-icons/pi';
import { GoBellFill } from 'react-icons/go';
import { MdArrowBackIos } from 'react-icons/md';
import styled, {
  keyframes,
} from 'styled-components';

const CommunityDetail = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] =
    useState(false);

  const { id } = useParams();

  const { data, isLoading, isError } = useQuery({
    queryKey: ['community', id],
    queryFn: async () => {
      const response =
        await getCommunityDetail(id);
      return response;
    },
  });

  const deleteCommunityContent = useMutation({
    mutationFn: deleteCommunity,
    onSuccess: async (data) => {
      console.log('삭제 성공 : ', data);
      setIsDeleteOpen(false);
      setIsOpen(!isOpen);
      navigate('/community');
    },
    onError: (error) => {
      console.log('삭제 실패 : ', error);
    },
  });

  if (isLoading) {
    return <div> is Loading ...</div>;
  } else if (isError) {
    return <div> is Error </div>;
  }

  const detailList = data.data;
  const detailImage =
    detailList.communityImageList;

  // createdAt을 현재일로부터 몇일 전인지 계산하는 함수
  const calculateDaysAgo = (createdAt) => {
    const currentDate = new Date();
    const createdAtDate = new Date(createdAt);

    const differenceInTime =
      currentDate.getTime() -
      createdAtDate.getTime();
    const differenceInDays =
      differenceInTime / (1000 * 3600 * 24);

    return Math.round(differenceInDays);
  };

  const handleGoBackClick = () => {
    navigate(-1);
  };
  // 모달 토글 함수
  const handleModalBottomClick = () => {
    setIsOpen(!isOpen); // 모달 상태를 반전시킵니다.
  };

  // 게시글 삭제 모달 오픈
  const handleOpenDeleteModalClick = () => {
    console.log(isDeleteOpen);
    setIsDeleteOpen(true);
  };
  // 취소 버튼
  const handleCancelClick = () => {
    setIsDeleteOpen(false);
    setIsOpen(!isOpen);
  };
  // 삭제 버튼
  const handleDeleteClick = () => {
    console.log(id);
    deleteCommunityContent.mutate(id);
  };
  // 흐림 효과를 위한 keyframes

  // 모달 배경 스타일
  const ModalDeleteContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(
      0,
      0,
      0,
      0.25
    ); /* 흐림 효과를 위한 반투명 배경 */
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 999; /* 다른 요소들 위에 띄우기 위한 z-index 설정 */
  `;

  // 모달 내용 스타일
  const ModalDeleteContent = styled.div`
    background-color: white; /* 하얀 배경 */
    padding: 20px;
    border-radius: 10px;
  `;

  // 모달 삭제 버튼 스타일
  const DeleteButton = styled.button`
    /* 여기에 버튼 스타일을 추가하세요 */
  `;
  // 모달 삭제 취소 버튼 스타일
  const CancelButton = styled.button``;
  return (
    <>
      <Header>
        <button onClick={handleGoBackClick}>
          {' '}
          <MdArrowBackIos size={20} />{' '}
        </button>
        <HeaderRight>
          <GoBellFill size={20} />{' '}
          <PiExport size={20} />
          <button
            onClick={handleModalBottomClick}
          >
            <CiMenuKebab />
          </button>
        </HeaderRight>
      </Header>
      <Container>
        <CommunityDetailBox>
          <UserImage />
          <CommumnityDetailHeaderSub>
            <UserName>
              {detailList.nickname}
            </UserName>
            <CommunityDetailCnt>
              인증 횟수 •{' '}
              {calculateDaysAgo(
                detailList.createdAt,
              )}
              일 전
            </CommunityDetailCnt>
          </CommumnityDetailHeaderSub>
        </CommunityDetailBox>
        <div>
          <CommunityDetailTitle>
            {detailList.title}
          </CommunityDetailTitle>
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
              <CommunityDetailLikeAndSave>
                저장
              </CommunityDetailLikeAndSave>
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
              <CommunityDetailCnt>
                동네 이름 • 날짜
              </CommunityDetailCnt>
            </CommumnityDetailHeaderSub>
          </CommunityDetailBox>
          <CommunityDetailFirstComment>
            <CommunityDetailContent>
              Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore
              et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud
              exercitation ullamco laboris
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
                <CommunityDetailCnt>
                  인증 횟수 • 날짜
                </CommunityDetailCnt>
              </CommumnityDetailHeaderSub>
            </CommunityDetailBox>
            <CommunityDetailFirstComment>
              <CommunityDetailContent>
                Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed
                do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud
                exercitation ullamco laboris
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
            <AiOutlinePicture
              size={22}
              color="gray"
            />
            &nbsp; &nbsp;
            <BiMap size={22} color="gray" />
          </FooterLeft>
          <input placeholder="댓글을 입력해주세요."></input>
          <div>
            <HiPaperAirplane color="gray" />
          </div>
        </Footer>
      </Container>

      {/* 모달 */}
      {/* 모달을 클릭하면 아래에서 위로 올라오는 모달 */}
      <ModalContainer isOpen={isOpen}>
        <ModalContent>
          {/* 모달 내용 */}
          <button>수정</button>
          <LightBreak />
          <button
            onClick={handleOpenDeleteModalClick}
          >
            삭제
          </button>
        </ModalContent>
      </ModalContainer>

      {/* 삭제 모달 */}
      {isDeleteOpen && (
        <ModalDeleteContainer>
          <ModalDeleteContent>
            <div>게시글을 삭제할까요?</div>
            <div>
              게시글을 삭제하면 모든 데이터가
              삭제되고 다시 볼 수 없어요.
            </div>
            <CancelButton
              onClick={() =>
                setIsDeleteOpen(false)
              }
            >
              취소
            </CancelButton>
            <DeleteButton
              onClick={handleDeleteClick}
            >
              삭제
            </DeleteButton>
          </ModalDeleteContent>
        </ModalDeleteContainer>
      )}
    </>
  );
};

export default CommunityDetail;
