/* eslint-disable react/jsx-no-undef */
import React from 'react';
import styled from 'styled-components';

// 알림 아이템
const NotiItem = ({ title, timeAgo, contents, logo }) => (
  <NotiContainer>
    <NotiBox>
      <LogoBox>
        {logo ? <img src={logo} alt='logo' /> : <div>logo</div>}
      </LogoBox>
      <NotiContentBox>
        <Title>{title}</Title>
        <Contents>{contents}</Contents>
        <TimeAgo>{timeAgo}</TimeAgo>
      </NotiContentBox>
    </NotiBox>
  </NotiContainer>
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
      title: '나눔의 날 3월 소식!',
      contents: '봄날이 느껴지는 나눔 사연을 전해요.',
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
      <NotiContainer>
        {notis.map((noti) => (
          <NotiItem
            key={noti.id}
            title={noti.title}
            contents={noti.contents}
            timeAgo={noti.timeAgo}
            logo={noti.logo}
          />
        ))}
      </NotiContainer>
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

const NotiContainer = styled.div`
  width: 390px;
  border-bottom: 1px solid #eee;
  margin: 0 auto;
`;

const NotiBox = styled.div`
  display: flex;
  margin: 20px auto;
`;

const LogoBox = styled.div`
  border: 1px solid #000;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  margin-right: 10px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NotiContentBox = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;
const Title = styled.span`
  font-size: 19px;
  font-weight: 500;
  color: #333;
  margin-bottom: 5px;
`;
const Contents = styled.span`
  font-weight: 600;
  color: #888;
  margin-bottom: 5px;
`;
const TimeAgo = styled.span`
  color: #666;
`;
