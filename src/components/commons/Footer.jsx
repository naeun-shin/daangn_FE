import React from 'react';
import styled from 'styled-components';
import { GoHome } from "react-icons/go";
import { HiOutlineNewspaper } from "react-icons/hi2";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { PiChatsCircle } from "react-icons/pi";
import { FaUser } from "react-icons/fa6";

const Footer = () => {
  return (
    <FooterContainer>

      <FooterItem>
        <GoHome style={{ fontSize: '30px' }} />
        <span>홈</span>
      </FooterItem>
      <FooterItem>
        <HiOutlineNewspaper style={{ fontSize: '30px' }} />
        <span>동네생활</span>
      </FooterItem>
      <FooterItem>
        <HiOutlineLocationMarker style={{ fontSize: '30px' }} />
        <span>내근처</span>
      </FooterItem>
      <FooterItem>
        <PiChatsCircle style={{ fontSize: '30px' }} />
        <span>채팅</span>
      </FooterItem>
      <FooterItem>
        <FaUser style={{ fontSize: '30px' }} />
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

  span {
    font-size: 13px;
  }
`;