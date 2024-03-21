import React, { useState } from 'react';
import styled from 'styled-components';
import { GoHomeFill } from "react-icons/go"; //홈색칠
import { GoHome } from "react-icons/go";
import { HiNewspaper } from "react-icons/hi";//동네생활색칠
import { HiOutlineNewspaper } from "react-icons/hi2";
import { HiLocationMarker } from "react-icons/hi"; //내근처색칠
import { HiOutlineLocationMarker } from "react-icons/hi";
import { PiChatsCircleFill } from "react-icons/pi"; //채팅색칠
import { PiChatsCircle } from "react-icons/pi";
import { FaUser } from "react-icons/fa6"; //나의당근색칠
import { FaRegUser } from "react-icons/fa6";
import { useLocation } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  const [footerIcons, setFooterIcons] = useState({
    home: false,
    news: false,
    near: false,
    chat: false,
    mypage: false,
  });

  if (location.pathname === "/" || location.pathname === "/auth") {
    return null;
  }

  const handleHomeClick = () => {
    setFooterIcons(prevState => ({
      home: true,
      news: false,
      near: false,
      chat: false,
      mypage: false,
    }));
  };

  const handleNewsClick = () => {
    setFooterIcons(prevState => ({
      home: false,
      news: true,
      near: false,
      chat: false,
      mypage: false,
    }));
  };
  const handleNearClick = () => {
    setFooterIcons(prevState => ({
      home: false,
      news: false,
      near: true,
      chat: false,
      mypage: false,
    }));
  };
  const handleChatClick = () => {
    setFooterIcons(prevState => ({
      home: false,
      news: false,
      near: false,
      chat: true,
      mypage: false,
    }));
  };
  const handleMypageClick = () => {
    setFooterIcons(prevState => ({
      home: false,
      news: false,
      near: false,
      chat: false,
      mypage: true,
    }));
  };

  return (
    <FooterContainer>
      <FooterItem onClick={handleHomeClick}>
        {footerIcons.home ? <GoHomeFill style={{ fontSize: '30px' }} /> : <GoHome style={{ fontSize: '30px' }} />}
        <span>홈</span>
      </FooterItem>
      <FooterItem onClick={handleNewsClick}>
        {footerIcons.news ? <HiNewspaper style={{ fontSize: '30px' }} /> : <HiOutlineNewspaper style={{ fontSize: '30px' }} />}
        <span>동네생활</span>
      </FooterItem>
      <FooterItem onClick={handleNearClick}>
        {footerIcons.near ? <HiLocationMarker style={{ fontSize: '30px' }} /> : <HiOutlineLocationMarker style={{ fontSize: '30px' }} />}
        <span>내근처</span>
      </FooterItem>
      <FooterItem onClick={handleChatClick}>
        {footerIcons.chat ? <PiChatsCircleFill style={{ fontSize: '30px' }} /> : <PiChatsCircle style={{ fontSize: '30px' }} />}
        <span>채팅</span>
      </FooterItem>
      <FooterItem onClick={handleMypageClick}>
        {footerIcons.mypage ? <FaUser style={{ fontSize: '30px' }} /> : <FaRegUser style={{ fontSize: '30px' }} />}
        <span>나의당근</span>
      </FooterItem>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.div`
  width: 100%;
  height: 60px;
  border-top: 1px solid black;
  display: flex;
  justify-content: space-around;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 1000;
`;

const FooterItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: center;
  margin: 0 10px;
  font-size: 16px;
  cursor: pointer;

  span {
    font-size: 13px;
  }
`;