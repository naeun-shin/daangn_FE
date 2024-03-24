import React, { useEffect, useState } from 'react'
import { IoSettingsOutline } from "react-icons/io5";
import basicImg from '../../images/basicImg.png';
import { IoIosArrowForward } from "react-icons/io";
import { FiPlus } from "react-icons/fi";
import { ReactComponent as Wonsign } from '../../images/wonsign.svg';
import * as s from './MypageStyles';
import carrotPay from '../../images/carrotPay.jpg'
import { RxHamburgerMenu } from "react-icons/rx";
import { FiHeart } from "react-icons/fi";
import { TbReceipt } from "react-icons/tb";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { PiNotebook } from "react-icons/pi";
import MypageModal from './MypageModal';
import { getInfo } from '../../apis/userAxios';


const MypageList = () => {
  const profileImage = '';
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState([])


  //유저정보 가져오기


  useEffect(() => {
    const getUserInfo = async () => {
      try {
        const data = await getInfo();
        setUser(data);
        console.log('user', user);
      } catch (error) {
        alert(error.message);
      }
    };
    getUserInfo();
  }, [])


  const handleSubmitModal = (updatedUser) => {
    setUser(updatedUser);
    setIsOpen(false)
  }


  return (
    <>
      <s.Container>
        <div style={{ display: 'bolck', fontSize: '25px', textAlign: 'right', marginTop: '50px' }}><IoSettingsOutline /></div>
        <s.ProfileBar>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <s.ProfileImage src={profileImage ? profileImage : basicImg} alt="Profile" />
            <p style={{ fontWeight: '700', marginLeft: '10px', fontSize: '20px' }}>{user.nickname}</p>
          </div>
          <s.PayButton style={{ width: '100px' }} onClick={() => setIsOpen(true)}>프로필 수정</s.PayButton>
        </s.ProfileBar>
        <s.PayDiv>
          <s.PayBar>
            <s.PayImage src={carrotPay} />
            <span>당근하는 새로운 방법, 당근페이! <IoIosArrowForward /></span>
          </s.PayBar>
          <s.ButtonBar>
            <s.PayButton><s.FlexDiv><FiPlus />&nbsp;충전</s.FlexDiv></s.PayButton>
            <s.PayButton><s.FlexDiv><Wonsign style={{ width: '15px', height: '15px' }} />&nbsp;계좌송금</s.FlexDiv></s.PayButton>
          </s.ButtonBar>
        </s.PayDiv>
        <s.SectionBox>
          <s.TitleP>최근 방문</s.TitleP>
          <s.RoundBox><RxHamburgerMenu />전체</s.RoundBox>
        </s.SectionBox>
        <s.SectionBox>
          <s.TitleP>나의 거래</s.TitleP>
          <s.FlexDiv2><FiHeart />&nbsp;&nbsp;관심목록</s.FlexDiv2>
          <s.FlexDiv2><TbReceipt />&nbsp;&nbsp;판매내역</s.FlexDiv2>
          <s.FlexDiv2><HiOutlineShoppingBag />&nbsp;&nbsp;구매내역</s.FlexDiv2>
          <s.FlexDiv2><PiNotebook />&nbsp;&nbsp;중고거래 가계부</s.FlexDiv2>
        </s.SectionBox>
      </s.Container>
      <MypageModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onSubmit={handleSubmitModal}
        currentUser={user} />
    </>
  )
}

export default MypageList
