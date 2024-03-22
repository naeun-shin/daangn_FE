import React, { useState } from 'react'
import { IoSettingsOutline } from "react-icons/io5";
import basicImg from '../../images/basicImg.png';
import { IoIosArrowForward } from "react-icons/io";
import { FiPlus } from "react-icons/fi";
import { ReactComponent as Wonsign } from '../../images/wonsign.svg';
import styled from 'styled-components';
import carrotPay from '../../images/carrotPay.jpg'
import { RxHamburgerMenu } from "react-icons/rx";
import { FiHeart } from "react-icons/fi";
import { TbReceipt } from "react-icons/tb";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { PiNotebook } from "react-icons/pi";
import MypageModal from './MypageModal';


const MypageList = () => {
  const profileImage = '';
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(true);
  const [user, setUser] = useState({
    phoneNumber: '',
    nickname: '',
    address: '',
    email: '',
    password: 'Abc1234!!!',
  })


  const handleSubmitModal = (updatedUser) => {
    setUser(updatedUser);
    setShowModal(false);
  }


  return (
    <>
      <Container>
        <div style={{ display: 'bolck', fontSize: '25px', textAlign: 'right', marginTop: '50px' }}><IoSettingsOutline /></div>
        <ProfileBar>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <ProfileImage src={profileImage ? profileImage : basicImg} alt="Profile" />
            <p style={{ fontWeight: '700', marginLeft: '10px', fontSize: '20px' }}>바니마켓</p>
          </div>
          <PayButton style={{ width: '100px' }} onClick={() => setIsOpen(true)}>프로필 수정</PayButton>
        </ProfileBar>
        <PayDiv>
          <PayBar>
            <PayImage src={carrotPay} />
            <span>당근하는 새로운 방법, 당근페이! <IoIosArrowForward /></span>
          </PayBar>
          <ButtonBar>
            <PayButton><FlexDiv><FiPlus />&nbsp;충전</FlexDiv></PayButton>
            <PayButton><FlexDiv><Wonsign style={{ width: '15px', height: '15px' }} />&nbsp;계좌송금</FlexDiv></PayButton>
          </ButtonBar>
        </PayDiv>
        <SectionBox>
          <TitleP>최근 방문</TitleP>
          <RoundBox><RxHamburgerMenu />전체</RoundBox>
        </SectionBox>
        <SectionBox>
          <TitleP>나의 거래</TitleP>
          <FlexDiv2><FiHeart />&nbsp;&nbsp;관심목록</FlexDiv2>
          <FlexDiv2><TbReceipt />&nbsp;&nbsp;판매내역</FlexDiv2>
          <FlexDiv2><HiOutlineShoppingBag />&nbsp;&nbsp;구매내역</FlexDiv2>
          <FlexDiv2><PiNotebook />&nbsp;&nbsp;중고거래 가계부</FlexDiv2>
        </SectionBox>
      </Container>
      <MypageModal
        isOpen={isOpen}
        onClose={() => setShowModal(false)}
        onSubmit={handleSubmitModal} />
    </>
  )
}

export default MypageList


const Container = styled.div`
  margin: 0 17px;
`

const ProfileBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 0 20px;
`
const ProfileImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const PayDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 99%;
  height: 120px;
  border: 1px solid #FF6F0F;
  border-radius: 5px;
  display: flex;
  margin: 0 auto 10px;
`

const PayBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
  margin-right: 10px;
  `

const PayImage = styled.img`
  width: 90px;
  height: 45px;
`

const ButtonBar = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 12px;
`

const PayButton = styled.button`
  width: 45%;
  height: 35px;
  cursor: pointer;
`

const SectionBox = styled.div`
  margin: 25px 0;
`

const RoundBox = styled.div`
  width: 65px;
  height: 35px;
  border-radius: 30px;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
`

const TitleP = styled.p`
  font-weight: 600;
`
const FlexDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
`
const FlexDiv2 = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`