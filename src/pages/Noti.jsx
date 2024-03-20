/* eslint-disable react/jsx-no-undef */
import React from 'react';
import styled from 'styled-components';

// 알림 아이템
const NotiItem = ({ title, timeAgo, contents, logo }) => (
  <Noti>
    <Logo />
    <NotiContent>
      <TextContainer>
        <Title>{title}</Title>
        <Contents>{contents}</Contents>
      </TextContainer>
      <TimeAgo>{timeAgo}</TimeAgo>
    </NotiContent>
  </Noti>
);

const TabList = () => {
  // 원래는 서버  API 호출해야함
  // 일단 미리보기

  const notis = [
    {
      id: 1,
      title: '3월 3주, 항해생활 인기글',
      contents: '이번 주 항해99에 어떤 일이 일어났을까요?',
      timeAgo: '1일 전',
      logo: '당근',
    },
    {
      id: 2,
      title: '나눔의 날 3월 소식! 농부들의 나눔',
      contents: '삐삥님께 따뜻한 봄날이 느껴지는 나눔 사연을 전해요.',
      timeAgo: '5일 전',
      logo: '당근',
    },
    {
      id: 3,
      title: '3월 2주, 동네생활 인기글',
      contents: '이번 주 오전동에 무슨 일이 있었나요?',
      timeAgo: '9일 전',
      logo: '당근',
    },
  ];

  return (
    <>
      <NotiHeader>
        알림<span className='edit'>편집</span>
      </NotiHeader>
      <NotiTabMenu>
        <NotiTab active={true}>활동 알림</NotiTab>
        <NotiTab active={false}>키워드 알림</NotiTab>
      </NotiTabMenu>
      <NotisContainer>
        {notis.map((noti) => (
          <NotiItem
            key={noti.id}
            title={noti.title}
            contents={noti.contents}
            timeAgo={noti.timeAgo}
            logoUrl={noti.logoUrl} // 로고 URL을 NotiItem에 전달
          />
        ))}
      </NotisContainer>
    </>
  );
};

export default TabList;

const NotiHeader = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
  background-color: #fff;
  font-weight: 700;
  border-bottom: 1px solid #ccc;
  position: relative;

  .edit {
    font-size: 14px;
    font-weight: 500;
    position: absolute;
    right: 20px;
  }
`;

const NotiTabMenu = styled.div`
  display: flex;
  /* justify-content: space-between;
  background-color: #f8f8f8; */
  border-bottom: 2px solid #eee;
`;

const NotiTab = styled.div`
  width: 215px;
  text-align: center;
  padding: 10px 0;
  font-size: 16px;
  font-weight: 600;
  color: #333;
  cursor: pointer;
  border-bottom: ${({ active }) => (active ? '2px solid #000' : 'none')};

  &:not([active]) {
    border-bottom: 2px solid #eee;
  }
`;

const NotisContainer = styled.div`
  width: 430px;
  height: 200px;
  background-color: #fff;
`;

// Noti 컴포넌트의 스타일 업데이트 (가로 정렬을 위해)
const Noti = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  margin: 10px 0;
  background-color: #f0f0f0;
  border-radius: 8px;
`;

const Logo = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
  background-color: #fff;
`;

const TextContainer = styled.div`
  flex-grow: 1;
`;

const Title = styled.span`
  font-weight: bold;
  color: #333;
`;
const Contents = styled.span`
  font-weight: 500;
  color: #333;
`;
const TimeAgo = styled.span`
  margin-left: auto;
  color: #666;
`;
const NotiContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  margin-left: 10px;
`;
